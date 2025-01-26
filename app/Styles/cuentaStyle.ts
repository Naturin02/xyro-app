// C:\Users\shiro\OneDrive\Escritorio\Xyro\xyro-app\app\Styles\CuentaStyle.ts
import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const CuentaStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 20,
    color: Color.colorSeagreen, // Cambiado a color más llamativo
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorGray_200,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite, // Cambiado a blanco para resaltar
  },
});
