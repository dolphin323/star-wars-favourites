import React, { useCallback, useEffect } from "react";
import { BackHandler } from "react-native";
import { NavigationContainer, NavigationState } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Character } from "@containers/character";

import { getActiveRouteName, navigationRef } from "../utils/navigation";
import { Dashboard } from "../containers/dashboard";
import { Route } from "./route-names";

const disabledAndroidBackScreens: string[] = [Route.Dashboard];

let currentRouteName = "unknown";
let previousRouteName = "unknown";

export const getCurrentRouteName = () => currentRouteName;
export const getPreviousRouteName = () => previousRouteName;

const Navigator = () => {
  const onMount = () => {
    BackHandler.addEventListener("hardwareBackPress", onAndroidBack);

    return () => onUnmount();
  };

  const onUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", onAndroidBack);
  };

  useEffect(onMount, []);

  const onAndroidBack = () => {
    const scene = currentRouteName;
    const enableBack = disabledAndroidBackScreens.indexOf(scene) !== -1;

    return enableBack;
  };

  const onRouteChange = useCallback((state: NavigationState | undefined) => {
    if (state) {
      previousRouteName = currentRouteName;
      currentRouteName = getActiveRouteName(state);
    }
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onRouteChange}>
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen
          name={Route.Dashboard}
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Route.Character} component={Character} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
