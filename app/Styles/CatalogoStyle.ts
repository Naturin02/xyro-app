import { StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; 

export const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#bg5190",
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  addButtonText: {
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  commentButton: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",  // Centra verticalmente
    alignItems: "center",  // Centra horizontalmente
    backgroundColor: "rgba(0,0,0,0.5)",  // Fondo semitransparente
  },
  modalContent: {
    width: "90%",  
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",  // Alinear en fila
    alignItems: "center",  // Centrar verticalmente
    justifyContent: "center",  // Centrar en el contenedor
    gap: 20,  // Espacio entre los elementos
    marginVertical: 20,  // Separación arriba/abajo
  },
  quantityButton: {
    padding: 10,
    borderRadius: 50,
  },
  addToCartButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    alignSelf: "flex-end", // Alinea a la derecha dentro del modal
    marginBottom: 10,      // Espacio debajo
  },
  alertBox: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#444",
  },
  alertButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
