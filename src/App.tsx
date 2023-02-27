import React, { memo, useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";

import { PersistGate } from "redux-persist/integration/react";

import Navigator from "./routes/navigator";
import { configStore } from "./state/store";

const { store, persistor } = configStore();
export { store };
export const dispatch = store.dispatch;
export const persistedStore = persistor;

const App = memo(() => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={{ backgroundColor: "#f6f5f3", flex: 1 }}>
            <Navigator />
          </View>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
});

App.displayName = "App";

export default App;
