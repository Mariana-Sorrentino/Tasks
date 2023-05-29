import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: 550,
    paddingTop: 20,
    paddingBottom: 40,
    bottom: 0,
    marginTop: -50,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#FFF5FB",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 10,
  },
  button: {
    position: "absolute",
    width: 75,
    height: 75,
    marginTop: 20,
    borderRadius: 50,
    elevation: 15,
    right: 25,
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008C8C",
    zIndex: 99,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});

export default styles;
