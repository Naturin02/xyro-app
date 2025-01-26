
// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Inicio_Sesion\CuentaScreen.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { CuentaStyles } from "../Styles/cuentaStyle"; // Ruta corregida para importar los estilos
import FooterNavigation from "../Componentes/FooterNavigation"; // Importa FooterNavigation

const CuentaScreen = () => {
  const router = useRouter(); // Expo Router para navegación

  return (
    <View style={CuentaStyles.container}>
      <Text style={CuentaStyles.title}>Mi Cuenta</Text>

      <Pressable style={CuentaStyles.button} onPress={() => alert("Mis pedidos")}>
        <Text style={CuentaStyles.buttonText}>Mis pedidos</Text>
      </Pressable>

      <Pressable style={CuentaStyles.button} onPress={() => alert("Mis datos")}>
        <Text style={CuentaStyles.buttonText}>Mis datos</Text>
      </Pressable>

      <Pressable style={CuentaStyles.button} onPress={() => alert("Devoluciones")}>
        <Text style={CuentaStyles.buttonText}>Devoluciones</Text>
      </Pressable>

      {/* Botón Cerrar sesión */}
      <Pressable style={CuentaStyles.logoutButton} onPress={() => router.replace("/Inicio_Sesion/login")}>
        <Text style={CuentaStyles.buttonText}>Cerrar Sesión</Text>
      </Pressable>

      {/* Footer de navegación */}
      <FooterNavigation />
    </View>
  );
};

export default CuentaScreen;
