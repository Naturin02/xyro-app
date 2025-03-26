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
    justifyContent: "space-between",
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
    width: 100, // Aumentamos el tamaño del contenedor para la imagen
    height: 100, // Aumentamos el tamaño del contenedor para la imagen
    borderRadius: 50, // Lo hacemos completamente redondo
    backgroundColor: "#ccc", // Fondo gris para el avatar si no tiene imagen
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
  },

  userIcon: {
    width: 90, // Ajustar el tamaño de la imagen dentro del círculo
    height: 90, // Ajustar el tamaño de la imagen dentro del círculo
    borderRadius: 45, // Para que la imagen quede redonda
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
    justifyContent: "flex-end", // Asegura que los botones estén más abajo
    marginBottom: 40, // Espacio adicional desde la parte inferior
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
