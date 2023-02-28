import React, { ReactNode } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface IconButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  icon: ReactNode;
  iconSize?: number;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  iconSize = 30,
  disabled = false,
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={{
      width: iconSize,
      height: iconSize,
      opacity: disabled ? 0.5 : 1,
    }}
  >
    {icon}
  </TouchableOpacity>
);

export { IconButton };
