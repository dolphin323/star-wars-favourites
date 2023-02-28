import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Gender } from "@services/domains/character/types";

const INITIAL_TOTAL_FAVOURITE_CHARACTERS_BY_GENDER = {
  [Gender.FEMALE]: 0,
  [Gender.MALE]: 0,
  [Gender.OTHER]: 0,
};

export const INITIAL_STATE: CharacterReducerState = {
  isLoading: false,
  currentPage: 1,
  characters: [],
  isNextPage: true,
  currentCharacter: null,
  favouritesCharacterIds: [],
  totalFavouriteCharactersByGender:
    INITIAL_TOTAL_FAVOURITE_CHARACTERS_BY_GENDER,
};

export interface CharacterReducerState {
  isLoading: boolean;
  currentPage: number;
  characters: Character[];
  isNextPage: boolean;
  currentCharacter: Character | null;
  favouritesCharacterIds: string[];
  totalFavouriteCharactersByGender: {
    [key in Gender]: number;
  };
}

export const characterSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "character",
  reducers: {
    clearState: () => INITIAL_STATE,

    setLoading: (
      state,
      action: PayloadAction<{
        isLoading: boolean;
      }>
    ) => {
      const { isLoading } = action.payload;

      state.isLoading = isLoading;
    },

    addFavourite: (
      state,
      action: PayloadAction<{
        id: string;
        gender: Gender;
      }>
    ) => {
      const { id, gender } = action.payload;

      state.favouritesCharacterIds = [...state.favouritesCharacterIds, id];
      state.totalFavouriteCharactersByGender[gender] =
        state.totalFavouriteCharactersByGender[gender] + 1;
    },

    removeFavourite: (
      state,
      action: PayloadAction<{
        id: string;
        gender: Gender;
      }>
    ) => {
      const { id, gender } = action.payload;

      state.favouritesCharacterIds = state.favouritesCharacterIds.filter(
        (favouriteId) => id !== favouriteId
      );
      state.totalFavouriteCharactersByGender[gender] =
        state.totalFavouriteCharactersByGender[gender] - 1;
    },

    removeAllFavourite: (state) => {
      state.favouritesCharacterIds = [];
      state.totalFavouriteCharactersByGender =
        INITIAL_TOTAL_FAVOURITE_CHARACTERS_BY_GENDER;
    },

    setCharacters: (
      state,
      action: PayloadAction<{
        characters: Character[];
        currentPage: number;
        isNextPage: boolean;
      }>
    ) => {
      const { characters, currentPage, isNextPage } = action.payload;

      state.characters = characters;
      state.currentPage = currentPage;
      state.isNextPage = isNextPage;
    },

    setCurrentCharacter: (
      state,
      action: PayloadAction<{
        character: Character;
      }>
    ) => {
      const { character } = action.payload;

      state.currentCharacter = character;
    },

    getCharacters: (
      state,
      action: PayloadAction<{
        page: number;
      }>
    ) => state,

    getCharacterById: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => state,
  },
});
