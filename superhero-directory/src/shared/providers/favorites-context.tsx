import React, { createContext } from 'react';

import { useLocalStorage } from '@uidotdev/usehooks';

type FavoritesContext = {
  favoritesHeroesIds: string[];
  addFavoritesHero: (id: string) => void;
  deleteFavoritesHero: (id: string) => void;
  toggleFavoritesHero: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContext | null>(null);

export function useFavoritesContext() {
  const context = React.useContext(FavoritesContext);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}

export function useFavorites() {
  const favorites = useFavoritesContext();
  return favorites.favoritesHeroesIds;
}

export function useToggleFavorite() {
  const favorites = useFavoritesContext();
  return favorites.toggleFavoritesHero;
}

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State
  const [favoritesHeroesIds, setFavoritesHeroesIds] = useLocalStorage<string[]>(
    'favorites-heroes-ids',
    []
  );

  const addFavoritesHero = (id: string) => {
    setFavoritesHeroesIds([...favoritesHeroesIds, id]);
  };

  const deleteFavoritesHero = (id: string) => {
    setFavoritesHeroesIds(
      [...favoritesHeroesIds].filter((favId) => favId !== id)
    );
  };

  const toggleFavoritesHero = (id: string) => {
    if (favoritesHeroesIds.includes(id)) {
      deleteFavoritesHero(id);
      return;
    }
    addFavoritesHero(id);
  };

  return (
    <FavoritesContext
      value={{
        favoritesHeroesIds,
        addFavoritesHero,
        deleteFavoritesHero,
        toggleFavoritesHero,
      }}
    >
      {children}
    </FavoritesContext>
  );
};
