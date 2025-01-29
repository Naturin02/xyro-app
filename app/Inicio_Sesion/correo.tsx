import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { correoStyles } from "../Styles/CorreoStyle"; // Importación a los estilos

const Correo = () => {
  const router = useRouter();

  return (
    <View style={correoStyles.container}>
      {/* Imagen de email */}
      <Image 
        style={correoStyles.Email}
        source={require("../../assets/images/Email.png")} // Ruta de la imagen
      />

      {/* Título */}
      <Text style={correoStyles.title}>¡Revisa tu correo electrónico!</Text>
      
      {/* Subtítulo */}
      <Text style={correoStyles.subtitle}>
        Por favor revisa la dirección de correo electrónico y busca un email con las instrucciones sobre cómo restablecer tu contraseña
      </Text>

      {/* Botón para reenviar el email */}
      <TouchableOpacity
        style={correoStyles.button}
        onPress={() => console.log("Reenviar email")} // Acción de reenviar el correo
      >
        <Text style={correoStyles.buttonText}>Reenviar email</Text>
      </TouchableOpacity>

      {/* Botón de salir */}
      <TouchableOpacity
        style={correoStyles.exitButton}
        onPress={() => router.push("/Inicio_Sesion/login")} // Redirige a login
      >
        <Text style={correoStyles.exitButtonText}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Correo;
