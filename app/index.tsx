import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router"; // Cambio de navegación
import { Color, FontFamily, FontSize } from "../constants/GlobalStyles";

const HomeScreen = () => {
  const router = useRouter(); // Cambio para usar Expo Router

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <Image style={styles.backgroundImage} source={require("../assets/images/bienvenido-xyro.png")} />

      {/* Logo */}
      <Image style={styles.logo} source={require("../assets/images/logo-xyro.png")} />

      {/* Título */}
      <Text style={styles.title}>Bienvenido a Xyro{"\n"}N°1 en México</Text>

      {/* Botón "Continuar" */}
      <Pressable style={styles.button} onPress={() => router.push("/Inicio_Sesion/login")}>
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 106,
    height: 120,
    marginBottom: 20,
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
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.juaRegular,
    fontSize: FontSize.size_5xl,
  },
});

export default HomeScreen;
