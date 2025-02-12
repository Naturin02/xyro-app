import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const FooterNavigationStyle = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  footerItem: {
    alignItems: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
  },
  activeButton: {
    backgroundColor: Color.colorDarkslategray, // Fondo oscuro cuando está activo
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activeText: {
    color: Color.colorWhite, // Texto blanco cuando el botón está activo
    fontWeight: "bold", // Para resaltar más el texto
  },
});

export default FooterNavigationStyle;
