import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerTask: {
    flex: 1,
    minWidth: "95%",
    minHeight: 60,
    margin: 8,
    padding: 7,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#C1D6D6",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  buttonTask: {
    maxWidth: 55,
    flex: 1,
    padding: 7,
    minHeight: 30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003030",
    borderRadius: 10,
  },
});

export default styles;
