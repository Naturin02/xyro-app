import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const CarritoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 15,  // Reducir padding general
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,  // Reducir el margen inferior
  },
  headerTitle: {
    fontSize: FontSize.size_xl,  // Reducir el tamaño del encabezado
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
  },
  subText: {
    fontSize: FontSize.size_sm,  // Reducir el tamaño del subtexto
    fontFamily: FontFamily.juaRegular,
    color: "#666",
    marginBottom: 8,  // Reducir margen inferior
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 15,  // Reducir margen inferior
  },
  input: {
    flex: 1,
    paddingVertical: 8,  // Reducir padding vertical
    paddingHorizontal: 12,  // Reducir padding horizontal
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,  // Reducir borderRadius
    fontSize: FontSize.size_sm,  // Reducir tamaño de fuente
  },
  emptyCartText: {
    fontSize: FontSize.size_md,  // Reducir tamaño de texto
    fontFamily: FontFamily.juaRegular,
    textAlign: "center",
    marginTop: 20,  // Reducir espacio superior
    color: "#444",
  },
  buyButton: {
    marginTop: 15,  // Reducir margen superior
    paddingVertical: 12,  // Reducir padding vertical
    width: "75%",  // Reducir el ancho
    backgroundColor: "#000",
    borderRadius: 8,  // Reducir borderRadius
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: FontSize.size_sm,  // Reducir el tamaño de texto
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
  },
});

export default CarritoStyles;
