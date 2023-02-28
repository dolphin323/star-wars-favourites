import { PlanetApiDomain } from "@services/domains";
import { Character } from "@services/domains/character/types";
import { getIdFromUrl } from "@utils/api";
import { CharacterInfo } from "./types";

const getCharacterInfoToDisplay = async (
  currentCharacter: Character | null
): Promise<CharacterInfo[]> => {
  const characterInfo = [
    {
      label: "birth year",
      value: currentCharacter?.birth_year || "",
    },
    {
      label: "gender",
      value: currentCharacter?.gender || "",
    },
    {
      label: "hair color",
      value: currentCharacter?.hair_color || "",
    },
    {
      label: "eye color",
      value: currentCharacter?.eye_color || "",
    },
    {
      label: "height",
      value: currentCharacter?.height || "",
    },
    {
      label: "skin color",
      value: currentCharacter?.skin_color || "",
    },
    {
      label: "mass",
      value: currentCharacter?.mass || "",
    },
  ];

  if (currentCharacter?.homeworld.length) {
    const homeworld = await PlanetApiDomain.getById({
      id: getIdFromUrl(currentCharacter.homeworld),
    });
    characterInfo.push({
      label: "homeworld",
      value: homeworld.name,
    });
  }

  return characterInfo;
};

export { getCharacterInfoToDisplay };
