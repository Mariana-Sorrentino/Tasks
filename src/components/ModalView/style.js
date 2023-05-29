import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "#C1D6D6",
  },
  btnCloseModal: {
    position: "relative",
    left: 0,
    margin: 10,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003030",
    borderRadius: 10,
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    alignItems: "center",
    color: "#003030",
  },
  modalBody: {
    marginTop: 20,
  },
  modalInput: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    padding: 10,
    height: 120,
    color: "#003030",
    textAlignVertical: "top",
    borderRadius: 10,
    backgroundColor: "#94B5B5",
  },
  modalBtnAdd: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008C8C",
  },
  modalTextBtn: {
    fontSize: 20,
    color: "#C1D6D6",
  },
});

export default styles;
