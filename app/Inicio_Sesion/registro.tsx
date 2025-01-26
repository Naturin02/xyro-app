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
  const [firstName, setFirstName] = useState(""); // Nuevo campo para el primer nombre
  const [lastName, setLastName] = useState(""); // Nuevo campo para el apellido
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
    placeholder="Nombre"
    placeholderTextColor="#999"
    value={firstName}
    onChangeText={(value) => {
      // Permitir solo letras
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFirstName(value); // Actualizar solo si es válido
      }
    }} // Manejador para el nombre
  />
  <TextInput
    style={[registroStyles.input, registroStyles.halfInput]}
    placeholder="Apellido"
    placeholderTextColor="#999"
    value={lastName}
    onChangeText={(value) => {
      // Permitir solo letras
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setLastName(value); // Actualizar solo si es válido
      }
    }} // Manejador para el apellido
  />
</View>

      <TextInput
  style={[registroStyles.input, registroStyles.halfInput]}
  placeholder="dd/mm/aaaa"
  placeholderTextColor="#999"
  value={birthdate}
  onChangeText={(value) => {
    // Permitir solo números y formatear como dd/mm/yyyy
    const formattedValue = value.replace(/[^0-9]/g, ""); // Eliminar todo excepto números
    let finalValue = formattedValue;

    // Formato dd/mm/yyyy
    if (formattedValue.length >= 2) {
      finalValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
    }
    if (formattedValue.length >= 4) {
      finalValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}/${formattedValue.slice(4, 8)}`;
    }

    setBirthdate(finalValue); // Actualizar el valor de la fecha de nacimiento formateada
  }}
  keyboardType="number-pad" // Asegura que solo se pueda escribir números
/>

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
