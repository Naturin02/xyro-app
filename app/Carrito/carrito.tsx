import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { CarritoStyles } from "../Styles/CarritoStyle";
import { Ionicons } from "@expo/vector-icons";

const CarritoScreen = () => {
  const router = useRouter();
  const [codigoPostal, setCodigoPostal] = useState("");
  const [cart, setCart] = useState<{ nombre_producto: string; precio: number; cantidad: number }[]>([]);
  const costoEnvio = 100;

  const params = useLocalSearchParams();

  useEffect(() => {
    if (params.producto) {
      const nuevoProducto = JSON.parse(params.producto);
      setCart((prevCart) => {
        const existe = prevCart.find((item) => item.nombre_producto === nuevoProducto.nombre_producto);
        if (existe) {
          return prevCart.map((item) =>
            item.nombre_producto === nuevoProducto.nombre_producto
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        }
        return [...prevCart, { ...nuevoProducto, cantidad: 1 }];
      });
    }
  }, [params]);

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0) + costoEnvio;
  };

  const aumentarCantidad = (nombre_producto: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.nombre_producto === nombre_producto ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (nombre_producto: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.nombre_producto === nombre_producto && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const renderItem = ({ item }: { item: { nombre_producto: string; precio: number; cantidad: number } }) => (
    <View style={CarritoStyles.productContainer}>
      <Text style={CarritoStyles.productName}>{item.nombre_producto}</Text>
      <Text style={CarritoStyles.productPrice}>
        💲 {item.precio.toFixed(2)} x {item.cantidad} = 💰 {(item.precio * item.cantidad).toFixed(2)}
      </Text>
      <View style={CarritoStyles.quantityContainer}>
        <TouchableOpacity onPress={() => disminuirCantidad(item.nombre_producto)}>
          <Ionicons name="remove-circle-outline" size={24} color="red" />
        </TouchableOpacity>
        <Text style={CarritoStyles.productQuantity}>{item.cantidad}</Text>
        <TouchableOpacity onPress={() => aumentarCantidad(item.nombre_producto)}>
          <Ionicons name="add-circle-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={CarritoStyles.container}>
      <View style={CarritoStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </Pressable>
        <Text style={CarritoStyles.headerTitle}>Carrito</Text>
        <Pressable onPress={() => alert("Carrito")}>
          <Ionicons name="cart-outline" size={28} color="#333" />
        </Pressable>
      </View>

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

      {cart.length === 0 ? (
        <Text style={CarritoStyles.emptyCartText}>No hay productos en el carrito</Text>
      ) : (
        <>
          <FlatList data={cart} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
          <Text style={CarritoStyles.total}>Total: 💰 {calcularTotal().toFixed(2)}</Text>
          <Pressable style={CarritoStyles.checkoutButton} onPress={() => router.push("/Herramientas/pago")}>
            <Text style={CarritoStyles.checkoutButtonText}>Proceder al pago</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default CarritoScreen;
