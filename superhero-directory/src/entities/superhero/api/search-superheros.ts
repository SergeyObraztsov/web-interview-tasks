import { config } from '~shared/config';
import { ResponseError } from '~shared/response';

import { useQuery } from '@tanstack/react-query';

import { superheroKeys } from './keys';

import { Superhero } from '../superhero';

// type ResponsePayload = {
//   'results-for': string;
//   results: Superhero[];
// };

export type Params = {
  query: string;
};

export function useSearchSuperheros(params: Params) {
  const { query } = params;

  return useQuery({
    queryKey: superheroKeys.search(query),
    enabled: !!query.trim(),
    placeholderData: (prev) => {
      return query.trim() ? prev : [];
    },
    queryFn: async () => {
      const response: Superhero[] = await fetch(
        `${config.apiHost}/api/${config.apiToken}/search/${query}`
      )
        .then(async (res) => {
          if (!res.ok) {
            const error: ResponseError = await res.json();

            throw new Error(
              `Error ${res.status}: ${res.statusText} - ${error.error}`
            );
          }

          return res.json();
        })
        .then((data) => data?.results ?? []);

      return response;
    },
  });

  // Method documentation: https://superheroapi.com/#name
  // Example call: GET https://superheroapi.com/api/${access-token}/search/${superhero-name}
}
