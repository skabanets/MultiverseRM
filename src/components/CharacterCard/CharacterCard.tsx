import { Character } from '../../types/character';

interface CharacterCardPops {
  character: Character;
}
export const CharacterCard = ({ character }: CharacterCardPops) => {
  return (
    <div className="h-[340px] card bg-teal-400 text-base-200 shadow-lg cursor-pointer hover:shadow-[#66ff00] hover:bg-[#66ff00] hover:scale-105">
      <figure>
        <img src={character.image} alt={character.name} width={280} height={280} />
      </figure>

      <div className="card-body h-[60px] px-0 py-6 flex justify-center items-center text-center">
        <h2 className="card-title">{character.name}</h2>
      </div>
    </div>
  );
};
