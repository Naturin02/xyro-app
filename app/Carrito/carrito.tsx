import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Alert, ActivityIndicator } from "react-native";
import { useCart } from "@/context/CartContext"; // Ajusta la ruta según tu proyecto
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStripe } from "@stripe/stripe-react-native"; // Importamos Stripe para manejar los pagos

const CarritoScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const { initPaymentSheet, presentPaymentSheet } = useStripe(); // Hooks de Stripe para mostrar el checkout
  const [loading, setLoading] = useState(false);

  // Calcular total del carrito
  const getTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const shipping = 30; // Costo de envío fijo
    return { total, shipping, subtotal: total + shipping };
  };

  // 🔥 **Función para manejar el pago con Stripe**
  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1️⃣ **Solicitar PaymentIntent al backend en Laravel**
      const response = await fetch("http://192.168.1.72:8000/api/stripe/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: getTotal().subtotal * 100, // Convertimos a centavos para Stripe
          currency: "mxn",
          description: "Compra en XYRO",
        }),
      });

      const data = await response.json();

      if (data.status !== "success") {
        Alert.alert("Error", data.message);
        setLoading(false);
        return;
      }

      // 2️⃣ **Inicializar PaymentSheet**
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: data.payment_intent.client_secret,
        merchantDisplayName: "XYRO Store",
      });

      if (error) {
        Alert.alert("Error", error.message);
        setLoading(false);
        return;
      }

      // 3️⃣ **Mostrar el PaymentSheet de Stripe**
      const { error: paymentError } = await presentPaymentSheet();

      if (paymentError) {
        Alert.alert("Pago fallido", paymentError.message);
      } else {
        Alert.alert("Pago exitoso", "Tu pago se ha completado correctamente.");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo procesar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={CarritoStyles.safeArea}>
      <View style={CarritoStyles.container}>
        {/* 🛒 Encabezado */}
        <View style={CarritoStyles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#333" />
          </Pressable>
          <Text style={CarritoStyles.headerTitle}>Carrito de Compras</Text>
          <Ionicons name="cart" size={28} color="#333" />
        </View>

        {/* Lista de productos en el carrito */}
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={CarritoStyles.productContainer}>
              <Text style={CarritoStyles.productName}>{item.nombre_producto}</Text>
              <Text style={CarritoStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
            </View>
          )}
        />

        {/* Sección de Totales */}
        <View style={CarritoStyles.totalSection}>
          <View style={CarritoStyles.totalRow}>
            <Text style={CarritoStyles.totalText}>Subtotal</Text>
            <Text style={CarritoStyles.totalText}>💲 {getTotal().subtotal.toFixed(2)}</Text>
          </View>

          {/* 🔥 Botón de pago con Stripe */}
          <Pressable
            style={[CarritoStyles.checkoutButton, loading && CarritoStyles.disabledButton]}
            onPress={handlePayment}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="white" /> : <Text style={CarritoStyles.checkoutButtonText}>Pagar con Stripe</Text>}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CarritoScreen;
