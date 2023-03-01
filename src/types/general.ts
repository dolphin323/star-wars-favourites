import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface PayloadAction<T> {
  payload: T;
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionFromCreator<T extends ActionCreatorWithPayload<any>> = {
  type: T["type"];
  payload: Parameters<T>[0];
};

export { PayloadAction, ActionFromCreator };
