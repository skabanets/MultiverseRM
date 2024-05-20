import { getStatusColor } from '../../helpers/getStatusColor';
import { Character } from '../../types/character';

interface CharacterModalContentPops {
  character: Character;
}

export const CharacterModalContent = ({ character }: CharacterModalContentPops) => {
  return (
    <div className="flex flex-col w-[300px] md:flex-row md:w-[600px] text-base-100 text-lg min-h-[300px]">
      <div className="overflow-hidden imageWrapper">
        <img src={character.image} alt={character.name} width={300} />
      </div>
      <div className="flex flex-col justify-center gap-3 md:gap-4 p-5 mx-auto max-w-[300px]">
        <h2 className="text-2xl font-exo-bold">{character.name}</h2>
        <div>
          <p>
            <span className="font-bold text-gray-600">Gender:</span> {character.gender}
          </p>
          <p>
            <span
              className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(character.status)}`}
            ></span>
            {character.status}
            {character.type && ` - ${character.type}`}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-600">Last known location:</h3>
          <p>{character.location.name}</p>
        </div>
      </div>
    </div>
  );
};
