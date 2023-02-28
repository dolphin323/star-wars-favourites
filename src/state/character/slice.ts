import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@services/domains/character/types";

export const INITIAL_STATE: CharacterReducerState = {
  isLoading: false,
  currentPage: 1,
  characters: [],
  isNextPage: true,
  currentCharacter: null,
  favouritesCharacterIds: [],
};

export interface CharacterReducerState {
  isLoading: boolean;
  currentPage: number;
  characters: Character[];
  isNextPage: boolean;
  currentCharacter: Character | null;
  favouritesCharacterIds: string[];
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

    addIdToFavourite: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;

      state.favouritesCharacterIds = [...state.favouritesCharacterIds, id];
    },

    removeIdFromFavourite: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;

      state.favouritesCharacterIds = state.favouritesCharacterIds.filter(
        (favouriteId) => id !== favouriteId
      );
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
