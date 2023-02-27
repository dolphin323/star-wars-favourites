import { AnyAction, CombinedState, combineReducers } from "redux";

import { AppReducerState, appSlice } from "./app/slice";

export interface RootState {
  app: AppReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appSlice.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
