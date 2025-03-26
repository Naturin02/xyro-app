import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const CategoryNavigationStyles = StyleSheet.create(
  
  
  
  
  
  
  {
  container: {
    padding: 10, // Reducir el padding para hacer todo más compacto
    backgroundColor: Color.colorWhite,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12, // Reducir el margen inferior
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,  // Border más suave para los inputs
    paddingHorizontal: 8, // Reducir padding horizontal
    paddingVertical: 5,  // Reducir padding vertical
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  categoriesContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 15,  // Reducir el margen inferior
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",  // Fondo más claro para categorías
    borderRadius: 15,  // Reducción del borderRadius para hacerlo más compacto
    paddingHorizontal: 8,  // Reducir padding
    paddingVertical: 5,    // Reducir padding
    margin: 4,             // Reducir el espacio entre botones
    justifyContent: "center",
    alignItems: "center",
    minWidth: 55,          // Ajuste de tamaño mínimo
    maxWidth: 90,         // Ajuste de tamaño máximo
    elevation: 2,          // Sombra ligera
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row", // Alineación en fila para icono y texto
    alignItems: "center", // Centrado de los elementos
  },
  categoryButtonActive: {
    backgroundColor: Color.colorBlack,  // Fondo oscuro para categorías seleccionadas
    elevation: 3, // Sombra más prominente al ser seleccionada
  },
  categoryButtonText: {
    fontSize: FontSize.size_xs, // Texto más pequeño
    color: Color.colorBlack,
    fontFamily: FontFamily.juaRegular,
    marginLeft: 5, // Agregar espacio entre el ícono y el texto
  },
  categoryButtonTextActive: {
    color: "#fff", // Blanco para las categorías seleccionadas
  },
  categoryIcon: {
    width: 20,  // Ajuste el tamaño del icono
    height: 20, // Ajuste el tamaño del icono
    resizeMode: "contain", // Para que la imagen se ajuste sin distorsionarse
  },
  subCategoryButton: {
    backgroundColor: "#e0e0e0", // Fondo más claro para subcategorías
    borderRadius: 15,            // Reducción del borderRadius
    paddingHorizontal: 7,        // Reducir padding horizontal
    paddingVertical: 4,          // Reducir padding vertical
    margin: 4,                   // Reducir el espacio entre botones
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,                // Ajuste de tamaño mínimo
    maxWidth: 90,               // Ajuste de tamaño máximo
    elevation: 2,                // Sombra ligera
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subCategoryButtonActive: {
    backgroundColor: Color.colorCornflowerblue_100,  // Fondo azul para subcategorías seleccionadas
    elevation: 3,
  },
  subCategoryButtonText: {
    fontSize: FontSize.size_xs, // Texto más pequeño
    color: Color.colorBlack,
    fontFamily: FontFamily.juaRegular,
  },
  subCategoryButtonTextActive: {
    color: "#fff", // Blanco para las subcategorías seleccionadas
  },
});
