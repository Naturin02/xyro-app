import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/CatalogoStyle";
import { useCart } from "@/context/CartContext";
import FooterNavigation from "../Componentes/FooterNavigation";
import { backend } from "@/context/endpoints"; // URL del backend

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const router = useRouter();
  const { tienda } = useLocalSearchParams();
  const { addToCart, cart } = useCart();

  useEffect(() => {
    if (!tienda) return;
    setProducts([]); // Reiniciar productos al cambiar de tienda
    setPage(1);
    setHasMore(true);
    loadProducts(1, true);
  }, [tienda]);

  const loadProducts = async (pageNumber, reset = false) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      console.log(`🔍 Cargando productos de la tienda: ${tienda} - Página: ${pageNumber}`);

      const response = await fetch(`${backend}/api/productos?page=${pageNumber}&limit=10&tienda=${encodeURIComponent(tienda)}`);
      const data = await response.json();

      console.log("📦 Productos recibidos:", data);

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

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setModalVisible(true);
  };

  const addProductToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity);
      setModalVisible(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={ProductStyles.productContainer}>
        <TouchableOpacity style={ProductStyles.addButton} onPress={() => openModal(item)}>
          <Text style={ProductStyles.addButtonText}>Añadir</Text>
        </TouchableOpacity>
        <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
        <Text style={ProductStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
        <Text style={ProductStyles.productStock}>📦 Stock: {item.stock}</Text>
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
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        <Text style={ProductStyles.headerTitle}>{tienda}</Text>
        <Pressable onPress={() => router.push("/Carrito/carrito")}>
          <Ionicons name="cart-outline" size={28} color="black" />
          {cart.length > 0 && (
            <View style={ProductStyles.cartBadge}>
              <Text style={ProductStyles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </Pressable>
      </View>

      {products.length === 0 && !loading ? (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16, color: "red" }}>
          ❌ No hay productos disponibles en esta tienda
        </Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={ProductStyles.productList}
          onEndReached={() => loadProducts(page)}
          onEndReachedThreshold={0.2}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
      )}

      {/* Modal para seleccionar cantidad */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={ProductStyles.modalContainer}>
          <View style={ProductStyles.modalContent}>
            
            {/* Botón de cerrar modal */}
            <Pressable onPress={() => setModalVisible(false)} style={ProductStyles.closeButton}>
              <Ionicons name="close-circle" size={30} color="gray" />
            </Pressable>

            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cantidad de los productos</Text>

            <View style={ProductStyles.quantityContainer}>
              <Pressable onPress={() => setQuantity(Math.max(1, quantity - 1))} style={ProductStyles.quantityButton}>
                <Ionicons name="remove-circle-outline" size={30} color="red" />
              </Pressable>

              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{quantity}</Text>

              <Pressable
                onPress={() => {
                  if (quantity < selectedProduct.stock) {
                    setQuantity(quantity + 1);
                  } else {
                    setAlertVisible(true);
                  }
                }}
                style={ProductStyles.quantityButton}
              >
                <Ionicons name="add-circle-outline" size={30} color="green" />
              </Pressable>
            </View>

            <Pressable style={ProductStyles.addToCartButton} onPress={addProductToCart}>
              <Text style={ProductStyles.addToCartButtonText}>Añadir producto</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal de alerta */}
      <Modal visible={alertVisible} transparent={true} animationType="fade">
        <View style={ProductStyles.modalContainer}>
          <View style={ProductStyles.alertBox}>
            <Text style={ProductStyles.alertTitle}>❌ Stock insuficiente</Text>
            <Text style={ProductStyles.alertMessage}>No puedes agregar más productos, ya alcanzaste el stock disponible.</Text>
            <Pressable style={ProductStyles.alertButton} onPress={() => setAlertVisible(false)}>
              <Text style={ProductStyles.alertButtonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <FooterNavigation />
    </View>
  );
};

export default ProductGrid;
