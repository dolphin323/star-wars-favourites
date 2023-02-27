import { AnyAction, CombinedState, combineReducers } from "redux";

import { AppReducerState, appSlice } from "./app/slice";
import { CharacterReducerState, characterSlice } from "./character/slice";

export interface RootState {
  app: AppReducerState;
  character: CharacterReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appSlice.reducer,
  character: characterSlice.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
