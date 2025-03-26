import { StyleSheet, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const MarcasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  spacer: {
    marginBottom: 10, // Reducir espacio entre el buscador y el listado
  },
  flatListContainer: {
    paddingBottom: 50, // Reducir espacio en la parte inferior
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
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
  menuIcon: {
    padding: 8,
  },
  userIcon: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  productGrid: {
    paddingHorizontal: 16,
    paddingBottom: 80, // Espacio para el FooterNavigation
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%',
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  addButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: '#000000',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
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
  tiendaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%',
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tiendaImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0', // Color de fondo por defecto
  },
  tiendaInfo: {
    padding: 12,
  },
  // Eliminar la definición duplicada de tiendaNombre
  tiendaHorarios: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 2,
  },
  tiendaDireccion: {
    fontSize: 12,
    color: '#666666',
  },
});

export default MarcasStyles;
