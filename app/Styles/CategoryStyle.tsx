import { StyleSheet, Dimensions, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Ajusta la ruta si es necesario

const { width, height } = Dimensions.get("window");

export const CategoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  // ** Cabecera principal **
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#70E099', // Color de la cabecera
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#70E099", // Color de la cabecera
    zIndex: 2,
    justifyContent: "space-between", // Para espaciar los elementos
    position: "relative", // Asegura que la cabecera no se solape
  },
  logo: {
    color: "#000", // Color del logo
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20, // Espacio entre el logo y el buscador
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#fff", // Fondo blanco para el botón de "atrás"
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  // ** Buscador y carrito dentro de la cabecera **
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // Buscador con fondo blanco
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 45,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginRight: 20, // Separación entre buscador y carrito
    flex: 1, // Para que el buscador ocupe el espacio restante
  },
  searchIcon: {
    marginRight: 8, // Espacio entre el icono de búsqueda y el texto
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: "#333", // Color del texto en el buscador
    paddingVertical: 0, // Eliminar espacio vertical innecesario
  },

  // ** Botón de carrito **
  cartButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#fff", // Fondo blanco para el botón de carrito
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    marginLeft: 20, // Separación entre el carrito y el buscador
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF3B30", // Rojo para la insignia del carrito
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff", // Color blanco para el texto de la insignia
    fontSize: 10,
    fontWeight: "bold",
  },

  // ** Otras secciones de la categoría **
  categoryHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  resultsCount: {
    fontSize: 14,
    color: "#999",
  },
  content: {
    flex: 1,
  },
  productList: {
    paddingHorizontal: 8,
    paddingBottom: 80,
  },
  productContainer: {
    width: "50%",
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
  },
  imageContainer: {
    position: "relative",
    height: 160,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  statusBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  infoContainer: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4CAF50",
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 8,
  },
  loaderContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },
  // Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.9,
    maxHeight: height * 0.8,
    borderRadius: 24,
    overflow: "hidden",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 4,
  },
  modalProductImage: {
    width: "100%",
    height: 220,
  },
  modalProductDetails: {
    padding: 20,
  },
  modalStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  modalStatusText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginLeft: 6,
  },
  modalProductName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  modalProductPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#4CAF50",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#FF3B30",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  incrementButton: {
    backgroundColor: "#4CAF50",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: "center",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#4CAF50",
  },
  addToCartButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  buttonIcon: {
    marginRight: 8,
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryStyle;
