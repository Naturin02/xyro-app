import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router"; // Expo Router para la navegación
import { Color, FontFamily, FontSize, Border } from "../constants/GlobalStyles";

const RegistroScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/images/logo-xyro.png")} />
        <Text style={styles.title}>Ingresa tus datos</Text>
      </View>

      {/* Campos del formulario */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.doubleInput}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Nombre de usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#999"
          value={birthdate}
          onChangeText={setBirthdate}
        />
      </View>

      {/* Checkbox de términos y condiciones */}
      <Pressable style={styles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
        <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]} />
        <Text style={styles.checkboxText}>
          He leído y acepto las Condiciones de uso, Privacidad, Cookies y correos electrónicos
        </Text>
      </Pressable>

      {/* Botón de registro */}
      <Pressable
        style={[styles.registerButton, !termsAccepted && styles.disabledButton]}
        disabled={!termsAccepted}
        onPress={() => router.push("/(tabs)/marcas")}
      >
        <Text style={styles.registerButtonText}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};

// 🎨 **Estilos del formulario**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_9xs,
    paddingHorizontal: 15,
    fontSize: FontSize.size_sm,
    marginBottom: 15,
  },
  doubleInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfInput: {
    width: "48%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.colorGray_300,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: Color.colorDarkslategray,
  },
  checkboxText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    flexShrink: 1,
  },
  registerButton: {
    backgroundColor: Color.colorBlack,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: Border.br_9xs,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: Color.colorGray_300,
  },
  registerButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.spartan,
  },
});

export default RegistroScreen;
