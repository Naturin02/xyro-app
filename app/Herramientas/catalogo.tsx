import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Pressable } from "react-native";
import { MarcasStyles } from "../Styles/marcasStyle";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/CatalogoStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import { API_URL } from "@/backend/utils/config";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { tienda } = useLocalSearchParams();

  useEffect(() => {
    if (!tienda) return;

    const fetchProducts = async () => {
      try {
        console.log(`🔍 Cargando productos de la tienda: ${tienda}`);

        const response = await fetch(`${API_URL}/api/productos?tienda=${encodeURIComponent(tienda)}`);
        const data = await response.json();

        console.log("📦 Productos recibidos:", data);

        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          console.warn("⚠️ No se encontraron productos para esta tienda.");
        }
      } catch (error) {
        console.error("❌ Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, [tienda]);

  const renderItem = ({ item }) => {
    console.log("📌 Renderizando producto:", item);

    const precio = item.precio ? parseFloat(item.precio).toFixed(2) : "N/A";
    const stock = item.stock !== undefined ? item.stock : "Sin stock";

    return (
      <View style={ProductStyles.productContainer}>
        <TouchableOpacity style={ProductStyles.addButton}>
          <Text style={ProductStyles.addButtonText}>Añadir</Text>
        </TouchableOpacity>
        <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
        <Text style={ProductStyles.productPrice}>💲 {precio}</Text>
        <Text style={ProductStyles.productStock}>📦 Stock: {stock}</Text>
        <TouchableOpacity style={ProductStyles.commentButton}>
          <Text>Comentarios</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={ProductStyles.container}>
      <View style={ProductStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => router.push("/Carrito/carrito")}>
                  <Text style={MarcasStyles.cart}>🛒</Text>
                </Pressable>
              </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={ProductStyles.productList}
      />

      <FooterNavigation />
    </View>
  );
};

export default ProductGrid;
