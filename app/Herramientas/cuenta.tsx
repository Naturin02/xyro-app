import React, { useState } from "react";
import { View, Text, Pressable, Alert, TextInput, Modal, Platform, KeyboardAvoidingView } from "react-native";
import { useRouter } from "expo-router";
import { CuentaStyles } from "../Styles/cuentaStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const CuentaScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteAccount = () => {
    setModalVisible(true);
  };

  const confirmDeleteAccount = () => {
    if (password.trim() === "") {
      Alert.alert("Error", "Debes ingresar tu contraseña para continuar.");
    } else {
      setModalVisible(false);
      router.replace("/Inicio_Sesion/login");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header fuera del SafeAreaView para mostrar la información del notch */}
      <View style={CuentaStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={CuentaStyles.headerTitle}>Mi cuenta</Text>
        <Pressable onPress={() => alert("Carrito")}>
          <Ionicons name="cart-outline" size={28} color="#333" />
        </Pressable>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={CuentaStyles.container}>
            {/* Mensaje de bienvenida */}
            <View style={CuentaStyles.userContainer}>
              <Text style={CuentaStyles.userText}>¡Hola!</Text>
            </View>

            {/* Opciones de cuenta */}
            <Pressable style={CuentaStyles.optionButton} onPress={() => alert("Mis pedidos")}>
              <Text style={CuentaStyles.optionText}>Mis pedidos</Text>
            </Pressable>
            
            <Pressable style={CuentaStyles.optionButton} onPress={() => router.push("/Herramientas/datosPersonales")}>
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

            {/* Modal para confirmar eliminación de cuenta */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={CuentaStyles.modalOverlay}>
                <View style={CuentaStyles.modalContainer}>
                  <Text style={CuentaStyles.modalTitle}>Confirmar Eliminación</Text>
                  <Text style={CuentaStyles.modalText}>Ingresa tu contraseña para eliminar tu cuenta:</Text>
                  <TextInput
                    style={CuentaStyles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                  <View style={CuentaStyles.modalButtons}>
                    <Pressable style={CuentaStyles.cancelButton} onPress={() => setModalVisible(false)}>
                      <Text style={CuentaStyles.cancelButtonText}>Cancelar</Text>
                    </Pressable>
                    <Pressable style={CuentaStyles.confirmButton} onPress={confirmDeleteAccount}>
                      <Text style={CuentaStyles.confirmButtonText}>Eliminar</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* Footer de navegación */}
      <FooterNavigation />
    </View>
  );
};

export default CuentaScreen;
