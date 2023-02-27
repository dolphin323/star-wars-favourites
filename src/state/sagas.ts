import { fork } from "typed-redux-saga";

import { appSagas } from "./app/saga";

export function* rootSaga() {
  yield* fork(appSagas);
}
