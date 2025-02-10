import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const DatosPersonalesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centrado del contenido
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    textAlign: "center", // Asegura que el texto esté centrado
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: FontSize.size_mini,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  radioText: {
    fontSize: FontSize.size_mini,
    marginLeft: 5,
  },
  continueButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
  },
});

export default DatosPersonalesStyles;
