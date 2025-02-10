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
    paddingVertical: 10, // Se agregó padding para mejorar la estética del botón
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
  },
  // Estilo para los botones activos
  footerItemActive: {
    backgroundColor: "#888", // Fondo más oscuro cuando está activo
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  footerTextActive: {
    color: "#fff", // Color de texto blanco cuando está activo
  },
});

export default FooterNavigationStyle;
