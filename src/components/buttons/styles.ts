import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "@utils/style";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: AppColor.BACKGROUND.TRANSPARENT,
    borderColor: AppColor.BUTTON.RED,
    borderWidth: 1,
  },
  title: {
    color: AppColor.TEXT.RED,
    fontSize: FontSize.BIG,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
});

export { styles };
