import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Modal, Animated } from "react-native";
import { useRouter } from "expo-router";
import { DatosPersonalesStyles } from "../Styles/datosPersonalesStyle";
import { Ionicons } from "@expo/vector-icons";

const DatosPersonalesScreen = () => {
  const router = useRouter();
  const [sexo, setSexo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));  // Animación para el fade

  const showModal = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,  // Opacidad completa
      duration: 500,  // Duración de la animación
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,  // Opacidad cero
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <View style={DatosPersonalesStyles.container}>
      {/* Encabezado */}
      <View style={DatosPersonalesStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
        <Text style={DatosPersonalesStyles.headerTitle}>Datos Personales</Text>
        <Pressable onPress={() => alert("Carrito")}>
          <Ionicons name="cart-outline" size={24} color="#333" />
        </Pressable>
      </View>

      {/* Campos de entrada */}
      <View style={DatosPersonalesStyles.form}>
        <Text style={DatosPersonalesStyles.label}>Nombre</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="Nombre" />

        <Text style={DatosPersonalesStyles.label}>Apellido paterno</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="Apellido paterno" />

        <Text style={DatosPersonalesStyles.label}>Apellido materno</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="Apellido materno" />

        <Text style={DatosPersonalesStyles.label}>Teléfono celular</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="Teléfono celular" keyboardType="phone-pad" />

        <Text style={DatosPersonalesStyles.label}>Teléfono adicional</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="Teléfono adicional" keyboardType="phone-pad" />

        <Text style={DatosPersonalesStyles.label}>Fecha de nacimiento</Text>
        <TextInput style={DatosPersonalesStyles.input} placeholder="dd/mm/aa" keyboardType="numeric" />
      </View>

      {/* Selección de sexo */}
      <Text style={DatosPersonalesStyles.label}>Sexo</Text>
      <View style={DatosPersonalesStyles.radioGroup}>
        <Pressable onPress={() => setSexo("Hombre")} style={DatosPersonalesStyles.radioButton}>
          <Ionicons name={sexo === "Hombre" ? "radio-button-on" : "radio-button-off"} size={18} color="#000" />
          <Text style={DatosPersonalesStyles.radioText}>Hombre</Text>
        </Pressable>
        <Pressable onPress={() => setSexo("Mujer")} style={DatosPersonalesStyles.radioButton}>
          <Ionicons name={sexo === "Mujer" ? "radio-button-on" : "radio-button-off"} size={18} color="#000" />
          <Text style={DatosPersonalesStyles.radioText}>Mujer</Text>
        </Pressable>
      </View>

      {/* Botón de Continuar */}
      <Pressable style={DatosPersonalesStyles.continueButton} onPress={showModal}>
        <Text style={DatosPersonalesStyles.continueButtonText}>Guardar</Text>
      </Pressable>

      {/* Modal con animación */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={DatosPersonalesStyles.modalBackground}>
          <Animated.View style={[DatosPersonalesStyles.modalContent, { opacity: fadeAnim }]}>
            <Text style={DatosPersonalesStyles.modalText}>Datos guardados correctamente</Text>
            <Pressable onPress={hideModal}>
              <Text style={DatosPersonalesStyles.modalButton}>Cerrar</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default DatosPersonalesScreen;
