import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { MarcasStyles } from "../Styles/marcasStyle";
import FooterNavigation from "../Componentes/FooterNavigation";
import CategoryNavigation from "../Componentes/CategoryNavigation"; // Asegúrate de que la ruta sea correcta
import { Ionicons } from "@expo/vector-icons"; // Importa los íconos

const MarcasScreen = () => {
  const router = useRouter();
  const [tiendas, setTiendas] = useState([]); // Almacena las tiendas
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para la categoría seleccionada
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); // Estado para la subcategoría seleccionada
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  // Cargar tiendas desde una fuente externa, como una API
  const loadTiendas = async () => {
    setLoading(true);
    try {
      // Simulación de una llamada API que devuelve las tiendas
      // Esto debe ser reemplazado por tu lógica real de obtener tiendas
      const fetchedTiendas = await fetch("https://tu-api-aqui.com/tiendas"); // Reemplazar con la URL de la API real
      const data = await fetchedTiendas.json();

      setTiendas(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error("Error al cargar las tiendas", error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  useEffect(() => {
    loadTiendas(); // Llamada a la función cuando el componente se monta
  }, []);

  // Filtro de tiendas basado en la categoría seleccionada, subcategoría y búsqueda
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

        {/* Se agrega un margen aquí para evitar que el buscador se sobreponga */}
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
            onEndReached={() => {
              if (hasMore && !loading) {
                loadTiendas(); // Cargar más tiendas al llegar al final
              }
            }}
            onEndReachedThreshold={0.2} // Cuánto antes cargar más contenido
            contentContainerStyle={MarcasStyles.flatListContainer} // Ajuste para el contenido
          />
        )}

        <FooterNavigation />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MarcasScreen;
