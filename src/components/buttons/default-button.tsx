import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface DefaultButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
