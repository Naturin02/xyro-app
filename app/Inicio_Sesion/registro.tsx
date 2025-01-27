import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
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

  // ✅ Mueve `handleRegister` dentro del componente para que pueda acceder a los estados
  const handleRegister = async () => {
    if (!email || !password || !username || !birthdate) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://10.0.2.2:5000/api/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email,
          contrasena: password, // ✅ Asegurar que se llama igual que en la BD
          nombre_usuario: username,
          fecha_nacimiento: birthdate,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        router.push("/Inicio_Sesion/verificacion");
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
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#999"
          value={birthdate}
          onChangeText={(value) => {
            const formattedValue = value.replace(/[^0-9]/g, "");
            let finalValue = formattedValue;

            if (formattedValue.length >= 2) {
              finalValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
            }
            if (formattedValue.length >= 4) {
              finalValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}/${formattedValue.slice(4, 8)}`;
            }

            setBirthdate(finalValue);
          }}
          keyboardType="number-pad"
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
        onPress={handleRegister} // ✅ Ahora el botón llama a la función correctamente
      >
        <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};

export default RegistroScreen;
