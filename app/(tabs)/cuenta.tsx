import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

const CuentaScreen = () => {
  const router = useRouter(); // Expo Router para navegación

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Cuenta</Text>

      <Pressable style={styles.button} onPress={() => alert("Mis pedidos")}>
        <Text style={styles.buttonText}>Mis pedidos</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => alert("Mis datos")}>
        <Text style={styles.buttonText}>Mis datos</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => alert("Devoluciones")}>
        <Text style={styles.buttonText}>Devoluciones</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={() => router.replace("/login")}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorGray_200,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
  },
});

export default CuentaScreen;
