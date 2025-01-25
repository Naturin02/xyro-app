import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Color, FontFamily, FontSize } from "../constants/GlobalStyles";

const VerificacionCorreo = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/images/logo-xyro2.png")} />
      </View>

      {/* Mensaje de verificación */}
      <Text style={styles.title}>Verifica tu identidad en dos pasos para una mejor seguridad</Text>
      <Text style={styles.subtitle}>
        Te hemos enviado un correo electrónico con un enlace de verificación
      </Text>

      {/* Botón Continuar */}
      <Pressable style={styles.button} onPress={() => router.replace("/(tabs)/marcas")}>
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>

      {/* Enlace para reenviar código */}
      <Text style={styles.resendText}>
        ¿No recibió un correo de verificación?{" "}
        <Pressable onPress={() => alert("Correo reenviado")}>
          <Text style={styles.resendLink}>Reenviar</Text>
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default VerificacionCorreo;
