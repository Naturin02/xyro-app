import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { useRouter } from "expo-router"; // Expo Router para la navegación
import { registroStyles } from "../Styles/registroStyle"; // Importación correcta a los estilos

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [firstName, setFirstName] = useState(""); // Nuevo campo para el primer nombre
  const [lastName, setLastName] = useState(""); // Nuevo campo para el apellido
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !username || !birthdate) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Validar y formatear la fecha antes de enviarla al backend
    const partesFecha = birthdate.split("/");
    if (partesFecha.length === 3) {
      const dia = partesFecha[0].padStart(2, "0");
      const mes = partesFecha[1].padStart(2, "0");
      const año = partesFecha[2];

      birthdate = `${dia}/${mes}/${año}`;
    } else {
      alert("Formato de fecha inválido. Usa DD/MM/YYYY");
      return;
    }

    try {
      const response = await fetch("http://10.2.8.34:5000/api/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: firstName, // Agregar nombre
          correo: email,
          contrasena: password,
          nombre_usuario: username,
          fecha_nacimiento: birthdate,
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
        <TextInput
          style={[registroStyles.input, registroStyles.halfInput]}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#999"
          value={birthdate}
          onChangeText={(value) => {
            // Eliminar cualquier carácter que no sea número o barra
            let formattedValue = value.replace(/[^0-9\/]/g, "");

            // Si hay un número de 2 dígitos para el día, añadir la barra
            if (formattedValue.length === 2 && !formattedValue.includes("/")) {
              formattedValue = `${formattedValue.slice(0, 2)}/`;
            }
            // Si hay un número de 2 dígitos para el mes, añadir la barra
            if (formattedValue.length === 5 && !formattedValue.includes("/")) {
              formattedValue = `${formattedValue.slice(0, 5)}/`;
            }

            setBirthdate(formattedValue);
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
        onPress={handleRegister} // Llama al registro y luego navega a la verificación
      >
        <Text style={registroStyles.registerButtonText}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};

export default RegistroScreen;
