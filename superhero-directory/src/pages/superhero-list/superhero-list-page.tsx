import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { superheroApi } from '~entities/superhero';

import { Card } from '~shared/ui/card';
import { InfoBlock } from '~shared/ui/info-block';
import { SearchInput } from '~shared/ui/search-input';

import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Grid, Skeleton, Text } from '@radix-ui/themes';
import { useDebounce } from '@uidotdev/usehooks';

export function SuperheroListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get('q') ?? '');
  const debouncedSearch = useDebounce(searchInput, 500);

  const navigate = useNavigate();

  const {
    data: superheros,
    isLoading,
    isFetching,
    error,
  } = superheroApi.useSearchSuperheros({
    query: debouncedSearch,
  });

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set('q', value);
      else next.delete('q');
      return next;
    });
  };

  const cardClickHandler = (id: string) => {
    navigate('/' + id);
  };

  const displayedSuperheros = superheros?.slice(0, 50) || [];
  const hasMoreResults = superheros && superheros.length > 50;

  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-display text-center text-4xl">Superhero Directory</h1>
      <p>
        Welcome to the Superhero Directory! Here you can find information about
        your favorite superheroes.
      </p>
      <div className="max-w-xl">
        <SearchInput
          value={searchInput}
          onChange={searchChangeHandler}
          isLoading={isFetching}
        />
      </div>
      {error ? (
        <InfoBlock />
      ) : (
        <Grid
          columns={{
            initial: 'repeat(1, 1fr)',
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
            xl: 'repeat(6, 1fr)',
          }}
          gap="4"
          width="auto"
        >
          {displayedSuperheros?.length ? (
            <>
              {displayedSuperheros?.map(({ image, name, biography, id }) => (
                <Card
                  key={id}
                  imgHref={image.url}
                  title={name}
                  subtitle={biography['full-name'] || '-'}
                  height="100%"
                  onClick={() => cardClickHandler(id)}
                />
              ))}

              {hasMoreResults && (
                <Text className="col-span-2">
                  To see more heroes please adjust your search parameters
                </Text>
              )}
            </>
          ) : isLoading ? (
            Array(12)
              .fill(0)
              .map((_, idx) => (
                <Skeleton key={`Skeleton-Card-${idx}`}>
                  <Card title="Dummy title" subtitle="Dummy sub title" />
                </Skeleton>
              ))
          ) : (
            <InfoBlock
              title={debouncedSearch ? 'Nothing found' : 'Start searching'}
              icon={
                <ArrowUpIcon
                  height={24}
                  width={24}
                  className="animate-bounce"
                />
              }
            />
          )}
        </Grid>
      )}
    </main>
  );
}
