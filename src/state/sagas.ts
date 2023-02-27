import { fork } from "typed-redux-saga";

import { appSagas } from "./app/saga";
import { characterSagas } from "./character/saga";

export function* rootSaga() {
  yield* fork(appSagas);
  yield* fork(characterSagas);
}
