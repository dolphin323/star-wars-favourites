import { Api } from "@api/api";
import { Character, GetCharactersPage } from "./types";

class CharacterDomain {
  public getById({ id }: { id: string }): Promise<Character> {
    return Api.get(`https://swapi.dev/api/people/${id}/`);
  }

  public getPage({ page }: { page: number }): Promise<GetCharactersPage> {
    return Api.get(`https://swapi.dev/api/people`, {
      page,
    });
  }
}

const CharacterApiDomain = new CharacterDomain();

export { CharacterApiDomain };
