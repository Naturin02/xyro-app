import { StyleSheet, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

// Función recursiva que genera estilos comunes para los contenedores de elementos
const createFavoritoContainerStyle = () => {
  return {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorSnow,
    borderRadius: 10,
    marginBottom: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
  };
};

export const FavoritosStyles = StyleSheet.create({
  // ** Cabecera de la pantalla **
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#70E099', // Color de fondo de la cabecera actualizado
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },

  // ** Contenedor principal **
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    marginBottom: 20,
    color: Color.colorBlack,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },

  // ** Estilo para los favoritos **
  favoritoContainer: {
    ...createFavoritoContainerStyle(), // Aplicando los estilos comunes para los favoritos
  },
  favoritoImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  favoritoDetails: {
    marginLeft: 12,
    justifyContent: "center",
  },
  favoritoNombre: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    color: '#70E099', // Color del nombre actualizado
  },
  favoritoDescripcion: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
});

export default FavoritosStyles;
