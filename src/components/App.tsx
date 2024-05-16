import { Header } from './Header/Header';
import { useState } from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import { fetchCharacters } from '../services/api';
import { CharacterData } from '../types/character';

export const App = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading }: UseQueryResult<CharacterData, unknown> = useQuery(
    ['characters', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!data) {
    return <h2>there is no data</h2>;
  }

  console.log(data.pages, data.characters);

  return (
    <>
      <Header />
      <main>
        <ul></ul>
      </main>
      <button onClick={() => setPage(prevPage => prevPage + 1)}>Next page</button>
    </>
  );
};
