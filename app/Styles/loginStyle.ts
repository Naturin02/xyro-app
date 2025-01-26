// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Styles\loginStyle.ts
import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../constants/GlobalStyles"; // Ruta correcta

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.spartan,
    color: Color.colorBlack,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_9xs,
    paddingHorizontal: 15,
    fontSize: FontSize.size_sm,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
  loginButton: {
    backgroundColor: Color.colorBlack,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: Border.br_9xs,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.spartan,
  },
  register: {
    marginBottom: 20,
  },
  registerText: {
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
  orText: {
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_9xs,
    width: "100%",
    marginBottom: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
});
