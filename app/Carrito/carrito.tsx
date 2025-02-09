import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useCart } from "../context/CartContext";
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CarritoScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <View style={CarritoStyles.container}>
      {/* Encabezado */}
      <View style={CarritoStyles.header}>
      <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={CarritoStyles.headerTitle}>Carrito de Compras</Text>
        <Ionicons name="cart" size={28} color="#333" />
      </View>

      {/* Si el carrito está vacío */}
      {cart.length === 0 ? (
        <Text style={CarritoStyles.emptyCartText}>🛒 Tu carrito está vacío</Text>
      ) : (
        <>
          {/* Lista de productos */}
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={CarritoStyles.productContainer}>
                <Text style={CarritoStyles.productName}>{item.nombre_producto}</Text>
                <Text style={CarritoStyles.productPrice}>
                  💲 {item.precio ? parseFloat(item.precio).toFixed(2) : "N/A"}
                </Text>

                {/* Controles de cantidad */}
                <View style={CarritoStyles.quantityContainer}>
                  <Pressable onPress={() => updateQuantity(item.nombre_producto, item.cantidad - 1)}>
                    <Ionicons name="remove-circle-outline" size={26} color="red" />
                  </Pressable>

                  <Text style={CarritoStyles.productQuantity}>{item.cantidad}</Text>

                  <Pressable onPress={() => updateQuantity(item.nombre_producto, item.cantidad + 1)}>
                    <Ionicons name="add-circle-outline" size={26} color="green" />
                  </Pressable>
                </View>

                {/* Botón de eliminar */}
                <Pressable onPress={() => removeFromCart(item.nombre_producto)} style={CarritoStyles.deleteButton}>
                  <Ionicons name="trash-outline" size={24} color="white" />
                  <Text style={CarritoStyles.deleteButtonText}>Eliminar</Text>
                </Pressable>
              </View>
            )}
          />

          {/* Botón de proceder al pago */}
          <Pressable style={CarritoStyles.checkoutButton} onPress={() => alert("Ir a pagar")}>
            <Text style={CarritoStyles.checkoutButtonText}>Proceder al pago</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default CarritoScreen;
