import { useEffect, useState } from 'react';
import { UseQueryResult, useQuery } from 'react-query';

import { Filter } from './Filter/Filter';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { Notification } from './Notification/Notification';
import { PaginationBar } from './PaginationBar/PaginationBar';
import { CharactersList } from './CharactersList/CharactersList';

import { fetchCharacters } from '../services/api';
import { CharacterData } from '../types/character';

export const App = () => {
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useState<string>('');

  const { data, isLoading }: UseQueryResult<CharacterData, unknown> = useQuery(
    ['characters', page, searchParams],
    () => fetchCharacters(page, searchParams),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    const handleScroll = () => window.scrollY || document.documentElement.scrollTop;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <h2>there is no data</h2>;
  }

  const handleChangePage = (page: number): void => {
    setPage(page);
    scrollUp();
  };

  const handleChangeSearchParams = (data: string): void => {
    setSearchParams(data);
    setPage(1);
  };

  return (
    <>
      <Header />
      <main className="container py-10 flex flex-col justify-center items-center gap-10">
        <Filter setParams={handleChangeSearchParams} />
        {data.characters.length !== 0 ? (
          <CharactersList characters={data.characters} />
        ) : (
          <Notification />
        )}
        {data.pages > 1 && (
          <PaginationBar page={page} count={data.pages} handleChangePage={handleChangePage} />
        )}
      </main>
    </>
  );
};
