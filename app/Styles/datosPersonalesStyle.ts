import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const DatosPersonalesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 15,  // Reducí el padding para hacerlo más compacto
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: FontSize.size_xl,  // Reducí el tamaño del título
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
  },
  form: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.size_sm,  // Reduje el tamaño de la fuente
    fontFamily: FontFamily.juaRegular,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 8,  // Reduje el padding
    paddingHorizontal: 12, // Reduje el padding
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,  // Reduje el borderRadius
    marginBottom: 12,  // Reduje el espacio entre inputs
    fontSize: FontSize.size_sm,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioText: {
    fontSize: FontSize.size_sm, // Reduje el tamaño de la fuente
    marginLeft: 5,
  },
  continueButton: {
    width: "100%",
    paddingVertical: 12,  // Reducí el padding
    backgroundColor: "#000",
    borderRadius: 8,  // Reduje el borderRadius
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: FontSize.size_sm, // Reduje el tamaño de la fuente
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
  },

  // Estilos para el modal
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",  // Fondo semi-transparente
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 15,  // Reduje el padding
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: FontSize.size_md,  // Reduje el tamaño de la fuente
    fontFamily: FontFamily.juaRegular,
    marginBottom: 15,
  },
  modalButton: {
    fontSize: FontSize.size_sm,  // Reduje el tamaño de la fuente
    fontFamily: FontFamily.juaRegular,
    color: "#007BFF",
  },
});

export default DatosPersonalesStyles;
