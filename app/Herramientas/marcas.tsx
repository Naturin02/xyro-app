import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { MarcasStyles } from "../Styles/marcasStyle"; // Importando los estilos desde marcasStyle.ts
import FooterNavigation from "../Componentes/FooterNavigation"; // Importación del FooterNavigation
import CategoryNavigation from "../Componentes/CategoryNavigation"; // Importación del CategoryNavigation
import { API_URL } from "../../backend/utils/config";
import axios from "axios";

const MarcasScreen = () => {
  const router = useRouter(); // Router para navegación
  const [tiendas, setTiendas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadTiendas = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}/api/tiendas?page=${page}&limit=10`);
      setTiendas(prevTiendas => [...prevTiendas, ...response.data]);
      setPage(prevPage => prevPage + 1);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTiendas();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  const renderTienda = ({ item }) => (
    <View style={MarcasStyles.tiendaContainer}>
      <Text style={MarcasStyles.tiendaNombre}>{item.nombre_tienda}</Text>
      <Text style={MarcasStyles.tiendaHorarios}>{item.horarios}</Text>
      <Text style={MarcasStyles.tiendaDireccion}>{item.direccion}</Text>
      <Text style={MarcasStyles.tiendaDescripcion}>{item.descripcion}</Text>
    </View>
  );

  return (
    <View style={MarcasStyles.container}>
      {/* Encabezado */}
      <View style={MarcasStyles.header}>
        <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>
        <Pressable onPress={() => router.push("/Carrito/carrito")}>
          <Text style={MarcasStyles.cart}>🛒</Text>
        </Pressable>
      </View>

      {/* Categorías */}
      <CategoryNavigation /> {/* Aquí se coloca el componente CategoryNavigation */}

      {/* Banner de promoción */}
      <View style={MarcasStyles.banner}>
        <Text style={MarcasStyles.bannerText}>Envío gratuito por compras mayores a $1,000</Text>
      </View>

      {/* Sección de descuentos */}
      <Text style={MarcasStyles.sectionTitle}>🔹 Destacado</Text>
      <View style={MarcasStyles.card}>
        <Text style={MarcasStyles.cardTitle}>Obten hasta 82% de descuento</Text>
        <Pressable style={MarcasStyles.button} onPress={() => alert("Ir a ofertas")}>
          <Text style={MarcasStyles.buttonText}>Ver ofertas</Text>
        </Pressable>
      </View>

      {/* Sección de Ofertas */}
      <Text style={MarcasStyles.sectionTitle}> ¡Oferta Top del Día!</Text>
      <View style={MarcasStyles.card}>
        <Text style={MarcasStyles.cardTitle}>¡Descuentos en Adidas y Guess!</Text>
        <Pressable style={MarcasStyles.button} onPress={() => alert("Explorar más")}>
          <Text style={MarcasStyles.buttonText}>Explorar</Text>
        </Pressable>
      </View>

      {/* Lista de Tiendas con Scroll Infinito */}
      <FlatList
        data={tiendas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTienda}
        onEndReached={loadTiendas}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />

      {/* Footer de navegación */}
      <FooterNavigation />
    </View>
  );
};

export default MarcasScreen;