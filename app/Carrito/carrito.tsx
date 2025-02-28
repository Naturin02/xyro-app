import React, { useState } from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, Image, Alert } from "react-native";
import { useCart } from "@/context/CartContext";
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

const CarritoScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Función para manejar la actualización de cantidad
  const handleUpdateQuantity = (nombre_producto, cantidad) => {
    if (cantidad < 1) {
      Alert.alert(
        "Cantidad mínima",
        "No puedes reducir la cantidad por debajo de 1. ¿Deseas eliminar el producto?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Eliminar", onPress: () => removeFromCart(nombre_producto) },
        ]
      );
    } else {
      updateQuantity(nombre_producto, cantidad);
    }
  };

  // Calcular el total y el envío
  const getTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const shipping = 30; // Costo de envío fijo
    return { total, shipping, subtotal: total + shipping };
  };

  return (
    <SafeAreaView style={CarritoStyles.safeArea}>
      <View style={CarritoStyles.container}>
        {/* Encabezado */}
        <View style={CarritoStyles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#333" />
          </Pressable>
          <Text style={CarritoStyles.headerTitle}>Carrito de Compras</Text>
          <Ionicons name="cart" size={28} color="#333" />
        </View>

        {/* Mensaje si el carrito está vacío */}
        {cart.length === 0 ? (
          <Text style={CarritoStyles.emptyCartText}>🛒 Tu carrito está vacío</Text>
        ) : (
          <>
            {/* Lista de productos en el carrito */}
            <FlatList
              data={cart}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={CarritoStyles.productContainer}>
                  <View style={CarritoStyles.productRow}>
                    {/* Cuadro gris simulado para la imagen */}
                    <View style={CarritoStyles.productImagePlaceholder}></View>

                    <View style={CarritoStyles.productInfo}>
                      <Text style={CarritoStyles.productName}>{item.nombre_producto}</Text>
                      <Text style={CarritoStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
                      {/* Controles de cantidad */}
                      <View style={CarritoStyles.quantityContainer}>
                        <Pressable onPress={() => handleUpdateQuantity(item.nombre_producto, item.cantidad - 1)}>
                          <Ionicons name="remove-circle-outline" size={26} color="red" />
                        </Pressable>

                        <Text style={CarritoStyles.productQuantity}>{item.cantidad}</Text>

                        <Pressable onPress={() => handleUpdateQuantity(item.nombre_producto, item.cantidad + 1)}>
                          <Ionicons name="add-circle-outline" size={26} color="green" />
                        </Pressable>
                      </View>
                    </View>
                  </View>

                  {/* Botón de eliminar */}
                  <Pressable onPress={() => removeFromCart(item.nombre_producto)} style={CarritoStyles.deleteButton}>
                    <Ionicons name="trash-outline" size={24} color="white" />
                    <Text style={CarritoStyles.deleteButtonText}>Eliminar</Text>
                  </Pressable>
                </View>
              )}
            />

            {/* Sección de Totales */}
            <View style={CarritoStyles.totalSection}>
              <View style={CarritoStyles.totalRow}>
                <Text style={CarritoStyles.totalText}>Selected Items</Text>
                <Text style={CarritoStyles.totalText}>💲 {getTotal().total.toFixed(2)}</Text>
              </View>
              <View style={CarritoStyles.totalRow}>
                <Text style={CarritoStyles.totalText}>Shipping Fee</Text>
                <Text style={CarritoStyles.totalText}>💲 {getTotal().shipping.toFixed(2)}</Text>
              </View>
              <View style={CarritoStyles.totalRow}>
                <Text style={CarritoStyles.subtotalText}>Subtotal</Text>
                <Text style={CarritoStyles.subtotalText}>💲 {getTotal().subtotal.toFixed(2)}</Text>
              </View>

              {/* Botón de proceder al pago */}
              <Pressable
                style={[CarritoStyles.checkoutButton, loading && CarritoStyles.disabledButton]}
                onPress={() => Alert.alert("Funcionalidad en desarrollo", "El pago estará disponible pronto.")}
                disabled={loading}
              >
                <Text style={CarritoStyles.checkoutButtonText}>Proceder al pago</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CarritoScreen;
