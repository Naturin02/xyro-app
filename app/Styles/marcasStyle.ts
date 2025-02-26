import { StyleSheet, Platform } from "react-native";
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
    backgroundColor: '#000', // Cambiado de '#007AFF' a '#000'
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Ajusta este valor según necesites
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
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
