import { storage } from "@utils/storage";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { CharacterReducerState, characterSlice } from "./character/slice";

export interface RootState {
  character: CharacterReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const characterConfig = {
  key: "character",
  storage,
  whitelist: ["favouritesCharacterIds", "totalFavouriteCharactersByGender"],
};

const rootReducer = combineReducers({
  character: persistReducer(characterConfig, characterSlice.reducer),
});

export { rootReducer };
