import React, { useState } from "react";
import { Image, StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { Color, FontFamily, FontSize, Border } from "../constants/GlobalStyles";

const LoginScreen = () => {
  const router = useRouter(); // Expo Router para navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Encabezado con Logo */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/images/logo-xyro.png")} />
        <Text style={styles.appName}>Xyro</Text>
      </View>

      {/* Formulario de inicio de sesión */}
      <Text style={styles.title}>Ingresa tus datos</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={() => console.log("Olvidaste tu contraseña")} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      {/* Botón de inicio de sesión */}
      <Pressable style={styles.loginButton} onPress={() => router.replace("/(tabs)/marcas")}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      {/* Registro y alternativas */}
      <Pressable onPress={() => router.replace("/registro")} style={styles.register}>
        <Text style={styles.registerText}>Regístrate gratis</Text>
      </Pressable>

      <Text style={styles.orText}>O</Text>

      {/* Botones de redes sociales */}
      <Pressable style={styles.socialButton} onPress={() => console.log("Continuar con Google")}>
        <Image style={styles.socialIcon} source={require("../assets/images/google-icon.png")} />
        <Text style={styles.socialButtonText}>Continuar con Google</Text>
      </Pressable>

      <Pressable style={styles.socialButton} onPress={() => console.log("Continuar con Apple")}>
        <Image style={styles.socialIcon} source={require("../assets/images/apple-icon.png")} />
        <Text style={styles.socialButtonText}>Continuar con Apple</Text>
      </Pressable>

      <Pressable style={styles.socialButton} onPress={() => console.log("Continuar con Facebook")}>
        <Image style={styles.socialIcon} source={require("../assets/images/facebook-icon.png")} />
        <Text style={styles.socialButtonText}>Continuar con Facebook</Text>
      </Pressable>
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

export default LoginScreen;
