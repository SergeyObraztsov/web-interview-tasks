import { useState } from 'react';

import { Card } from '~shared/ui/card';
import { SearchInput } from '~shared/ui/search-input';

import { Grid } from '@radix-ui/themes';

export function SuperheroListPage() {
  const [searchInput, setSearchInput] = useState('');

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-display text-center text-4xl">Superhero Directory</h1>
      <p>
        Welcome to the Superhero Directory! Here you can find information about
        your favorite superheroes.
      </p>
      <div className="max-w-xl">
        <SearchInput value={searchInput} onChange={searchChangeHandler} />
      </div>
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
        <Card
          imgHref={
            'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
          }
          title={'Test'}
          subtitle={'SubTest'}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Grid>
    </main>
  );
}
