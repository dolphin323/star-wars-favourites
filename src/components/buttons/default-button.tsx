import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface DefaultButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  disabled?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  disabled = false,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.wrapper, { opacity: disabled ? 0.5 : 1 }]}
    disabled={disabled}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
