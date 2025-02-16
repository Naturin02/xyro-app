import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const FavoritosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
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
  favoritoContainer: {
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
    color: Color.colorBlack,
  },
  favoritoDescripcion: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
});


export default FavoritosStyles;