import axios from 'axios';
import { CharacterData } from '../types/character';

export const fetchCharacters = async (page: number): Promise<CharacterData> => {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

  const {
    info: { pages },
    results: characters,
  } = data;

  return { pages, characters };
};
