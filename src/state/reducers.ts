import { AnyAction, CombinedState, combineReducers } from "redux";

import { CharacterReducerState, characterSlice } from "./character/slice";

export interface RootState {
  character: CharacterReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  character: characterSlice.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
