import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Expo Router para la navegación
import { registroStyles } from "../Styles/registroStyle"; // Importación correcta a los estilos

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState(""); // Nuevo campo para el primer nombre
  const [lastName, setLastName] = useState(""); // Nuevo campo para el apellido
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = async () => {
    // Limpiar los valores y eliminar espacios en blanco al principio y al final
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedUsername = username.trim();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    // Verificar si los campos están vacíos
    if (!trimmedEmail || !trimmedPassword || !trimmedUsername || !trimmedFirstName || !trimmedLastName) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://192.168.137.1:5000/api/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: trimmedFirstName, // Agregar nombre
          correo: trimmedEmail,
          contrasena: trimmedPassword,
          nombre_usuario: trimmedUsername,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        router.push("/Inicio_Sesion/verificacion"); // Asegúrate que la ruta de la verificación sea correcta
      } else {
        alert("Error en el registro: " + data.error);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error en la conexión con el servidor");
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
            if (/^[a-zA-Z\s]*$/.test(value)) setFirstName(value);
          }}
        />
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="Apellido"
          placeholderTextColor="#999"
          value={lastName}
          onChangeText={(value) => {
            if (/^[a-zA-Z\s]*$/.test(value)) setLastName(value);
          }}
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
      </View>

      {/* Checkbox de términos y condiciones */}
      <Pressable style={registroStyles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[registroStyles.checkbox, termsAccepted && registroStyles.checkboxChecked]} />
        <Text style={registroStyles.checkboxText}>
          He leído y acepto las Condiciones de uso, Privacidad, Cookies y correos electrónicos
        </Text>
      </Pressable>

      {/* Botón de registro */}
      <TouchableOpacity
        style={[registroStyles.registerButton, !termsAccepted && registroStyles.disabledButton]}
        disabled={!termsAccepted}
        onPress={handleRegister} // Llama al registro y luego navega a la verificación
      >
        <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroScreen;
