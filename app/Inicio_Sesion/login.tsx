import React, { useState } from "react";
import { Image, View, Pressable, Text, TextInput, Modal, Animated, Alert } from "react-native";
import { useRouter } from "expo-router";
import { loginStyles } from "../Styles/loginStyle"; // Ruta corregida a loginStyle.ts
import { backend } from "@/context/endpoints"; // Importamos el backend desde el contexto
import { FontFamily, FontSize, Color } from "../../constants/GlobalStyles"; // Estilos globales

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [buttonScale] = useState(new Animated.Value(1));

  // ✅ Nueva función para manejar el inicio de sesión con Laravel
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch(`${backend}/api/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await response.json();
      console.log("📌 Respuesta del servidor:", data);

      if (response.ok) {
        showModal(); // 🔹 Mostramos el modal de éxito
        setTimeout(() => {
          router.replace("/Herramientas/marcas"); // Redirigimos a la pantalla principal
        }, 2000);
      } else {
        Alert.alert("Error", data.error || "Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("❌ Error en el inicio de sesión:", error);
      Alert.alert("Error", "Hubo un problema con el inicio de sesión");
    }
  };

  // Función para mostrar el modal
  const showModal = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Función para ocultar el modal
  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Image style={loginStyles.logo} source={require("../../assets/images/logo-xyro.png")} />
        <Text style={loginStyles.appName}>Xyro</Text>
      </View>

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

      <Pressable onPress={() => router.push("/Inicio_Sesion/Recuperar")} style={loginStyles.forgotPassword}>
        <Text style={loginStyles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      {/* Botón de inicio de sesión */}
      <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      {/* Modal de éxito */}
      <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={hideModal}>
        <View style={loginStyles.modalBackground}>
          <Animated.View style={[loginStyles.modalContent, { opacity: fadeAnim }]}>
            <Text style={loginStyles.modalText}>Inicio de sesión exitoso</Text>
            <Pressable onPress={hideModal}>
              <Text style={loginStyles.modalButton}>Cerrar</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Registro y redes sociales */}
      <Pressable onPress={() => router.replace("/Inicio_Sesion/registro")} style={loginStyles.register}>
        <Text style={loginStyles.registerText}>Regístrate gratis</Text>
      </Pressable>

      <Text style={loginStyles.orText}>O</Text>

      <Text style={loginStyles.socialText}>Inicia sesión o regístrate gratis con:</Text>

      <View style={loginStyles.socialButtonsContainer}>
        <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Google")}>
          <Image style={loginStyles.socialIcon} source={require("../../assets/images/google.png")} />
        </Pressable>

        <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Apple")}>
          <Image style={loginStyles.socialIcon} source={require("../../assets/images/apple-icon.png")} />
        </Pressable>

        <Pressable style={loginStyles.socialButton} onPress={() => console.log("Continuar con Facebook")}>
          <Image style={loginStyles.socialIcon} source={require("../../assets/images/facebook.png")} />
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
