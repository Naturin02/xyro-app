import { StyleSheet } from "react-native";
import { FontSize, Color } from "../../constants/GlobalStyles"; // Asegúrate de tener los colores definidos en GlobalStyles.

export const CarritoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Fondo claro
    padding: 15, // Reducimos el padding
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15, // Reducimos el margen inferior
  },
  headerTitle: {
    fontSize: 20, // Reducimos el tamaño del texto
    fontWeight: "bold",
    color: "#333", // Título oscuro
  },
  emptyCartText: {
    fontSize: 16, // Reducimos el tamaño del texto
    textAlign: "center",
    color: "#555", // Color gris claro para el texto vacío
    marginTop: 50,
  },
  productContainer: {
    backgroundColor: "#fff", // Fondo blanco para cada producto
    padding: 12, // Reducimos el padding
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productImage: {
    width: 60, // Reducimos el tamaño de la imagen
    height: 60, // Reducimos el tamaño de la imagen
    borderRadius: 10,
    backgroundColor: "#ddd", // Espacio gris para imagen
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16, // Reducimos el tamaño del texto
    fontWeight: "bold",
    color: "#333", // Color negro para el nombre
  },
  productPrice: {
    fontSize: 14, // Reducimos el tamaño del texto
    color: "#333", // Color oscuro para el precio
    marginBottom: 8, // Reducimos el espacio inferior
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8, // Reducimos el espacio inferior
  },
  productQuantity: {
    fontSize: 16, // Reducimos el tamaño del texto
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#E74C3C", // Rojo para el botón de eliminar
    paddingVertical: 6, // Reducimos el padding vertical
    paddingHorizontal: 10, // Reducimos el padding horizontal
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 14, // Reducimos el tamaño del texto
    fontWeight: "bold",
    marginLeft: 6, // Reducimos el margen
  },
  totalSection: {
    backgroundColor: "#fff", // Fondo blanco para la sección de totales
    padding: 12, // Reducimos el padding
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8, // Reducimos el espacio inferior
  },
  totalText: {
    fontSize: 14, // Reducimos el tamaño del texto
    color: "#333", // Color oscuro para los totales
  },
  subtotalText: {
    fontSize: 16, // Reducimos el tamaño del texto
    fontWeight: "bold",
    color: "#333", // Subtotal en negrita
  },
  checkoutButton: {
    backgroundColor: "#2C3E50", // Color oscuro para el botón de checkout
    paddingVertical: 12, // Reducimos el padding
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16, // Reducimos el tamaño del texto
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#BDC3C7", // Color gris para el botón deshabilitado
  },
});
