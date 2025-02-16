import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const CategoryNavigationStyles = StyleSheet.create({
  container: {
    padding: 10, // Reduje el padding general
    backgroundColor: Color.colorWhite,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20, // Mejoré el radio para un estilo más suave
    paddingHorizontal: 10, // Ajusté el padding para hacerlo más pequeño
    paddingVertical: 6,    // Ajusté el padding para hacerlo más pequeño
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
    flexWrap: "wrap", // Esto hace que los botones se ajusten si no caben
    justifyContent: "flex-start", // Los botones se alinean al inicio
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10, // Reduje el borderRadius
    paddingHorizontal: 10, // Ajusté el padding
    paddingVertical: 6,    // Ajusté el padding
    margin: 3,             // Reducí el espacio entre botones
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,          // Ajusté el tamaño mínimo
    maxWidth: 100,         // Ajusté el tamaño máximo
    elevation: 1,          // Sombra más ligera
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryButtonActive: {
    backgroundColor: Color.colorBlack,
    elevation: 3,
  },
  categoryButtonText: {
    fontSize: FontSize.size_xs, // Texto más pequeño
    color: Color.colorBlack,
    fontFamily: FontFamily.juaRegular,
  },
  categoryButtonTextActive: {
    color: "#fff", // Blanco para las categorías seleccionadas
  },
  subCategoryButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,            // Reduje el borderRadius
    paddingHorizontal: 8,        // Ajusté el padding
    paddingVertical: 5,          // Ajusté el padding
    margin: 3,                   // Reducí el espacio entre botones
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,                // Ajusté el tamaño mínimo
    maxWidth: 100,               // Ajusté el tamaño máximo
    elevation: 1,                // Sombra más ligera
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  subCategoryButtonActive: {
    backgroundColor: Color.colorCornflowerblue_100, // Fondo azul para subcategorías seleccionadas
    elevation: 2,
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
