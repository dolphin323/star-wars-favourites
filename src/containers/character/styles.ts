import { StyleSheet } from "react-native";

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
    backgroundColor: "#f6f6f6",
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
  name: { alignSelf: "center", marginTop: 10, fontSize: 20, color: "white" },
  glassmorphismContainer: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  characterInfoWrapper: {
    backgroundColor: "transparent",
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
    fontSize: 16,
    textTransform: "capitalize",
    color: "white",
  },
  valueCharacterInfo: { fontSize: 16, color: "white" },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between" },
});

export { styles };
