import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { DatosPersonalesStyles } from "../Styles/datosPersonalesStyle"; // Asegúrate de la ruta correcta
import { Ionicons } from "@expo/vector-icons";

const DatosPersonalesScreen = () => {
  const router = useRouter();
  const [sexo, setSexo] = useState("");

  return (
    <View style={DatosPersonalesStyles.container}>
      {/* Encabezado */}
      <View style={DatosPersonalesStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={DatosPersonalesStyles.headerTitle}>Datos Personales</Text>
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
          <Ionicons name={sexo === "Hombre" ? "radio-button-on" : "radio-button-off"} size={20} color="#000" />
          <Text style={DatosPersonalesStyles.radioText}>Hombre</Text>
        </Pressable>
        <Pressable onPress={() => setSexo("Mujer")} style={DatosPersonalesStyles.radioButton}>
          <Ionicons name={sexo === "Mujer" ? "radio-button-on" : "radio-button-off"} size={20} color="#000" />
          <Text style={DatosPersonalesStyles.radioText}>Mujer</Text>
        </Pressable>
      </View>

      {/* Botón de Continuar */}
      <Pressable style={DatosPersonalesStyles.continueButton} onPress={() => alert("Datos guardados")}>
        <Text style={DatosPersonalesStyles.continueButtonText}>Guardar</Text>
      </Pressable>
    </View>
  );
};

export default DatosPersonalesScreen;
