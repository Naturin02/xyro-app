import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const MarcasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContent: {
    paddingBottom: 80, // Espacio para evitar que el contenido se superponga con la barra
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: Color.colorBlack,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  logo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
  },
  cart: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: Color.colorBlack,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  navItem: {
    padding: 10,
  },
  navText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
  },
  banner: {
    backgroundColor: Color.colorSeagreen,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  bannerText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  sectionTitle: {
    fontSize: FontSize.size_mini,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: Color.colorDarkslategray,
  },
  card: {
    backgroundColor: Color.colorGainsboro_200,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  cardTitle: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 12,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
  },
  // Estilos adicionales para la lista de tiendas
  tiendaContainer: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Color.colorSnow,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
  },
  tiendaNombre: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    fontWeight: "bold",
  },
  tiendaHorarios: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
  tiendaDireccion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
  tiendaDescripcion: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorDarkslategray,
    marginTop: 4,
  },
});

export default MarcasStyles;
