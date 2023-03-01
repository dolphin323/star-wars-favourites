import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "@utils/style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    backgroundColor: AppColor.BACKGROUND.GRAY,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: "absolute",
    top: -40,
    alignSelf: "center",
  },
  name: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: FontSize.BIG,
    color: AppColor.TEXT.WHITE,
  },
  glassmorphismContainer: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  characterInfoWrapper: {
    backgroundColor: AppColor.BACKGROUND.TRANSPARENT,
    padding: 10,
    borderRadius: 10,
    paddingBottom: 0,
    marginTop: 40,
  },
  characterInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
  labelCharacterInfo: {
    fontSize: FontSize.BASE,
    textTransform: "capitalize",
    color: AppColor.TEXT.WHITE,
    width: "30%",
  },
  valueCharacterInfo: {
    fontSize: FontSize.BASE,
    color: AppColor.TEXT.WHITE,
    width: "70%",
    textAlign: "right",
  },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between" },
});

export { styles };
