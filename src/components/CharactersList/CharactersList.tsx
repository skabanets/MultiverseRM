import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Character } from '../../types/character';

interface CharactersListProps {
  characters: Character[];
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <>
      <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {characters.map(character => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};
