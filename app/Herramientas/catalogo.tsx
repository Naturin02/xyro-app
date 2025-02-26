import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable, TextInput, Image, ActivityIndicator, Dimensions } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";
import { ProductStyles } from "../Styles/CatalogoStyle"; // Ruta de tus estilos
import { useCart } from "@/context/CartContext";
import FooterNavigation from "../Componentes/FooterNavigation";
import { backend } from "@/context/endpoints"; // URL del backend

const { width, height } = Dimensions.get("window"); // Obtener las dimensiones de la pantalla

const ProductGrid = ({ category }) => {  // Recibimos la categoría como prop
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Para manejar la búsqueda
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
  }, [tienda, category]);  // Ahora también depende de la categoría seleccionada

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        loadProducts(1, true); // Hacer la búsqueda al terminar de escribir
      }
    }, 500); // Espera 500ms después de dejar de escribir

    return () => clearTimeout(timer); // Limpiar el timeout cuando el componente se desmonta o el query cambia
  }, [searchQuery]);

  const loadProducts = async (pageNumber, reset = false) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`${backend}/api/productos?page=${pageNumber}&limit=10&tienda=${encodeURIComponent(tienda)}&category=${encodeURIComponent(category)}&search=${encodeURIComponent(searchQuery)}`);
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

  const renderItem = ({ item }) => (
    <View style={ProductStyles.productContainer}>
      <TouchableOpacity style={ProductStyles.productCard} onPress={() => openModal(item)}>
        <Image source={{ uri: item.imagen_url }} style={ProductStyles.productImage} />
        <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
        <Text style={ProductStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={ProductStyles.container}>
      {/* Barra de búsqueda y carrito */}
      <View style={ProductStyles.header}>
        <Pressable onPress={() => router.back()} style={ProductStyles.exitButton}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </Pressable>
        <TextInput
          style={ProductStyles.searchInput}
          placeholder="Buscar productos..."
          value={searchQuery}
          onChangeText={setSearchQuery}  // Actualiza el estado de búsqueda
          onSubmitEditing={() => loadProducts(1, true)}  // Realiza la búsqueda cuando presionan Enter
        />
        <Pressable onPress={() => router.push("/Carrito/carrito")}>
          <Ionicons name="cart-outline" size={28} color="black" />
          {cart.length > 0 && (
            <View style={ProductStyles.cartBadge}>
              <Text style={ProductStyles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </Pressable>
      </View>

      {/* Título de la sección Explore */}
      <Text style={ProductStyles.sectionTitle}>Explore</Text>

      {/* Lista de productos */}
      {products.length === 0 && !loading ? (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16, color: "red" }}>
          ❌ No hay productos disponibles
        </Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          numColumns={width > 600 ? 3 : 2} // Ajusta el número de columnas según el ancho de la pantalla
          contentContainerStyle={ProductStyles.productList}
          onEndReached={() => loadProducts(page)}
          onEndReachedThreshold={0.2}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
      )}

      {/* Modal de vista detallada del producto */}
      <Modal visible={modalVisible} transparent={false} animationType="slide">
        <View style={ProductStyles.modalContainer}>
          <View style={ProductStyles.modalContent}>
            {/* Botón de cerrar modal */}
            <Pressable onPress={() => setModalVisible(false)} style={ProductStyles.closeButton}>
              <Ionicons name="close-circle" size={30} color="gray" />
            </Pressable>

            {/* Imagen del producto */}
            <Image source={{ uri: selectedProduct?.imagen_url }} style={ProductStyles.modalProductImage} />
            <Text style={ProductStyles.modalProductName}>{selectedProduct?.nombre_producto}</Text>
            <Text style={ProductStyles.modalProductPrice}>💲 {parseFloat(selectedProduct?.precio).toFixed(2)}</Text>

            {/* Calificación del producto */}
            <View style={ProductStyles.ratingContainer}>
              <Text style={ProductStyles.rating}>⭐ {selectedProduct?.rating || 'No rating'}</Text>
            </View>

            {/* Opciones de color */}
            {selectedProduct?.colores && (
              <Text style={ProductStyles.colorOption}>Color options: {selectedProduct.colores.join(", ")}</Text>
            )}

            {/* Contenedor de cantidad */}
            <View style={ProductStyles.quantityContainer}>
              <Pressable onPress={() => setQuantity(Math.max(1, quantity - 1))} style={ProductStyles.quantityButton}>
                <Ionicons name="remove-circle-outline" size={30} color="red" />
              </Pressable>

              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{quantity}</Text>

              <Pressable
                onPress={() => {
                  if (quantity < selectedProduct?.stock) {
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

            {/* Botón para agregar al carrito */}
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
