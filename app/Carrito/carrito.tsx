import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";

const CarritoScreen = () => {
  const router = useRouter();
  const [codigoPostal, setCodigoPostal] = useState("");

  return (
    <View style={CarritoStyles.container}>
      {/* Encabezado */}
      <View style={CarritoStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={CarritoStyles.headerTitle}>Carrito</Text>
        <Pressable onPress={() => alert("Carrito")}> 
          <Ionicons name="cart-outline" size={28} color="#333" />
        </Pressable>
      </View>

      {/* Estimación de entrega */}
      <Text style={CarritoStyles.subText}>Para estimar la fecha de entrega</Text>
      <View style={CarritoStyles.inputContainer}>
        <TextInput
          style={CarritoStyles.input}
          placeholder="Ingresa tu C.P"
          keyboardType="numeric"
          maxLength={5}
          value={codigoPostal}
          onChangeText={setCodigoPostal}
        />
      </View>

      {/* Mensaje de carrito vacío */}
      <Text style={CarritoStyles.emptyCartText}>No hay productos en el carrito</Text>

      {/* Botón de Ir a Comprar */}
      <Pressable style={CarritoStyles.buyButton} onPress={() => alert("Ir a comprar")}> 
        <Text style={CarritoStyles.buyButtonText}>Ir a comprar</Text>
      </Pressable>
    </View>
  );
};

export default CarritoScreen;
