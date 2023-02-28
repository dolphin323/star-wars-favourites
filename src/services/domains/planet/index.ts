import { Api } from "@api/api";
import { Planet } from "./types";

class PlanetDomain {
  public getById({ id }: { id: string }): Promise<Planet> {
    return Api.get(`https://swapi.dev/api/planets/${id}/`);
  }
}

const PlanetApiDomain = new PlanetDomain();

export { PlanetApiDomain };
