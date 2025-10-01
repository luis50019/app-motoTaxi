import { StyleSheet } from "react-native";
export const styleHeader = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "100%",
    minHeight: 50,
    maxHeight: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  titleHeader: {
    color: "#FF6B00",
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: 2,
  },
  username: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  containerGreeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "light",
  },
  containerLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  neighborhood: {
    fontSize: 25,
    color: "#fff",
  },
  street: {
    fontSize: 15,
    color: "#aaa",
  },
});
