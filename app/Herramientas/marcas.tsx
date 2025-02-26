import React, { useState, useEffect } from "react";
import { 
  View, Text, FlatList, Pressable, ActivityIndicator, 
  KeyboardAvoidingView, Platform, Modal, Image, Alert 
} from "react-native";
import { useRouter } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import { ProductStyles } from "../Styles/CatalogoStyle"; // Usa los estilos de Catalogo
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation"; 
import { Ionicons } from "@expo/vector-icons"; 
import { backend } from "@/context/endpoints";
import { useCart } from "@/context/CartContext"; // Agregamos el carrito

const MarcasScreen = () => {
  const router = useRouter();
  const [tiendas, setTiendas] = useState([]); 
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Carrito
  const { addToCart } = useCart();

  // Función para cargar tiendas y productos con paginación
  const loadTiendasYProductos = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const tiendaResponse = await fetch(`${backend}/api/tiendas?page=${page}&limit=20`);
      const productoResponse = await fetch(`${backend}/api/productos?page=${page}&limit=20&category=${encodeURIComponent(selectedCategory)}&search=${encodeURIComponent(searchQuery)}`);

      const tiendaData = await tiendaResponse.json();
      const productoData = await productoResponse.json();

      if (tiendaResponse.ok) {
        setTiendas(prevTiendas => [...prevTiendas, ...tiendaData.tiendas]);
        setHasMore(tiendaData.hasMore); 
        setPage(prevPage => prevPage + 1);
      }

      if (productoResponse.ok) {
        setProductos(prevProductos => [...prevProductos, ...productoData.productos]);
      }

    } catch (error) {
      console.error("❌ Error al cargar tiendas y productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTiendas([]);
    setProductos([]);
    setPage(1);
    loadTiendasYProductos();
  }, [selectedCategory, searchQuery]);

  // Abrir modal de producto
  const openModal = (producto) => {
    setSelectedProduct(producto);
    setQuantity(1);
    setModalVisible(true);
  };

  // Función para agregar al carrito con validación de stock
  const addProductToCart = () => {
    if (selectedProduct) {
      if (quantity > selectedProduct.stock) {
        Alert.alert("Stock insuficiente", "No puedes agregar más productos de los que hay en stock.");
      } else {
        addToCart(selectedProduct, quantity);
        setModalVisible(false);
      }
    }
  };

  const renderFooter = () => (!loading ? null : <ActivityIndicator size="large" color="#0000ff" />);

  const renderTienda = ({ item }) => (
    <Pressable style={MarcasStyles.tiendaContainer} onPress={() => router.push({ pathname: "../Herramientas/catalogo", params: { tienda: item.nombre_tienda } })}>
      <Text style={MarcasStyles.tiendaNombre}>🏬 {item.nombre_tienda}</Text>
      <Text style={MarcasStyles.tiendaHorarios}>🕒 {item.horarios}</Text>
      <Text style={MarcasStyles.tiendaDireccion}>📍 {item.direccion}</Text>
      <Text style={MarcasStyles.tiendaDescripcion}>{item.descripcion}</Text>
    </Pressable>
  );

  const renderProducto = ({ item }) => (
    <Pressable style={ProductStyles.productContainer} onPress={() => openModal(item)}>
      <Image source={{ uri: item.imagen_url }} style={ProductStyles.productImage} />
      <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
      <Text style={ProductStyles.productPrice}>💲 {parseFloat(item.precio).toFixed(2)}</Text>
    </Pressable>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={MarcasStyles.container}>
        
        {/* NAVBAR CON LOGO, CARRITO Y FAVORITOS */}
        <View style={MarcasStyles.header}>
          <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>
          <View style={MarcasStyles.iconsContainer}>
            <Pressable onPress={() => router.push("/Carrito/carrito")} style={MarcasStyles.iconButton}>
              <Ionicons name="cart-outline" size={28} color="#fff" />
            </Pressable>
            <Pressable onPress={() => router.push("/Herramientas/favoritos")} style={MarcasStyles.iconButton}>
              <Ionicons name="heart-outline" size={28} color="#fff" />
            </Pressable>
          </View>
        </View>

        <CategoryNavigation onCategorySelect={setSelectedCategory} onSearchQueryChange={setSearchQuery} />

        {!selectedCategory && (
          <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
            🏬 {tiendas.length} Tiendas disponibles
          </Text>
        )}

        {selectedCategory ? (
          <FlatList
            data={productos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderProducto}
            ListFooterComponent={renderFooter}
            onEndReached={loadTiendasYProductos}
            onEndReachedThreshold={0.2}
            contentContainerStyle={ProductStyles.productList}
          />
        ) : (
          <FlatList
            data={tiendas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderTienda}
            ListFooterComponent={renderFooter}
            onEndReached={loadTiendasYProductos}
            onEndReachedThreshold={0.2}
            contentContainerStyle={MarcasStyles.flatListContainer}
          />
        )}

        <FooterNavigation />

        {/* MODAL DE PRODUCTO CON VALIDACIÓN DE STOCK */}
        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View style={ProductStyles.modalContainer}>
            <View style={ProductStyles.modalContent}>
              <Pressable onPress={() => setModalVisible(false)} style={ProductStyles.closeButton}>
                <Ionicons name="close-circle" size={30} color="gray" />
              </Pressable>
              <Image source={{ uri: selectedProduct?.imagen_url }} style={ProductStyles.modalProductImage} />
              <Text style={ProductStyles.modalProductName}>{selectedProduct?.nombre_producto}</Text>
              <Text style={ProductStyles.modalProductPrice}>💲 {parseFloat(selectedProduct?.precio).toFixed(2)}</Text>

              {/* CONTROLES DE CANTIDAD */}
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
                      Alert.alert("Stock agotado", "Has alcanzado el límite de stock para este producto.");
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default MarcasScreen;
