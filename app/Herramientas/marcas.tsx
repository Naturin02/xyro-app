import React, { useState, useEffect } from "react";
import { 
  View, Text, FlatList, Pressable, ActivityIndicator, 
  KeyboardAvoidingView, Platform, Modal, Image, SafeAreaView, TextInput 
} from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import { ProductStyles } from "../Styles/CatalogoStyle"; // Estilos de productos
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation"; 
import { Ionicons } from "@expo/vector-icons"; 
import { backend } from "@/context/endpoints";

interface Tienda {
  nombre_tienda: string;
  horarios: string;
  direccion: string;
  descripcion: string;
}

interface Producto {
  nombre_producto: string;
  imagen_url: string;
  precio: string;
}

const MarcasScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [tiendas, setTiendas] = useState<Tienda[]>([]); 
  const [productos, setProductos] = useState<Producto[]>([]); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [selectedTienda, setSelectedTienda] = useState<string | null>(null);

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
  const openModal = (producto: Producto) => {
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

  const renderTienda = ({ item }: { item: Tienda }) => (
    <Pressable 
      style={MarcasStyles.tiendaCard} 
      onPress={() => {
        setSelectedTienda(item.nombre_tienda);
        loadTiendasYProductos();
      }}
    >
      <View style={MarcasStyles.tiendaImage}>
        <Ionicons name="storefront-outline" size={40} color="#666666" style={{ alignSelf: 'center', marginTop: 40 }} />
      </View>
      <View style={MarcasStyles.tiendaInfo}>
        <Text style={MarcasStyles.tiendaNombre}>{item.nombre_tienda}</Text>
        <Text style={MarcasStyles.tiendaHorarios}>🕒 {item.horarios}</Text>
        <Text style={MarcasStyles.tiendaDireccion}>📍 {item.direccion}</Text>
      </View>
    </Pressable>
  );

  const renderProducto = ({ item }: { item: Producto }) => (
    <Pressable style={MarcasStyles.productCard} onPress={() => openModal(item)}>
      <Image 
        source={{ uri: item.imagen_url }} 
        style={MarcasStyles.productImage}
        resizeMode="cover"
      />
      <View style={MarcasStyles.productInfo}>
        <Text style={MarcasStyles.productName}>{item.nombre_producto}</Text>
        <Text style={MarcasStyles.productPrice}>${parseFloat(item.precio).toFixed(2)}</Text>
        <Pressable style={MarcasStyles.addButton}>
          <Ionicons name="add" size={16} color="#FFFFFF" />
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={MarcasStyles.header}>
          {selectedTienda ? (
            <Pressable onPress={() => setSelectedTienda(null)}>
              <Ionicons name="arrow-back-outline" size={24} color="#000000" />
            </Pressable>
          ) : (
            <Pressable 
              style={MarcasStyles.menuIcon}
              onPress={() => navigation.toggleDrawer()}
            >
              <Ionicons name="menu-outline" size={24} color="#000000" />
            </Pressable>
          )}
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Pressable onPress={() => router.push("/Carrito/carrito")}>
              <Ionicons name="cart-outline" size={24} color="#000000" />
            </Pressable>
            <Pressable onPress={() => router.push("/Herramientas/favoritos")}>
              <Ionicons name="heart-outline" size={24} color="#000000" />
            </Pressable>
            <Pressable>
              <Ionicons name="person-outline" size={24} color="#000000" />
            </Pressable>
          </View>
        </View>

        <View style={MarcasStyles.searchContainer}>
          <View style={MarcasStyles.searchInput}>
            <Ionicons name="search-outline" size={20} color="#666666" style={{ marginRight: 8 }} />
            <TextInput
              placeholder={selectedTienda ? "Buscar productos" : "Buscar tiendas"}
              placeholderTextColor="#666666"
              style={{ flex: 1 }}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <Text style={MarcasStyles.sectionTitle}>
          {selectedTienda ? selectedTienda : "Tiendas Disponibles"}
        </Text>

        {selectedTienda && (
          <View style={MarcasStyles.categoriesContainer}>
            <CategoryNavigation 
              onCategorySelect={setSelectedCategory} 
              onSearchQueryChange={setSearchQuery} 
            />
          </View>
        )}

        <FlatList
          data={selectedTienda ? filteredProductos : filteredTiendas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={selectedTienda ? renderProducto : renderTienda}
          numColumns={2}
          contentContainerStyle={MarcasStyles.productGrid}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
          onEndReached={loadTiendasYProductos}
          onEndReachedThreshold={0.2}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#666666' }}>
              {selectedTienda ? "No hay productos disponibles" : "No hay tiendas disponibles"}
            </Text>
          )}
        />

        <View style={MarcasStyles.footerContainer}>
          <FooterNavigation />
        </View>

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
      </SafeAreaView>
    </View>
  );
};

export default MarcasScreen;
