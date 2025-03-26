import { StyleSheet, Platform, Dimensions } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Ajusta la ruta si es necesario

const { width, height } = Dimensions.get("window");

export const MarcasStyles = StyleSheet.create({
  // ** Contenedor principal **
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9", // Fondo neutro y profesional
    paddingHorizontal: 10,
  },

  // ** Cabecera de la página **
  header: {
    backgroundColor: "#70E099",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },

  logo: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },

  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },

  // ** Barra de búsqueda **
  searchContainer: {
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  searchInput: {
    color: "#000",
    flex: 1,
    marginLeft: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },

  // ** Estilo de la lista de tiendas (No se modificó) **
  tiendaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Separa más las tiendas horizontalmente
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  tiendaContainer: {
    backgroundColor: "#FFF", // Fondo limpio y profesional
    borderRadius: 12, // Bordes más suaves
    overflow: "hidden",
    width: "44%", // Se reduce un poco para mayor espacio entre ellas
    marginBottom: 20,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Efecto de sombra en Android
    marginHorizontal: 8, // Mayor separación entre tiendas
  },

  tiendaImage: {
    width: "100%",
    height: 120,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },

  tiendaInfo: {
    marginTop: 10,
    alignItems: "center",
  },

  tiendaNombre: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },

  tiendaDireccion: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },

  tiendaDescripcion: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },

  tiendaRating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },

  // ** Estilos para el modal (actualizados según tu ejemplo) **
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro semitransparente
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 24, // Bordes redondeados como en el ejemplo de CategoryStyle
    alignItems: "center",
    width: width * 0.85,
    maxHeight: height * 0.8, // Asegura que el modal no ocupe más del 80% de la pantalla
    overflow: "hidden", // Asegura que el contenido no se desborde
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco para el botón de cierre
    borderRadius: 20,
    padding: 4,
  },
  modalProductImage: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalProductName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  modalProductPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },

  // ** Estilos para la lista de productos **
  productList: {
    paddingHorizontal: 8,
    paddingBottom: 80,
  },
  productContainer: {
    width: "50%", // Dos productos por fila
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },

  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },

  productInfo: {
    marginTop: 10,
    alignItems: "center",
  },

  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 4,
  },
});

export default MarcasStyles;
