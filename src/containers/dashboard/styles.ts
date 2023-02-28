import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "@utils/style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.BACKGROUND.PASTEL_VIOLET,
  },
  title: { fontSize: FontSize.EXTRA_LARGE },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexGrow: 1,
  },
  fansWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  loader: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  totalFavouriteWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalFavouriteContainer: {
    width: "32%",
    backgroundColor: AppColor.BACKGROUND.PASTEL_WHITE,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,

    elevation: 6,
    padding: 10,
  },
  totalFavouriteNumber: {
    color: AppColor.TEXT.LIGHT_GREY,
    fontWeight: "bold",
    fontSize: FontSize.BIG,
  },
  totalFavouriteLabel: {
    color: AppColor.TEXT.LIGHT_GREY,
  },
  charactersWrapper: {
    padding: 10,
    backgroundColor: AppColor.BACKGROUND.VOILET,
    borderRadius: 10,
    marginBottom: 20,
  },
  characterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  characterName: {
    color: AppColor.TEXT.VIOLET,
    fontWeight: "bold",
    fontSize: FontSize.BASE,
  },
  characterGender: {
    color: AppColor.TEXT.VIOLET,
  },
  iconWrapper: { width: 20, height: 20 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageLabel: { fontSize: FontSize.BIG },
});

export { styles };
