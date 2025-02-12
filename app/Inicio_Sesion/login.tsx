import React, { useState, useEffect } from "react";
import { Image, View, Pressable, Text, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { loginStyles } from "../Styles/loginStyle"; // Ruta corregida a loginStyle.ts
import { API_URL } from "../../backend/utils/config";

const LoginScreen = () => {
  const router = useRouter(); // Expo Router para navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkBackend = async () => {
    console.log("Intentando conectar con el backend...");

    try {
      const response = await fetch(`${API_URL}/`); // Usar API_URL aquí
      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

      const data = await response.json();
      console.log("✅ Conexión exitosa con el backend:", data);
    } catch (error) {
      console.error("❌ Error al conectar con el backend:", error);
    }
  };

  useEffect(() => {
    console.log("Ejecutando checkBackend()...");
    checkBackend();
  }, []);

  // ✅ Función para manejar el inicio de sesión (simulado)
  const handleLogin = async () => {
    // Aquí simulamos que siempre el login es exitoso
    Alert.alert("Inicio de sesión exitoso", `Bienvenido`);

    // Redirigir a la pantalla principal sin necesidad de hacer login real
    router.replace("/Herramientas/marcas"); // ✅ Redirigir a la pantalla principal
  };

  return (
    <View style={loginStyles.container}>
      {/* Encabezado con Logo */}
      <View style={loginStyles.header}>
        <Image style={loginStyles.logo} source={require("../../assets/images/logo-xyro.png")} />
        <Text style={loginStyles.appName}>Xyro</Text>
      </View>

      {/* Formulario de inicio de sesión */}
      <Text style={loginStyles.title}>Ingresa tus datos</Text>

      <TextInput
        style={loginStyles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable 
      onPress={() => router.push("/Inicio_Sesion/Recuperar")} 
      style={loginStyles.forgotPassword}>
      <Text style={loginStyles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      {/* ✅ Botón de inicio de sesión simulado */}
      <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      {/* Registro y alternativas */}
      <Pressable onPress={() => router.replace("/Inicio_Sesion/registro")} style={loginStyles.register}>
        <Text style={loginStyles.registerText}>Regístrate gratis</Text>
      </Pressable>

      <Text style={loginStyles.orText}>O</Text>

      {/* Botones de redes sociales */}
      <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Google")}>
        {/* Actualizado con nueva imagen de Google */}
        <Image style={loginStyles.socialIcon} source={require("../../assets/images/google.png")} />
        <Text style={loginStyles.socialButtonText}>Continuar con Google</Text>
      </Pressable>

      <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Apple")}>
        <Image style={loginStyles.socialIcon} source={require("../../assets/images/apple-icon.png")} />
        <Text style={loginStyles.socialButtonText}>Continuar con Apple</Text>
      </Pressable>

      <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Facebook")}>
        {/* Actualizado con nueva imagen de Facebook */}
        <Image style={loginStyles.socialIcon} source={require("../../assets/images/facebook.png")} />
        <Text style={loginStyles.socialButtonText}>Continuar con Facebook</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
