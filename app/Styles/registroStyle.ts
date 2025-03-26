import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../constants/GlobalStyles"; // Ruta correcta

export const registroStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_9xs,
    paddingHorizontal: 15,
    fontSize: FontSize.size_sm,
    marginBottom: 15,
  },
  doubleInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: Color.colorDarkslategray,
  },
  checkboxText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    flexShrink: 1,
  },
  registerButton: {
    backgroundColor: "#70E099",  // Color de fondo actualizado al color que solicitaste
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: Border.br_9xs,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: Color.colorGray_300,
  },
  registerButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.spartan,
  },
});

export default registroStyles;
