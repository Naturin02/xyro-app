import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const MarcasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingTop: 0, // Reducir el espacio superior aún más
  },
  spacer: {
    marginBottom: 10, // Reducir espacio entre el buscador y el listado
  },
  flatListContainer: {
    paddingBottom: 50, // Reducir espacio en la parte inferior
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8, // Reducir padding en el header
    backgroundColor: Color.colorBlack,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para Android
    height: 45, // Reducir la altura
  },
  logo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg, // Mantener el tamaño reducido del logo
    fontFamily: FontFamily.juaRegular,
  },
  iconsContainer: {
    flexDirection: "row", // Alinea los íconos en una fila
    justifyContent: "flex-end", // Alinea los íconos a la derecha
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 8, // Reducir espacio entre los íconos
  },
  cart: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg, // Reducir tamaño de los íconos
  },
  heart: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg, // Reducir tamaño de los íconos
  },
  // ------------------------------
  // Estilos para las tiendas (se mantienen)
  // ------------------------------
  tiendaContainer: {
    padding: 10, // Reducir padding
    marginHorizontal: 12,
    borderRadius: 8, // Hacer botones más pequeños
    backgroundColor: Color.colorSnow,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
    borderBottomWidth: 1, // Línea de separación
    borderBottomColor: Color.colorBlack, // Línea negra
    marginBottom: 10, // Reducir margen inferior entre las tiendas
  },
  tiendaImagen: {
    width: "100%",
    height: 120, // Tamaño ajustado para imagen de la tienda
    borderRadius: 8,
    marginBottom: 5,
  },
  tiendaNombre: {
    fontSize: FontSize.size_smi, // Reducir el tamaño del texto
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    fontWeight: "bold",
    textAlign: "center",
  },
  tiendaHorarios: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 3,
    textAlign: "center",
  },
  tiendaDireccion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 3,
    textAlign: "center",
  },
  tiendaDescripcion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 3,
    textAlign: "center",
  },
});

export default MarcasStyles;
