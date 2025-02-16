import React, { useState } from "react";
import { Image, View, Pressable, Text, TextInput, Modal, Animated } from "react-native";
import { useRouter } from "expo-router";
import { loginStyles } from "../Styles/loginStyle"; // Ruta corregida a loginStyle.ts
import { FontFamily, FontSize, Color } from "../../constants/GlobalStyles"; // Importación de estilos globales

const LoginScreen = () => {
  const router = useRouter(); // Expo Router para navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Estado para mostrar el modal
  const [fadeAnim] = useState(new Animated.Value(0)); // Animación para el modal
  const [buttonScale] = useState(new Animated.Value(1)); // Aseguramos que sea un número para la animación

  // Función para manejar el inicio de sesión (simulado)
  const handleLogin = () => {
    showModal();
    // Simula una redirección exitosa
    setTimeout(() => {
      router.replace("/Herramientas/marcas");
    }, 2000);
  };

  // Función para mostrar el modal
  const showModal = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidad completa
      duration: 500, // Duración de la animación
      useNativeDriver: true,
    }).start();
  };

  // Función para ocultar el modal
  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // Opacidad cero
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  // Función para manejar la animación de los botones
  const handleButtonPress = () => {
    Animated.sequence([
      Animated.spring(buttonScale, { toValue: 0.95, friction: 4, useNativeDriver: true }), // Reducir el tamaño
      Animated.spring(buttonScale, { toValue: 1, friction: 4, useNativeDriver: true }), // Restaurar tamaño
    ]).start();
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

      <Pressable onPress={() => router.push("/Inicio_Sesion/Recuperar")} style={loginStyles.forgotPassword}>
        <Text style={loginStyles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      {/* Botón de inicio de sesión */}
      <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      {/* Modal elegante de éxito */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={loginStyles.modalBackground}>
          <Animated.View style={[loginStyles.modalContent, { opacity: fadeAnim }]}>
            <Text style={loginStyles.modalText}>Inicio de sesión exitoso</Text>
            <Pressable onPress={hideModal}>
              <Text style={loginStyles.modalButton}>Cerrar</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Registro y alternativas */}
      <Pressable onPress={() => router.replace("/Inicio_Sesion/registro")} style={loginStyles.register}>
        <Text style={loginStyles.registerText}>Regístrate gratis</Text>
      </Pressable>

      <Text style={loginStyles.orText}>O</Text>

      {/* Texto antes de los botones de redes sociales */}
      <Text style={loginStyles.socialText}>Inicia sesión o regístrate gratis con:</Text>

      {/* Botones de redes sociales solo con logos */}
      <View style={loginStyles.socialButtonsContainer}>
        <Pressable
          style={loginStyles.socialButton}
          onPress={() => {
            handleButtonPress();
            console.log("Continuar con Google");
          }}
        >
          <Animated.Image
            style={[loginStyles.socialIcon, { transform: [{ scale: buttonScale }] }]}
            source={require("../../assets/images/google.png")}
          />
        </Pressable>

        <Pressable
          style={loginStyles.socialButton}
          onPress={() => {
            handleButtonPress();
            console.log("Continuar con Apple");
          }}
        >
          <Animated.Image
            style={[loginStyles.socialIcon, { transform: [{ scale: buttonScale }] }]}
            source={require("../../assets/images/apple-icon.png")}
          />
        </Pressable>

        <Pressable
          style={loginStyles.socialButton}
          onPress={() => {
            handleButtonPress();
            console.log("Continuar con Facebook");
          }}
        >
          <Animated.Image
            style={[loginStyles.socialIcon, { transform: [{ scale: buttonScale }] }]}
            source={require("../../assets/images/facebook.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
