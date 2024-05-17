import axios from 'axios';
import { CharacterData } from '../types/character';

export const fetchCharacters = async (
  page: number,
  searchParams: string
): Promise<CharacterData> => {
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}${searchParams}`
    );

    const {
      info: { pages, count },
      results: characters,
    } = data;

    return { pages, count, characters };
  } catch (error) {
    return { pages: 0, count: 0, characters: [] };
  }
};
