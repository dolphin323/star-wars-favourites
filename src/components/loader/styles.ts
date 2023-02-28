import { StyleSheet } from "react-native";
import { AppColor } from "@utils/style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  transparent: {
    backgroundColor: AppColor.BACKGROUND.TRANSPARENT,
  },
});
