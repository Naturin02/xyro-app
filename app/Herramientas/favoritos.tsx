import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { FavoritosStyles } from "../Styles/FavoritosStyle"; // Asegúrate de que la ruta sea correcta

const FavoritosScreen = () => {
  const router = useRouter(); // Inicializa el hook de navegación
  const [favoritos, setFavoritos] = useState([
    // Datos de ejemplo para los productos favoritos
    {
      id: "1",
      nombre: "Producto A",
      imagen: "https://via.placeholder.com/100",
      descripcion: "Descripción del producto A",
    },
    {
      id: "2",
      nombre: "Producto B",
      imagen: "https://via.placeholder.com/100",
      descripcion: "Descripción del producto B",
    },
  ]);

  const renderFavorito = ({ item }) => (
    <Pressable
      style={FavoritosStyles.favoritoContainer}
      onPress={() => router.push({ pathname: "/DetallesProducto", params: { id: item.id } })} // Navegar al detalle del producto
    >
      <Image source={{ uri: item.imagen }} style={FavoritosStyles.favoritoImage} />
      <View style={FavoritosStyles.favoritoDetails}>
        <Text style={FavoritosStyles.favoritoNombre}>{item.nombre}</Text>
        <Text style={FavoritosStyles.favoritoDescripcion}>{item.descripcion}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={FavoritosStyles.container}>
      <Text style={FavoritosStyles.title}>Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderFavorito}
        contentContainerStyle={FavoritosStyles.listContainer}
      />
    </View>
  );
};

export default FavoritosScreen;
