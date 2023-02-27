import React from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";

import { styles } from "./styles";

interface IProps {
  isTransparentBg?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const Loader = ({ isTransparentBg, style }: IProps) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <View
      style={{
        ...styles.container,
        ...(isTransparentBg ? styles.transparent : {}),
        ...passedStyles,
      }}
    >
      <ActivityIndicator size="large" color={"black"} />
    </View>
  );
};

export { Loader };
