import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { useCart } from "@/context/CartContext";
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CarritoScreen = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Función para actualizar la cantidad del producto
  const handleUpdateQuantity = (nombre_producto, cantidad, stock) => {
    if (cantidad < 1) {
      Alert.alert(
        "Cantidad mínima",
        "No puedes reducir la cantidad por debajo de 1. ¿Deseas eliminar el producto?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Eliminar", onPress: () => removeFromCart(nombre_producto) },
        ]
      );
    } else if (cantidad > stock) {
      Alert.alert("Stock insuficiente", `Solo hay ${stock} unidades disponibles.`);
    } else {
      updateQuantity(nombre_producto, cantidad);
    }
  };

  // Generar opciones de stock en incrementos de 10
  const generateStockOptions = (stock) => {
    const options = [];
    for (let i = 10; i <= stock; i += 10) {
      options.push(i);
    }
    return options;
  };

  // Calcular el total y el envío
  const getTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    const shipping = 30; // Costo de envío fijo
    return { total, shipping, subtotal: total + shipping };
  };

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
                      <Pressable
                        onPress={() => handleUpdateQuantity(item.nombre_producto, item.cantidad - 5, item.stock)}
                      >
                        <Ionicons name="remove-circle-outline" size={26} color="red" />
                      </Pressable>

                      {/* Selector de stock en incrementos de 10 */}
                      <Pressable
                        onPress={() =>
                          Alert.alert(
                            "Selecciona la cantidad",
                            "Escoge una cantidad disponible",
                            generateStockOptions(item.stock).map((qty) => ({
                              text: `${qty} unidades`,
                              onPress: () => handleUpdateQuantity(item.nombre_producto, qty, item.stock),
                            }))
                          )
                        }
                        style={CarritoStyles.stockSelectorButton}
                      >
                        <Text style={CarritoStyles.productQuantity}>{item.cantidad} 🏷️</Text>
                      </Pressable>

                      <Pressable
                        onPress={() => handleUpdateQuantity(item.nombre_producto, item.cantidad + 10, item.stock)}
                      >
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
  );
};

export default CarritoScreen;
