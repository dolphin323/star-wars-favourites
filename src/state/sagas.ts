import { fork } from "typed-redux-saga";

import { characterSagas } from "./character/saga";

export function* rootSaga() {
  yield* fork(characterSagas);
}
