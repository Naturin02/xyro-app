import { StyleSheet } from "react-native";
import { FontSize, Color } from "../../constants/GlobalStyles"; // Asegúrate de importar correctamente los colores y fuentes.

export const CarritoStyles = StyleSheet.create({
  // 📌 Contenedor principal
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Fondo claro
    padding: 15,
  },

  // 📌 Encabezado
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: FontSize.size_lg, // Usa el tamaño de fuente definido en GlobalStyles
    fontWeight: "bold",
    color: "#333",
  },

  // 📌 Texto cuando el carrito está vacío
  emptyCartText: {
    fontSize: FontSize.size_md,
    textAlign: "center",
    color: "#555",
    marginTop: 50,
  },

  // 📌 Estilos del producto en el carrito
  productContainer: {
    backgroundColor: "#fff",
    padding: 12,
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
  productImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#ddd", // Espacio gris para imagen
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: FontSize.size_md,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: FontSize.size_smi,
    color: "#333",
    marginBottom: 8,
  },

  // 📌 Contenedor para la selección de cantidad
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  productQuantity: {
    fontSize: FontSize.size_md,
    fontWeight: "bold",
  },

  // 📌 Botón de eliminar
  deleteButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: FontSize.size_smi,
    fontWeight: "bold",
    marginLeft: 6,
  },

  // 📌 Sección de Totales
  totalSection: {
    backgroundColor: "#fff",
    padding: 12,
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
    marginBottom: 8,
  },
  totalText: {
    fontSize: FontSize.size_smi,
    color: "#333",
  },
  subtotalText: {
    fontSize: FontSize.size_md,
    fontWeight: "bold",
    color: "#333",
  },

  // 📌 Botón de Checkout
  checkoutButton: {
    backgroundColor: "#2C3E50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: FontSize.size_md,
    fontWeight: "bold",
  },

  // 📌 Botón de Checkout Deshabilitado
  disabledButton: {
    backgroundColor: "#BDC3C7",
  },

  // 📌 Selector de cantidad
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  quantityText: {
    fontSize: FontSize.size_smi,
    color: "#333",
    marginRight: 5,
  },

  // 📌 Modal de selección de cantidad
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: FontSize.size_md,
    fontWeight: "bold",
    marginBottom: 15,
  },
  quantityOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    alignItems: "center",
  },
  quantityOptionText: {
    fontSize: FontSize.size_md,
    color: "#333",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
});
