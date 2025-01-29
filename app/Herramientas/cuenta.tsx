import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import { CuentaStyles } from "../Styles/cuentaStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import { Ionicons } from "@expo/vector-icons";

const CuentaScreen = () => {
  const router = useRouter();

  const handleDeleteAccount = () => {
    Alert.alert(
      "Eliminar cuenta",
      "¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: () => alert("Cuenta eliminada") }
      ]
    );
  };

  return (
    <View style={CuentaStyles.container}>
      {/* Encabezado */}
      <View style={CuentaStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={CuentaStyles.headerTitle}>Mi cuenta</Text>
        <Pressable onPress={() => alert("Carrito")}> 
          <Ionicons name="cart-outline" size={28} color="#333" />
        </Pressable>
      </View>

      {/* Mensaje de bienvenida */}
      <View style={CuentaStyles.userContainer}>
        <Text style={CuentaStyles.userText}>¡Hola!</Text>
      </View>

      {/* Opciones de cuenta */}
      <Pressable style={CuentaStyles.optionButton} onPress={() => alert("Mis pedidos")}> 
        <Text style={CuentaStyles.optionText}>Mis pedidos</Text>
      </Pressable>
      <Pressable style={CuentaStyles.optionButton} onPress={() => alert("Mis datos")}> 
        <Text style={CuentaStyles.optionText}>Mis datos</Text>
      </Pressable>
      <Pressable style={CuentaStyles.optionButton} onPress={() => alert("Devoluciones")}> 
        <Text style={CuentaStyles.optionText}>Devoluciones</Text>
      </Pressable>

      {/* Botón de cerrar sesión */}
      <Pressable style={CuentaStyles.logoutButton} onPress={() => router.replace("/Inicio_Sesion/login")}> 
        <Text style={CuentaStyles.logoutButtonText}>Cerrar Sesión</Text>
      </Pressable>

      {/* Botón para eliminar cuenta */}
      <Pressable style={CuentaStyles.deleteButton} onPress={handleDeleteAccount}> 
        <Text style={CuentaStyles.deleteButtonText}>Eliminar Cuenta</Text>
      </Pressable>

      {/* Footer de navegación */}
      <FooterNavigation />
    </View>
  );
};

export default CuentaScreen;
