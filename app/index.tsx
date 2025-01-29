import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Cambio de navegación
import { Color, FontFamily, FontSize } from "../constants/GlobalStyles";

const HomeScreen = () => {
  const router = useRouter(); // Cambio para usar Expo Router

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <Image 
        style={styles.backgroundImage} 
        source={require("../assets/images/ImagenP.jpg")} 
        resizeMode="cover" // La imagen cubre toda la pantalla
      />

      {/* Cuadro transparente detrás del logo */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/images/logo-xyro.png")} />
      </View>

      {/* Título */}
      <Text style={styles.title}>Bienvenido a Xyro{"\n"}N°1 en México</Text>

      {/* Botón "Continuar" */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/Inicio_Sesion/login")} // Navega a la página de login
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto asegura que el contenedor ocupe todo el espacio disponible
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Asegura que ocupe todo el ancho
    height: "100%", // Asegura que ocupe toda la altura
  },
  logoContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Fondo gris semi-transparente
    padding: 50,
    borderRadius: 10,
    marginBottom: 1, // Espacio entre el logo y el título
  },
  logo: {
    width: 106,
    height: 110,
  },
  title: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 40,
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: "50%", // Ajusta el tamaño para que se vea adecuado
  },
  buttonText: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.juaRegular,
    fontSize: FontSize.size_5xl,
  },
});

export default HomeScreen;

