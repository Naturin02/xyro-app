import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  Image,
  ActivityIndicator,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  Animated,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useCart } from "@/context/CartContext";
import FooterNavigation from "../Componentes/FooterNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../context/api";
import ProductStyles from "../Styles/CategoryStyle"; // Asegúrate de importar los estilos

const { width, height } = Dimensions.get("window");

const ProductGrid = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [scrollY] = useState(new Animated.Value(0));

  const router = useRouter();
  const { tienda } = useLocalSearchParams();
  const { addToCart, cart } = useCart();

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

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

  const loadProducts = async (pageNumber, reset = false) => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const response = await api.get(
        `/productos?page=${pageNumber}&limit=10&tienda=${encodeURIComponent(
          tienda
        )}&category=${encodeURIComponent(category)}&search=${encodeURIComponent(
          searchQuery
        )}`
      );
      const data = response.data;

      if (response.status === 200) {
        setProducts((prevProducts) =>
          reset ? data.productos : [...prevProducts, ...data.productos]
        );
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

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setModalVisible(true); // Abre el modal cuando el producto es tocado
  };

  const addProductToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity);
      setModalVisible(false); // Cierra el modal después de agregar al carrito
    }
  };

  const renderItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    
    return (
      <View style={[ProductStyles.productContainer, { marginTop: isEven ? 0 : 15 }]}>
        <TouchableOpacity
          style={ProductStyles.productCard}
          onPress={() => openModal(item)} // Abre el modal al tocar el producto
          activeOpacity={0.7}
        >
          <View style={ProductStyles.imageContainer}>
            <Image
              source={{ uri: item.imagen_url }}
              style={ProductStyles.productImage}
              resizeMode="cover"
            />
            <View style={ProductStyles.statusBadge}>
              <View
                style={[ProductStyles.statusIndicator, {
                  backgroundColor: item.estado === "disponible" ? "#4CAF50" : "#F44336",
                }]}
              />
              <Text style={ProductStyles.statusText}>
                {item.estado === "disponible" ? "Disponible" : "Agotado"}
              </Text>
            </View>
          </View>
          <View style={ProductStyles.infoContainer}>
            <Text style={ProductStyles.productName} numberOfLines={2}>
              {item.nombre_producto}
            </Text>
            <Text style={ProductStyles.productPrice}>
              ${parseFloat(item.precio).toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeader = () => (
    <Animated.View style={[ProductStyles.headerBackground, { opacity: headerOpacity }]} />
  );

  return (
    <SafeAreaView style={ProductStyles.container} edges={['right', 'left']}>
      <StatusBar barStyle="light-content" />
      
      {renderHeader()}
      
      <View style={ProductStyles.headerContainer}>
        <Pressable
          onPress={() => router.back()}
          style={ProductStyles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </Pressable>
        
        <View style={ProductStyles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={ProductStyles.searchIcon} />
          <TextInput
            style={ProductStyles.searchInput}
            placeholder="Buscar productos..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => loadProducts(1, true)}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </Pressable>
          )}
        </View>
        
        <Pressable 
          style={ProductStyles.cartButton}
          onPress={() => router.push("/Carrito/carrito")}
        >
          <Ionicons name="cart-outline" size={24} color="#333" />
          {cart.length > 0 && (
            <View style={ProductStyles.cartBadge}>
              <Text style={ProductStyles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </Pressable>
      </View>

      <View style={ProductStyles.categoryHeader}>
        <Text style={ProductStyles.categoryTitle}>
          {category || "Todos los productos"}
        </Text>
        <Text style={ProductStyles.resultsCount}>
          {products.length} producto{products.length !== 1 ? 's' : ''}
        </Text>
      </View>

      <KeyboardAvoidingView
        style={ProductStyles.content}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        {products.length === 0 && !loading ? (
          <View style={ProductStyles.emptyStateContainer}>
            <Ionicons name="basket-outline" size={80} color="#DDDDDD" />
            <Text style={ProductStyles.emptyStateText}>
              No hay productos disponibles
            </Text>
            <Text style={ProductStyles.emptyStateSubtext}>
              Intenta con otra búsqueda o categoría
            </Text>
          </View>
        ) : (
          <Animated.FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
            numColumns={2}
            contentContainerStyle={ProductStyles.productList}
            onEndReached={() => loadProducts(page)}
            onEndReachedThreshold={0.2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              loading ? (
                <View style={ProductStyles.loaderContainer}>
                  <ActivityIndicator size="small" color="#4CAF50" />
                  <Text style={ProductStyles.loadingText}>Cargando más productos...</Text>
                </View>
              ) : null
            }
          />
        )}
      </KeyboardAvoidingView>

      {/* Modal de producto */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)} // Cerrar modal al presionar fuera
      >
        <BlurView intensity={90} style={ProductStyles.modalBackground}>
          <View style={ProductStyles.modalContainer}>
            <View style={ProductStyles.modalContent}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={ProductStyles.closeButton}
              >
                <Ionicons name="close-outline" size={28} color="#666" />
              </Pressable>

              <Image
                source={{ uri: selectedProduct?.imagen_url }}
                style={ProductStyles.modalProductImage}
                resizeMode="cover"
              />
              
              <View style={ProductStyles.modalProductDetails}>
                <Text style={ProductStyles.modalProductName}>
                  {selectedProduct?.nombre_producto}
                </Text>
                
                <Text style={ProductStyles.modalProductPrice}>
                  ${parseFloat(selectedProduct?.precio).toFixed(2)}
                </Text>

                <View style={ProductStyles.quantityContainer}>
                  <Text style={ProductStyles.quantityLabel}>Cantidad:</Text>
                  <View style={ProductStyles.quantityControls}>
                    <TouchableOpacity
                      onPress={() => setQuantity(Math.max(1, quantity - 1))}
                      style={ProductStyles.quantityButton}
                    >
                      <Ionicons name="remove" size={20} color="#fff" />
                    </TouchableOpacity>

                    <Text style={ProductStyles.quantityText}>{quantity}</Text>

                    <TouchableOpacity
                      onPress={() => setQuantity(quantity + 1)}
                      style={[ProductStyles.quantityButton, ProductStyles.incrementButton]}
                    >
                      <Ionicons name="add" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={[ProductStyles.addToCartButton, selectedProduct?.estado !== "disponible" && ProductStyles.disabledButton]}
                  onPress={addProductToCart}
                  disabled={selectedProduct?.estado !== "disponible"}
                >
                  <Ionicons name="cart" size={20} color="#fff" style={ProductStyles.buttonIcon} />
                  <Text style={ProductStyles.addToCartButtonText}>Añadir al carrito</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>

      <FooterNavigation />
    </SafeAreaView>
  );
};

export default ProductGrid;
