import { StyleSheet, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; 
import ProductGrid from "../Herramientas/catalogo";

export const ProductStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    color: '#fff',
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
  cartBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    color: Color.colorBlack,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10, // Espacio superior para cada título de categoría
  },
  categoryButton: {
    paddingVertical: 6, // Reducido para que los botones no sean tan grandes
    paddingHorizontal: 12, // Reducido
    backgroundColor: Color.colorSnow,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  categoryButtonActive: {
    backgroundColor: Color.colorGray_100, // Corrected to use an existing color
  },
  categoryButtonText: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontWeight: 'bold',
  },
  categoryButtonTextActive: {
    color: Color.colorWhite,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productContainer: {
    flex: 1,
    margin: 8, // Reducimos el margen entre productos
    backgroundColor: Color.colorSnow,
    padding: 12, // Reducimos el padding
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBlack,
    marginBottom: 15, // Reducimos el espacio entre los productos
  },
  productCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorSnow,
    padding: 12, // Reducimos el padding
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorBlack,
  },
  productImage: {
    width: '100%',
    height: 100, // Reducimos el tamaño de la imagen
    borderRadius: 10,
  },
  productName: {
    fontSize: FontSize.size_smi,
    fontWeight: 'bold',
    color: Color.colorBlack,
    marginTop: 8, // Reducimos el espacio entre el nombre y la imagen
    textAlign: 'center',
  },
  productPrice: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    marginTop: 4, // Reducimos el espacio entre el precio y el nombre
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12, // Reducimos el padding
    borderRadius: 5,
    marginTop: 8, // Reducimos el espacio entre el precio y el botón
  },
  addButtonText: {
    color: 'white',
    fontSize: FontSize.size_smi,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",  // Centra el modal
    alignItems: "center",  // Centra el contenido
    backgroundColor: "rgba(0, 0, 0, 0.5)",  // Fondo gris oscuro
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff", // Fondo blanco para el contenido del modal
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    maxHeight: "90%",  // Limitar el alto para pantallas pequeñas
    position: 'relative',  // Asegura que el botón de cierre sea posicionado relativo al modal
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: '50%',
    transform: [{ translateX: -20 }],  // Centrado horizontal
    zIndex: 1, // Asegura que el botón esté encima del contenido
  },
  modalProductImage: {
    width: '100%',
    height: 220, // Reducido el tamaño de la imagen en el modal
    borderRadius: 10,
  },
  modalProductName: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    color: Color.colorBlack,
    marginTop: 10,
    textAlign: 'center', // Centrar el nombre
  },
  modalProductPrice: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    marginTop: 5,
    textAlign: 'center', // Centrar el precio
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    color: "#FFD700", // Color dorado
    marginTop: 5,
  },
  colorOption: {
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    marginTop: 10,
    textAlign: 'center',  // Alinea las opciones de color al centro
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginVertical: 15, // Reducido el espacio
  },
  quantityButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Color.colorBlack,
  },
  addToCartButton: {
    backgroundColor: Color.colorBlack,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    width: '100%', // Asegura que el botón ocupe todo el ancho del modal
  },
  addToCartButtonText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductGrid;