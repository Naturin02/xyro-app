import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Expo Router para la navegación
import { registroStyles } from "../Styles/registroStyle"; // Importación correcta a los estilos
import { API_URL } from "../../backend/utils/config"; // Usar API_URL centralizada

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telefono, setTelefono] = useState(""); // Nuevo campo de teléfono
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Función para manejar el registro
  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !telefono || !username) {
        Alert.alert("Error", "Todos los campos son obligatorios");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/usuarios/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: firstName,
                apellido: lastName,
                correo: email,
                contrasena: password,
                telefono: telefono,
                nombre_usuario: username
            })
        });

        const data = await response.json();
        console.log("Respuesta del servidor:", data);

        if (response.ok) {
            Alert.alert("Registro exitoso", "Usuario registrado correctamente");
            router.replace("/Inicio_Sesion/login"); // Redirigir al login
        } else {
            Alert.alert("Error en el registro", data.error);
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        Alert.alert("Error", "Hubo un problema con el registro");
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
      <TextInput style={registroStyles.input} placeholder="Correo electrónico" placeholderTextColor="#999" value={email} onChangeText={setEmail} />
      <TextInput style={registroStyles.input} placeholder="Contraseña" placeholderTextColor="#999" secureTextEntry value={password} onChangeText={setPassword} />
      
      <View style={registroStyles.doubleInput}>
        <TextInput style={[registroStyles.input, registroStyles.halfInput]} placeholder="Nombre" placeholderTextColor="#999" value={firstName} onChangeText={setFirstName} />
        <TextInput style={[registroStyles.input, registroStyles.halfInput]} placeholder="Apellido" placeholderTextColor="#999" value={lastName} onChangeText={setLastName} />
      </View>

      <View style={registroStyles.doubleInput}>
        <TextInput style={[registroStyles.input, registroStyles.halfInput]} placeholder="Nombre de usuario" placeholderTextColor="#999" value={username} onChangeText={setUsername} />
        <TextInput style={[registroStyles.input, registroStyles.halfInput]} placeholder="Teléfono" placeholderTextColor="#999" keyboardType="phone-pad" value={telefono} onChangeText={setTelefono} />
      </View>

      {/* Checkbox de términos y condiciones */}
      <Pressable style={registroStyles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[registroStyles.checkbox, termsAccepted && registroStyles.checkboxChecked]} />
        <Text style={registroStyles.checkboxText}>He leído y acepto las Condiciones de uso, Privacidad, Cookies y correos electrónicos</Text>
      </Pressable>

      {/* Botón de registro */}
      <TouchableOpacity style={[registroStyles.registerButton, !termsAccepted && registroStyles.disabledButton]} disabled={!termsAccepted} onPress={handleRegister}>
        <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroScreen;
