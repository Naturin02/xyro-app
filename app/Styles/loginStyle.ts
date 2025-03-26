import { StyleSheet, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 15,
    paddingTop: 40, // Añadido margen superior para empujar el contenido hacia abajo
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  appName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
  },
  title: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 15,
    fontSize: FontSize.size_sm,
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  loginButton: {
    backgroundColor: "#70E099",  // Se cambió el color de fondo del botón
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
  },
  register: {
    alignItems: "center",
    marginTop: 15,
  },
  registerText: {
    fontSize: FontSize.size_xs,
    color: Color.colorCornflowerblue_100,
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
  },
  socialText: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    marginVertical: 15,
  },
  // Estilos para los botones sociales
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30, // Ajustado el margen inferior
  },
  socialButton: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    width: 24,
    height: 24,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 20,
  },
  modalButton: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.juaRegular,
    color: "#007BFF",
  },
});

export default loginStyles;
