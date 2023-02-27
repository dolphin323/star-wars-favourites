import { appSlice } from "./app/slice";
import { characterSlice } from "./character/slice";

export const actions = {
  app: appSlice.actions,
  character: characterSlice.actions,
};
