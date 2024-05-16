import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Character } from '../../types/character';

interface CharactersListProps {
  characters: Character[];
  toggleIsModal: () => void;
}

export const CharactersList = ({ characters, toggleIsModal }: CharactersListProps) => {
  return (
    <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {characters.map(character => (
        <li key={character.id} onClick={toggleIsModal}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};
