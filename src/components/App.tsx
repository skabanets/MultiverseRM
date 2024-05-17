import { useState } from 'react';
import { UseQueryResult, useQuery } from 'react-query';

import { Modal } from './Modal/Modal';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { CharactersList } from './CharactersList/CharactersList';
import { PaginationBar } from '../PaginationBar/PaginationBar';

import { fetchCharacters } from '../services/api';
import { CharacterData } from '../types/character';
import { useModal } from '../hooks/useModal';

export const App = () => {
  const [page, setPage] = useState<number>(1);
  const [isModal, toggleIsModal] = useModal();

  const { data, isLoading }: UseQueryResult<CharacterData, unknown> = useQuery(
    ['characters', page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <h2>there is no data</h2>;
  }

  const handleChangePage = (page: number): void => {
    setPage(page);
  };

  return (
    <>
      <Header />
      <main className="container py-12 flex flex-col justify-center items-center gap-5">
        <CharactersList characters={data.characters} toggleIsModal={toggleIsModal} />
        <PaginationBar page={page} count={data.pages} handleChangePage={handleChangePage} />
      </main>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <h2>Modal</h2>
        </Modal>
      )}
    </>
  );
};
