import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Pressable, 
  ActivityIndicator, 
  KeyboardAvoidingView, 
  Platform, 
  Modal, 
  Image, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';

import { useRouter } from 'expo-router';
import { MarcasStyles } from '../Styles/marcasStyle'; // Importamos los estilos
import FooterNavigation from '../Componentes/FooterNavigation';
import CategoryNavigation from '../Componentes/CategoryNavigation'; 
import { Ionicons } from '@expo/vector-icons';
import api from '../../context/api'; // Importamos la instancia de axios

const { width } = Dimensions.get("window");
const productCardWidth = (width / 2) - 20; // Para 2 productos por fila

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

  const loadData = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      if (selectedCategory) {
        if (reset) {
          setProductos([]); // Resetear productos
          setPage(1);
        }
        
        const productoResponse = await api.get(`/productos?page=${reset ? 1 : page}&limit=20&category=${encodeURIComponent(selectedCategory)}&search=${encodeURIComponent(searchQuery)}`);
        const productoData = productoResponse.data;

        if (productoResponse.status === 200) {
          setProductos(prev => reset ? productoData.productos : [...prev, ...productoData.productos]);
          setHasMore(productoData.hasMore);
          setPage(prevPage => prevPage + 1);
        }
      } else {
        if (reset) {
          setTiendas([]); // Resetear tiendas
          setPage(1);
        }
        
        const tiendaResponse = await api.get(`/tiendas?page=${reset ? 1 : page}&limit=20`);
        const tiendaData = tiendaResponse.data;

        if (tiendaResponse.status === 200) {
          setTiendas(prev => reset ? tiendaData.tiendas : [...prev, ...tiendaData.tiendas]);
          setHasMore(tiendaData.hasMore);
          setPage(prevPage => prevPage + 1);
        }
      }
    } catch (error) {
      console.error("❌ Error al cargar datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(true);
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderTienda = ({ item }) => (
    <Pressable style={MarcasStyles.tiendaContainer} onPress={() => router.push({ pathname: "../Herramientas/catalogo", params: { tienda: item.nombre_tienda } })}>
      <Image source={{ uri: item.Imagen }} style={MarcasStyles.tiendaImage} />
      <View style={MarcasStyles.tiendaInfo}>
        <Text style={MarcasStyles.tiendaNombre}>{item.nombre_tienda}</Text>
        <View style={MarcasStyles.tiendaRating}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star-outline" size={16} color="#FFD700" />
        </View>
      </View>
    </Pressable>
  );

  const renderProducto = ({ item }) => (
    <Pressable style={MarcasStyles.productCard} onPress={() => {
      setSelectedProduct(item);
      setModalVisible(true); // Mostrar el modal al seleccionar el producto
    }}>
      <Image source={{ uri: item.Imagen }} style={MarcasStyles.productImage} />
      <View style={MarcasStyles.productInfo}>
        <Text style={MarcasStyles.productName}>{item.nombre_producto}</Text>
        <Text style={MarcasStyles.tiendaDireccion}>📍 {item.direccion}</Text>
        <Text style={MarcasStyles.productPrice}>${item.precio}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={MarcasStyles.header}>
        <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>
        <View style={MarcasStyles.iconsContainer}>
          <Pressable onPress={() => router.push("/Carrito/carrito")}>
            <Ionicons name="cart-outline" size={28} color="#fff" />
          </Pressable>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={MarcasStyles.container}>
            <CategoryNavigation onCategorySelect={handleCategorySelect} onSearchQueryChange={setSearchQuery} />

            <FlatList
              data={selectedCategory ? productos : tiendas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={selectedCategory ? renderProducto : renderTienda}
              ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
              onEndReached={() => loadData()}
              onEndReachedThreshold={0.2}
              contentContainerStyle={selectedCategory ? MarcasStyles.productGrid : MarcasStyles.tiendaGrid}
              numColumns={2}
            />

            <FooterNavigation />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* MODAL DE PRODUCTO */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={MarcasStyles.modalContainer}>
          <View style={MarcasStyles.modalContent}>
            <Pressable onPress={() => setModalVisible(false)} style={MarcasStyles.closeButton}>
              <Ionicons name="close-circle" size={40} color="red" />
            </Pressable>

            {selectedProduct && (
              <>
                <Image source={{ uri: selectedProduct.Imagen }} style={MarcasStyles.modalProductImage} />
                <Text style={MarcasStyles.modalProductName}>{selectedProduct.nombre_producto}</Text>
                <Text style={MarcasStyles.modalProductPrice}>${selectedProduct.precio}</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MarcasScreen;
