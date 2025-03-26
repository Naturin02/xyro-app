import React, { useState, useEffect } from "react";
import { 
  View, Text, FlatList, Pressable, ActivityIndicator, 
  KeyboardAvoidingView, Platform, Modal, Image, SafeAreaView 
} from "react-native";
import { useRouter } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import { ProductStyles } from "../Styles/CatalogoStyle"; // Estilos de productos
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation"; 
import { Ionicons } from "@expo/vector-icons"; 
import { backend } from "@/context/endpoints";

const MarcasScreen = () => {
  const router = useRouter();
  const [tiendas, setTiendas] = useState([]); 
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
        setTiendas(prevTiendas => [...prevTiendas, ...tiendaData.tiendas]); // Acumular tiendas
        setHasMore(tiendaData.hasMore); 
        setPage(prevPage => prevPage + 1);
      }

      if (productoResponse.ok) {
        setProductos(prevProductos => [...prevProductos, ...productoData.productos]); // Acumular productos
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

  // Filtrado de tiendas y productos según búsqueda
  const filteredTiendas = tiendas.filter((tienda) =>
    tienda.nombre_tienda.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProductos = productos.filter((producto) =>
    producto.nombre_producto.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <View style={{ flex: 1 }}>
      {/* Header fuera del SafeAreaView para mostrar la información del notch */}
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

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={MarcasStyles.container}>
            {/* Buscador y Filtros */}
            <CategoryNavigation onCategorySelect={setSelectedCategory} onSearchQueryChange={setSearchQuery} />

            <View style={MarcasStyles.spacer}></View>

            {/* Mostrar cantidad de tiendas disponibles solo si NO se selecciona categoría */}
            {!selectedCategory && (
              <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
                🏬 {filteredTiendas.length} Tiendas disponibles
              </Text>
            )}

            {/* Mostrar tiendas o productos */}
            {selectedCategory ? (
              filteredProductos.length === 0 && !loading ? (
                <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16, color: "red" }}>❌ No hay productos disponibles</Text>
              ) : (
                <FlatList
                  data={filteredProductos}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderProducto}
                  ListFooterComponent={renderFooter}
                  onEndReached={loadTiendasYProductos}
                  onEndReachedThreshold={0.2}
                  contentContainerStyle={ProductStyles.productList}
                />
              )
            ) : (
              filteredTiendas.length === 0 && !loading ? (
                <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16, color: "red" }}>❌ No hay tiendas disponibles</Text>
              ) : (
                <FlatList
                  data={filteredTiendas}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderTienda}
                  ListFooterComponent={renderFooter}
                  onEndReached={loadTiendasYProductos}
                  onEndReachedThreshold={0.2}
                  contentContainerStyle={MarcasStyles.flatListContainer}
                />
              )
            )}

            <FooterNavigation />

            {/* Modal de Producto */}
            <Modal visible={modalVisible} transparent={true} animationType="fade">
              <View style={ProductStyles.modalContainer}>
                <View style={ProductStyles.modalContent}>
                  <Pressable onPress={() => setModalVisible(false)} style={ProductStyles.closeButton}>
                    <Ionicons name="close-circle" size={30} color="gray" />
                  </Pressable>
                  <Image source={{ uri: selectedProduct?.imagen_url }} style={ProductStyles.modalProductImage} />
                  <Text style={ProductStyles.modalProductName}>{selectedProduct?.nombre_producto}</Text>
                  <Text style={ProductStyles.modalProductPrice}>💲 {parseFloat(selectedProduct?.precio).toFixed(2)}</Text>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default MarcasScreen;
