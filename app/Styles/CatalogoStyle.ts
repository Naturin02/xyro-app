import { StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; 

export const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
});
