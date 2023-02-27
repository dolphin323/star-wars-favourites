import { Api } from "@api/api";
import { GetCharactersPage } from "./types";

class CharacterDomain {
  public getPage({ page }: { page: number }): Promise<GetCharactersPage> {
    return Api.get(`https://swapi.dev/api/people`, {
      page,
    });
  }
}

const CharacterApiDomain = new CharacterDomain();

export { CharacterApiDomain };
