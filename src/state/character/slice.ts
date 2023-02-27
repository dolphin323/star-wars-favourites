import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@services/domains/character/types";

export const INITIAL_STATE: CharacterReducerState = {
  isLoading: false,
  currentPage: 1,
  currentCharacters: [],
  isNextPage: true,
};

export interface CharacterReducerState {
  isLoading: boolean;
  currentPage: number;
  currentCharacters: Character[];
  isNextPage: boolean;
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
    setCharacters: (
      state,
      action: PayloadAction<{
        currentCharacters: Character[];
        currentPage: number;
        isNextPage: boolean;
      }>
    ) => {
      const { currentCharacters, currentPage, isNextPage } = action.payload;

      state.currentCharacters = currentCharacters;
      state.currentPage = currentPage;
      state.isNextPage = isNextPage;
    },

    getCharacters: (
      state,
      action: PayloadAction<{
        page: number;
      }>
    ) => state,
  },
});
