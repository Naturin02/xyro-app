import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const FooterNavigationStyle = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 25, // Mantenerlo un poco arriba del borde inferior
    left: "10%", // Ajustar la distancia desde el borde izquierdo
    right: "10%", // Ajustar la distancia desde el borde derecho
    height: 65, // Reducir la altura del footer
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30, // Bordes redondeados en todos los lados
    paddingHorizontal: 10, // Reducir el espaciado horizontal
    paddingVertical: 5, // Reducir el espaciado vertical
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    fontSize: 16, // Reducir el tamaño del ícono
    color: Color.colorBlack,
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: "#aaa", // Color gris por defecto
    marginTop: 3, // Reducir el espacio entre el ícono y el texto
  },

  
});
