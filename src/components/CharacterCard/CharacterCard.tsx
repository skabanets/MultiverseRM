import { Character } from '../../types/character';

interface CharacterCardPops {
  character: Character;
}
export const CharacterCard = ({ character }: CharacterCardPops) => {
  return (
    <div className="card bg-[#66ff00] text-black shadow-xl w-fit cursor-pointer">
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <div className="card-body h-[60px] px-0 py-6 flex justify-center items-center text-center">
        <h2 className="card-title">{character.name}</h2>
      </div>
    </div>
  );
};
