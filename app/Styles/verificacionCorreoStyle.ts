// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Styles\verificacionCorreoStyle.ts
import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Ajusta la ruta si es necesario

const verificacionCorreoStyles = StyleSheet.create({
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
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.spartan,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Color.colorBlack,
  },
  subtitle: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDarkgray_200,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Color.colorBlack,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.spartan,
  },
  resendText: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    textAlign: "center",
  },
  resendLink: {
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
});

export default verificacionCorreoStyles; // Asegúrate de exportar como default
