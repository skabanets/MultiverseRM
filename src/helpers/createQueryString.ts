import { SearchParams } from '../types/character';

export const createQueryString = (params: Partial<SearchParams>): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== '') {
      searchParams.append(key, value as string);
    }
  }

  const queryString = searchParams.toString();
  return queryString ? `&${queryString}` : '';
};
