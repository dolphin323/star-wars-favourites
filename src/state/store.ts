import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { compact } from "lodash";
import { persistReducer, persistStore } from "redux-persist";
import { Reactotron } from "reactotron-core-client";
import { ReactotronReactNative } from "reactotron-react-native";

import { initReactotron } from "@utils/reactotron";

import FeatureEnabler from "../featureEnabler";
import { PersistedAppState, rootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { storage } from "../utils/storage";

const persistorConfig = {
  key: "@GreatnessApp:state",
  storage,
  whitelist: ["character"],
};

declare global {
  interface Console {
    tron:
      | (Reactotron<ReactotronReactNative> & ReactotronReactNative)
      | { log: () => void };
  }
}

export const configStore = (initialState?: PersistedAppState) => {
  let sagaMonitor;
  let reactorEnhancer;

  if (FeatureEnabler.reactotron) {
    const ReactotronInstance = initReactotron();

    sagaMonitor = ReactotronInstance.createSagaMonitor?.();
    reactorEnhancer = ReactotronInstance.createEnhancer?.();
    console.tron = ReactotronInstance;
  } else {
    console.tron = { log: () => null };
  }

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middlewares = [];

  middlewares.push(sagaMiddleware);
  const appliedMiddleware = applyMiddleware(sagaMiddleware);

  const enhancers = compose(...compact([appliedMiddleware, reactorEnhancer]));
  const persistedReducer = persistReducer(persistorConfig, rootReducer);
  const store = createStore(persistedReducer, initialState, enhancers as any);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
