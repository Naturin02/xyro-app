// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Inicio_Sesion\registro.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router"; // Expo Router para la navegación
import { registroStyles } from "../Styles/registroStyle"; // Ruta corregida a registroStyle.ts

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={registroStyles.container}>
      {/* Encabezado */}
      <View style={registroStyles.header}>
        <Image style={registroStyles.logo} source={require("../../assets/images/logo-xyro.png")} />
        <Text style={registroStyles.title}>Ingresa tus datos</Text>
      </View>

      {/* Campos del formulario */}
      <TextInput
        style={registroStyles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={registroStyles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={registroStyles.doubleInput}>
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="Nombre de usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#999"
          value={birthdate}
          onChangeText={setBirthdate}
        />
      </View>

      {/* Checkbox de términos y condiciones */}
      <Pressable style={registroStyles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[registroStyles.checkbox, termsAccepted && registroStyles.checkboxChecked]} />
        <Text style={registroStyles.checkboxText}>
          He leído y acepto las Condiciones de uso, Privacidad, Cookies y correos electrónicos
        </Text>
      </Pressable>

      {/* Botón de registro */}
      <Pressable
        style={[registroStyles.registerButton, !termsAccepted && registroStyles.disabledButton]}
        disabled={!termsAccepted}
        onPress={() => router.push("/Inicio_Sesion/verificacion")}
      >
        <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};

export default RegistroScreen;
