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
    paddingHorizontal: 16,
    paddingBottom: 50,
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
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderBottomWidth: 0, // Removemos la línea negra
  },
  tiendaImagen: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  tiendaNombre: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 4,
    textAlign: "left", // Alineación a la izquierda
  },
  tiendaPrecio: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    fontWeight: "bold",
    marginTop: 4,
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
