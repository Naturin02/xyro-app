import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Ruta correcta si es necesario

export const correoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 5, // Ajustado para separar un poco más
  },
  subtitle: {
    textAlign: "center",
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    marginBottom: 0, // Ajustado para que esté más separado
    paddingHorizontal: 20,
  },
  Email: {
    width: 80,  // Ajusta el tamaño de la imagen
    height: 80,  // Ajusta el tamaño de la imagen
    marginBottom: 20,  // Ajusta el espacio entre la imagen y el título
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "80%",
    marginTop: 20, // Ajustado para que esté más cerca del título
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.juaRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  exitButton: {
    backgroundColor: Color.colorGray_300,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
  },
  exitButtonText: {
    color: Color.colorBlack,
    fontFamily: FontFamily.juaRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
});
