import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, TextInput, Image, ActivityIndicator, Dimensions, Platform, KeyboardAvoidingView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/CatalogoStyle"; // Ruta de tus estilos
import { useCart } from "@/context/CartContext";
import FooterNavigation from "../Componentes/FooterNavigation";
import { backend } from "@/context/endpoints"; // URL del backend
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window"); // Obtener las dimensiones de la pantalla

const ProductGrid = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const router = useRouter();
  const { tienda } = useLocalSearchParams();
  const { addToCart, cart } = useCart();

  useEffect(() => {
    if (!tienda) return;
    setProducts([]);
    setPage(1);
    setHasMore(true);
    loadProducts(1, true);
  }, [tienda, category]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        loadProducts(1, true);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loadProducts = async (pageNumber: number, reset = false) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`${backend}/api/productos?page=${pageNumber}&limit=10&tienda=${encodeURIComponent(tienda as string)}&category=${encodeURIComponent(category)}&search=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (response.ok) {
        setProducts((prevProducts) => (reset ? data.productos : [...prevProducts, ...data.productos]));
        setHasMore(data.hasMore);
        setPage(pageNumber + 1);
      } else {
        console.error("❌ Error al obtener productos:", data.error);
      }
    } catch (error) {
      console.error("❌ Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={ProductStyles.productContainer}>
      <TouchableOpacity style={ProductStyles.productCard} onPress={() => setSelectedProduct(item)}>
        <Image source={{ uri: item.imagen_url || `${backend}/images/default.png` }} style={ProductStyles.productImage} />
        <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
        <Text style={ProductStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={ProductStyles.headerContainer}>
        <View style={ProductStyles.header}>
          <Pressable onPress={() => router.back()} style={ProductStyles.exitButton}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </Pressable>
          <TextInput
            style={ProductStyles.searchInput}
            placeholder="Buscar productos..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => loadProducts(1, true)}
          />
          <Pressable onPress={() => router.push("/Carrito/carrito")}> 
            <Ionicons name="cart-outline" size={28} color="white" />
            {cart.length > 0 && (
              <View style={ProductStyles.cartBadge}>
                <Text style={ProductStyles.cartBadgeText}>{cart.length}</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={ProductStyles.container}>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
              numColumns={width > 600 ? 3 : 2}
              contentContainerStyle={ProductStyles.productList}
              onEndReached={() => loadProducts(page)}
              onEndReachedThreshold={0.2}
              ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <FooterNavigation />
    </View>
  );
};

export default ProductGrid;
