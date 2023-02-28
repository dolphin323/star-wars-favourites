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
  characterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    marginVertical: 5,
    padding: 10,
  },
  iconWrapper: { width: 20, height: 20 },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between" },
});

export { styles };
