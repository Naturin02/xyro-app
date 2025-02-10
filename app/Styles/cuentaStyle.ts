import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const CuentaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Cambié esta línea para centrar el contenido del encabezado
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    textAlign: "center", // Asegura que el texto esté centrado
  },
  userContainer: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    fontSize: FontSize.size_6xl,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  userText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
  },
  optionButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorSeagreen,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    fontWeight: "bold",
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  deleteButton: {
    width: "100%",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  deleteButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "red",
  },
  buttonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "85%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: FontSize.size_5xl,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: FontSize.size_mini,
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#ccc",
    marginRight: 5,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "red",
    marginLeft: 5,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
