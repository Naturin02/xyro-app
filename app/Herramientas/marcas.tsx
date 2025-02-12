import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation";
import axios from "axios";
import { API_URL } from "../../backend/utils/config";

const MarcasScreen = () => {
  const router = useRouter();
  const [tiendas, setTiendas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Cargar tiendas según el filtro de categoría y búsqueda
  const loadTiendas = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const url = `${API_URL}/api/tiendas?page=${page}&limit=10`;
      const response = await axios.get(url);

      const nuevasTiendas = Array.isArray(response.data) ? response.data : [];

      if (nuevasTiendas.length === 0) {
        setHasMore(false);
      } else {
        setTiendas((prevTiendas) => [...prevTiendas, ...nuevasTiendas]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("❌ Error al cargar tiendas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTiendas();
  }, [selectedCategory, searchQuery]);

  // Filtro de tiendas basado en la categoría seleccionada y la búsqueda
  const filteredTiendas = tiendas.filter((tienda) => {
    const matchesCategory = selectedCategory
      ? tienda.categoria.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    const matchesSearch = tienda.nombre_tienda.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
    <View style={MarcasStyles.container}>
      <View style={MarcasStyles.header}>
        <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>
        <Pressable onPress={() => router.push("/Carrito/carrito")}>
          <Text style={MarcasStyles.cart}>🛒</Text>
        </Pressable>
      </View>

      <CategoryNavigation onCategorySelect={setSelectedCategory} onSearchQueryChange={setSearchQuery} />

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
          onEndReached={loadTiendas}
          onEndReachedThreshold={0.2}
          ListFooterComponent={renderFooter}
        />
      )}

      <FooterNavigation />
    </View>
  );
};

export default MarcasScreen;











