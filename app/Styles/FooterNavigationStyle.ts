import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const FooterNavigationStyle = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // Añadimos una elevación para crear profundidad
    paddingHorizontal: 15,
  },
  footerItem: {
    alignItems: "center",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginTop: 5,
    marginLeft: 8, // Añadimos espacio entre el ícono y el texto
    transition: "color 0.3s", // Transición suave para el cambio de color
  },
  activeButton: {
    backgroundColor: "#ff6347", // Fondo de botón activo en color rojo tomate
    borderRadius: 30, // Bordes redondeados
    paddingHorizontal: 18,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    transform: [{ scale: 1.05 }], // Efecto de ampliación sutil cuando está activo
    transition: "background-color 0.3s, transform 0.2s", // Efecto de transición suave
  },
  activeText: {
    color: Color.colorWhite, // Texto blanco cuando el botón está activo
    fontWeight: "bold", // Negrita para resaltar más el texto
    transition: "color 0.3s", // Transición suave para el cambio de color
  },
  footerItemInactive: {
    opacity: 0.6, // Icono más tenue cuando no está activo
  },
  footerItemActive: {
    opacity: 1, // Asegura que el ícono activo se vea con opacidad total
    transform: [{ scale: 1.1 }], // Efecto de ampliación sutil en el ícono activo
  },
});
