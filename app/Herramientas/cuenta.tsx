import { StyleSheet, Platform } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const CuentaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
  },

  /** HEADER **/
  header: {
    backgroundColor: "#000",
    paddingTop: Platform.OS === "ios" ? 50 : 25,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center", // Centra los elementos en el eje horizontal
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  headerTitle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center", // Asegura que el texto se centre
    flex: 1, // Expande el título para ocupar el espacio disponible y centrarlo
  },

  /** SECCIÓN DE USUARIO **/
  userContainer: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    paddingVertical: 20, 
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15, 
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  userAvatar: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
    backgroundColor: "#ccc", 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
  },

  userIcon: {
    width: 90, 
    height: 90, 
    borderRadius: 45, 
  },

  userText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: "#333",
    fontWeight: "bold",
    marginTop: 3, 
  },

  /** CONTENEDOR DE OPCIONES **/
  optionsContainer: {
    flex: 1, 
    justifyContent: "flex-end", 
    marginBottom: 40, 
  },

  optionButton: {
    width: "100%",
    paddingVertical: 10, 
    backgroundColor: "#000",
    borderRadius: 8, 
    alignItems: "center",
    marginVertical: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  optionText: {
    fontSize: FontSize.size_sm, 
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
    fontWeight: "bold",
  },

  /** BOTÓN DE CERRAR SESIÓN **/
  logoutButton: {
    width: "100%",
    paddingVertical: 10, 
    backgroundColor: "#000",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12, 
  },

  logoutButtonText: {
    fontSize: FontSize.size_sm, 
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
    fontWeight: "bold",
  },

  /** BOTÓN DE ELIMINAR CUENTA **/
  deleteButton: {
    width: "100%",
    paddingVertical: 10, 
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12, 
  },

  deleteButtonText: {
    fontSize: FontSize.size_sm, 
    fontFamily: FontFamily.juaRegular,
    color: "red",
    fontWeight: "bold",
  },
});

export default CuentaStyles;
