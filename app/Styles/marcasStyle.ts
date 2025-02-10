import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const MarcasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContent: {
    paddingBottom: 80, // Espacio para evitar que el contenido se superponga con la barra
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: Color.colorBlack,
  },
  logo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
  },
  cart: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
  },
  navItem: {
    padding: 5,
  },
  navText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
  },
  banner: {
    backgroundColor: Color.colorSeagreen,
    padding: 10,
    alignItems: "center",
  },
  bannerText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },

  // Un único `sectionTitle` y `card` (eliminadas las duplicaciones)
  sectionTitle: {
    fontSize: FontSize.size_mini,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: Color.colorGainsboro_200,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 10,
  },

  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
  },

  // Estilos adicionales para la lista de tiendas
  tiendaContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
  },
  tiendaNombre: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    fontWeight: "bold",
  },
  tiendaHorarios: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
  tiendaDireccion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
  tiendaDescripcion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },

  // Estilos para el buscador
  searchContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchInput: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  filterButtonText: {
    color: "white",
    fontSize: 16,
  },

  // Estilos para el modal de filtros
  modalContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalSection: {
    marginVertical: 15,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOption: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 5,
  },

  // Botón para cerrar el modal (rojo y con animación)
  closeButton: {
    padding: 10,
    backgroundColor: "#FF6347", // Rojo
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default MarcasStyles;
