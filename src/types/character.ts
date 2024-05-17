export interface CharacterData {
  pages: number;
  characters: Character[];
}

export interface Character {
  created: string;
  episode: string[];
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  url: string;
}

export interface SearchParams {
  name: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  status: 'Alive' | 'Dead' | 'unknown';
}
