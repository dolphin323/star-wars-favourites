import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { Reactotron } from "reactotron-core-client";
import { ReactotronReactNative } from "reactotron-react-native";

import { initReactotron } from "@utils/reactotron";

import FeatureEnabler from "../featureEnabler";
import { PersistedAppState, rootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { storage } from "../utils/storage";

const persistorConfig = {
  key: "@Starwars:root",
  storage,
  whitelist: [],
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

  const enhancers = [];
  if (reactorEnhancer) {
    enhancers.push(reactorEnhancer);
  }
  const persistedReducer = persistReducer(persistorConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    enhancers: enhancers,
    middleware: [sagaMiddleware],
    preloadedState: initialState as any,
  });
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
