import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { recuperarStyles } from "../Styles/RecuperarStyle"; // Importación correcta a los estilos

const Recuperar = () => {
  const router = useRouter();

  return (
    <View style={recuperarStyles.container}>
      {/* Imagen de la casita arriba del título */}
      <Image 
        style={recuperarStyles.image}
        source={require("../../assets/images/casita.png")} // Ruta de la imagen
      />

      {/* Título */}
      <Text style={recuperarStyles.title}>¿Olvidaste tu contraseña?</Text>
      
      {/* Subtítulo */}
      <Text style={recuperarStyles.subtitle}>
        Ingresa el correo electrónico para recibir las instrucciones para restablecer contraseña
      </Text>

      {/* Campo de entrada para correo electrónico */}
      <TextInput
        style={recuperarStyles.input}
        placeholder="Correo electrónico*"
        placeholderTextColor="#999"
      />

      {/* Botón de enviar */}
      <TouchableOpacity
        style={recuperarStyles.button}
        onPress={() => router.push("/Inicio_Sesion/correo")} // Redirige a la pantalla de correo.tsx
      >
        <Text style={recuperarStyles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Botón de salir */}
      <TouchableOpacity
        style={recuperarStyles.exitButton}
        onPress={() => router.push("/Inicio_Sesion/login")} // Redirige a login
      >
        <Text style={recuperarStyles.exitButtonText}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recuperar;
