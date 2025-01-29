import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Ruta correcta si es necesario
import Recuperar from "../Inicio_Sesion/Recuperar";

export const recuperarStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  image: {
    width: 80,  // Ajusta el tamaño según tus necesidades
    height: 80, // Ajusta el tamaño según tus necesidades
    marginBottom: 20, // Para dar espacio entre la imagen y el título
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: FontSize.size_sm,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
  },
  exitButton: {
    backgroundColor: Color.colorGray_400,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  exitButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
  },
});

export default Recuperar;