import { StyleSheet, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const CuentaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: FontSize.size_xl, // Título más pequeño
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    color: '#fff',
  },
  userContainer: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    fontSize: FontSize.size_xl,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  userText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "#333", // Texto más visible
  },
  optionButton: {
    width: "100%",
    paddingVertical: 12, // Botón más pequeño
    backgroundColor: Color.colorSeagreen,
    borderRadius: 8, // Bordes más redondeados
    alignItems: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  deleteButton: {
    width: "100%",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  deleteButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "red",
  },
  optionText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Fondo semi-transparente
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "80%", // Modal más estrecho
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: FontSize.size_sm, // Texto más pequeño
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
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

export default CuentaStyles;
