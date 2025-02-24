import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation"; 
import { Ionicons } from "@expo/vector-icons"; 
import { backend } from "@/context/endpoints";

const MarcasScreen = () => {
  const router = useRouter();
  const [tiendas, setTiendas] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Página para la paginación
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 

  // Función para cargar tiendas con paginación
  const loadTiendas = async () => {
    if (!hasMore || loading) return; // Evitar carga si no hay más datos o ya está cargando

    setLoading(true);
    try {
      const response = await fetch(`${backend}/api/tiendas?page=${page}&limit=10`);
      const text = await response.text(); 

      console.log("📌 Respuesta del servidor:", text);

      try {
        const data = JSON.parse(text);
        if (response.ok) {
          setTiendas((prevTiendas) => [...prevTiendas, ...data.tiendas]); // Agrega nuevas tiendas
          setHasMore(data.hasMore); // Indica si hay más tiendas por cargar
          setPage((prevPage) => prevPage + 1); // Incrementa la página
        } else {
          console.error("❌ Error al obtener tiendas:", data.error);
        }
      } catch (jsonError) {
        console.error("❌ Error parseando JSON:", jsonError);
      }

    } catch (error) {
      console.error("❌ Error al cargar las tiendas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTiendas(); // Carga inicial
  }, []);

  // Filtrado de tiendas según categoría, subcategoría y búsqueda
  const filteredTiendas = tiendas.filter((tienda) => {
    const matchesCategory = selectedCategory ? tienda.categoria?.toLowerCase().includes(selectedCategory.toLowerCase()) : true;
    const matchesSubCategory = selectedSubCategory ? tienda.subCategoria?.toLowerCase().includes(selectedSubCategory.toLowerCase()) : true;
    const matchesSearch = tienda.nombre_tienda.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  const renderTienda = ({ item }) => {
    return (
      <Pressable style={MarcasStyles.tiendaContainer} onPress={() => router.push({ pathname: "../Herramientas/catalogo", params: { tienda: item.nombre_tienda } })}>
        <Text style={MarcasStyles.tiendaNombre}>🏬 {item.nombre_tienda}</Text>
        <Text style={MarcasStyles.tiendaHorarios}>🕒 {item.horarios}</Text>
        <Text style={MarcasStyles.tiendaDireccion}>📍 {item.direccion}</Text>
        <Text style={MarcasStyles.tiendaDescripcion}>{item.descripcion}</Text>
      </Pressable>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={MarcasStyles.container}>
        <View style={MarcasStyles.header}>
          <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>

          {/* Carrito y Favoritos */}
          <View style={MarcasStyles.iconsContainer}>
            <Pressable onPress={() => router.push("/Carrito/carrito")} style={MarcasStyles.iconButton}>
              <Ionicons name="cart-outline" size={28} color="#fff" />
            </Pressable>

            <Pressable onPress={() => router.push("/Herramientas/favoritos")} style={MarcasStyles.iconButton}>
              <Ionicons name="heart-outline" size={28} color="#fff" />
            </Pressable>
          </View>
        </View>

        {/* Buscador */}
        <CategoryNavigation onCategorySelect={setSelectedCategory} onSearchQueryChange={setSearchQuery} />

        {/* Espaciador */}
        <View style={MarcasStyles.spacer}></View>

        {/* Mensaje si no hay datos */}
        {filteredTiendas.length === 0 && !loading ? (
          <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16, color: "red" }}>
            ❌ No hay tiendas disponibles
          </Text>
        ) : (
          <FlatList
            data={filteredTiendas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderTienda}
            ListFooterComponent={renderFooter}
            onEndReached={loadTiendas} // Cargar más tiendas al llegar al final
            onEndReachedThreshold={0.2} // Cuánto antes cargar más contenido
            contentContainerStyle={MarcasStyles.flatListContainer} 
          />
        )}

        <FooterNavigation />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MarcasScreen;
