import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { registroStyles } from "../Styles/registroStyle";
import { backend } from "@/context/endpoints"; // Importar la URL base del backend
import api from "../../context/api"; // Importar la instancia de axios

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función para manejar el registro
  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !telefono || !username) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (!termsAccepted) {
      Alert.alert("Aviso", "Debes aceptar los términos y condiciones para continuar");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(`/usuarios/registro`, { // Usamos `backend` para la URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: firstName,
          apellido: lastName,
          correo: email,
          contrasena: password,
          telefono: telefono,
          nombre_usuario: username,
        }),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (response.ok) {
        Alert.alert("Registro exitoso", "Usuario registrado correctamente");
        router.replace("/Inicio_Sesion/login"); // Redirigir al login
      } else {
        const errorMessage = data.error || "No se pudo completar el registro. Inténtalo nuevamente.";
        Alert.alert("Error en el registro", errorMessage);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      Alert.alert("Error", "Hubo un problema con la conexión al servidor. Verifica que Laravel esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

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
        keyboardType="email-address"
        autoCapitalize="none"
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
          onChangeText={setFirstName}
        />
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="Apellido"
          placeholderTextColor="#999"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

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
          placeholder="Teléfono"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />
      </View>

      {/* Checkbox de términos y condiciones */}
      <Pressable style={registroStyles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[registroStyles.checkbox, termsAccepted && registroStyles.checkboxChecked]} />
        <Text style={registroStyles.checkboxText}>
          He leído y acepto las Condiciones de uso, Privacidad, Cookies y correos electrónicos
        </Text>
      </Pressable>

      {/* Botón de registro con indicador de carga */}
      <TouchableOpacity
        style={[registroStyles.registerButton, (!termsAccepted || loading) && registroStyles.disabledButton]}
        disabled={!termsAccepted || loading}
        onPress={handleRegister}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default RegistroScreen;
