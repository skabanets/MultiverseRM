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

  const handleChangePage = (newPage: number): void => {
    if (page === newPage) return;

    setPage(newPage);
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
          <div>
            <div className="text-gray-500 text-lg mb-5 flex flex-col md:flex-row md:justify-between">
              <h2>Total characters: {data.count}</h2>
              {data.count > 20 && <h2>Current page: {page}</h2>}
            </div>
            <CharactersList characters={data.characters} />
          </div>
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
