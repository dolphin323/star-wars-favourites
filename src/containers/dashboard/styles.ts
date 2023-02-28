import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c1dc",
  },
  title: { fontSize: 30 },
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
    backgroundColor: "#ebebeb",
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
    color: "#343434",
    fontWeight: "bold",
    fontSize: 20,
  },
  totalFavouriteLabel: {
    color: "#343434",
  },
  charactersWrapper: {
    padding: 10,
    backgroundColor: "#e9e5fb",
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
  iconWrapper: { width: 20, height: 20 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageLabel: { fontSize: 18 },
});

export { styles };
