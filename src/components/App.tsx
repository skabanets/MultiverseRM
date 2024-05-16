import { Header } from './Header/Header';
import { useState } from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import { fetchCharacters } from '../services/api';
import { CharacterData } from '../types/character';
import { CharactersList } from './CharactersList/CharactersList';
import { Loader } from './Loader/Loader';
import { useModal } from '../hooks/useModal';
import { Modal } from './Modal/Modal';

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

  console.log(data.pages, data.characters);

  return (
    <>
      <Header />
      <main className="container py-12 flex justify-center">
        <CharactersList characters={data.characters} toggleIsModal={toggleIsModal} />
      </main>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <h2>Modal</h2>
        </Modal>
      )}
      <button onClick={() => setPage(prevPage => prevPage + 1)} className="text-black">
        Next page
      </button>
    </>
  );
};
