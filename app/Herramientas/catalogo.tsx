import React, { useState, useEffect } from "react";
import { 
  View, Text, FlatList, TouchableOpacity, ActivityIndicator, Dimensions, Platform, KeyboardAvoidingView
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/CatalogoStyle"; 
import { useCart } from "@/context/CartContext";
import FooterNavigation from "../Componentes/FooterNavigation";
import { backend } from "@/context/endpoints"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

const { width } = Dimensions.get("window");

const ProductGrid = ({ category }: { category: string }) => {  
  const [products, setProducts] = useState<any[]>([]); 
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
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

  const loadProducts = async (pageNumber: number, reset = false) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`${backend}/api/productos?page=${pageNumber}&limit=10&tienda=${encodeURIComponent(tienda as string)}&category=${encodeURIComponent(category)}`);
      const data = await response.json();

      if (response.ok) {
        setProducts((prevProducts) => (reset ? data.productos : [...prevProducts, ...data.productos]));
        setHasMore(data.hasMore);
        setPage(pageNumber + 1);
      } else {
        console.error("❌ Error en la respuesta de la API:", data.error);
      }
    } catch (error) {
      console.error("❌ Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProduct = (item: any) => {
    setSelectedProduct(item);
  };

  const incrementQuantity = () => setQuantity(quantity + 10);
  const decrementQuantity = () => quantity > 5 && setQuantity(quantity - 5);

  const addToCartHandler = () => {
    if (selectedProduct) {
      addToCart({ ...selectedProduct, quantity });
      setSelectedProduct(null);  // Close the modal after adding to cart
      setQuantity(1);  // Reset the quantity
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={ProductStyles.productContainer}>
      <TouchableOpacity style={ProductStyles.productCard} onPress={() => handleSelectProduct(item)}>
        <Image source={{ uri: item.imagen_url || `${backend}/images/default.png` }} style={ProductStyles.productImage} />
        <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
        <Text style={ProductStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
        </KeyboardAvoidingView>
      </SafeAreaView>

      <FooterNavigation />
    </View>
  );
};

export default ProductGrid;
