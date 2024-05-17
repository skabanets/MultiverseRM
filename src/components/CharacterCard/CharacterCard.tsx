import { useModal } from '../../hooks/useModal';
import { Character } from '../../types/character';
import { CharacterModalContent } from '../CharacterModalContent/CharacterModalContent';
import { Modal } from '../Modal/Modal';

interface CharacterCardPops {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardPops) => {
  const [isModal, toggleIsModal] = useModal();

  return (
    <>
      <div
        onClick={toggleIsModal}
        className="h-[340px] card bg-teal-400 text-base-200 shadow-lg cursor-pointer hover:shadow-[#66ff00] hover:bg-[#66ff00] hover:scale-105 ease-out"
      >
        <figure>
          <img src={character.image} alt={character.name} width={280} height={280} />
        </figure>
        <div className="card-body h-[60px] px-0 py-6 flex justify-center items-center text-center">
          <h2 className="card-title">{character.name}</h2>
        </div>
      </div>
      {isModal && (
        <Modal toggleModal={toggleIsModal}>
          <CharacterModalContent character={character} />
        </Modal>
      )}
    </>
  );
};
