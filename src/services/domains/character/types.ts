enum Gender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "n/a",
}

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface GetCharactersPage {
  next?: string;
  previous?: string;
  results: Character[];
}

export { GetCharactersPage, Character, Gender };
