import { useNavigate } from 'react-router-dom';

import { superheroApi } from '~entities/superhero';

import { useToggleFavorite } from '~shared/providers/favorites-context';
import { Card } from '~shared/ui/card';

import { Skeleton } from '@radix-ui/themes';

type FavoriteSuperheroProps = {
  id: string;
};

export function FavoriteSuperheroCard({ id }: FavoriteSuperheroProps) {
  const {
    data: superhero,
    isLoading,
    error,
  } = superheroApi.useSuperhero({ id });

  const toggleFavorite = useToggleFavorite();
  const navigate = useNavigate();

  const cardClickHandler = (id: string) => {
    navigate('/' + id);
  };

  if (isLoading) {
    return (
      <Skeleton>
        <Card title="Dummy title" subtitle="Dummy sub title" />
      </Skeleton>
    );
  }

  if (error || !superhero) {
    return (
      <></>
      // <p className="text-center text-red-500">Failed to load superhero data.</p>
    );
  }

  return (
    <Card
      key={id}
      imgHref={superhero.image.url}
      title={superhero.name}
      subtitle={superhero.biography['full-name'] || '-'}
      height="100%"
      onClick={() => cardClickHandler(id)}
      onIconButtonClick={() => toggleFavorite(id)}
      isFavorite={true}
    />
  );
}
