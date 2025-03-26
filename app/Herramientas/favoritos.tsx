import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Image, Platform, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
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

  const renderFavorito = ({ item }: { item: { id: string; nombre: string; imagen: string; descripcion: string } }) => (
    <Pressable
      style={FavoritosStyles.favoritoContainer}
      onPress={() => router.push(`/DetallesProducto?id=${item.id}`)} // Navegar al detalle del producto
    >
      <Image source={{ uri: item.imagen }} style={FavoritosStyles.favoritoImage} />
      <View style={FavoritosStyles.favoritoDetails}>
        <Text style={FavoritosStyles.favoritoNombre}>{item.nombre}</Text>
        <Text style={FavoritosStyles.favoritoDescripcion}>{item.descripcion}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Header fuera del SafeAreaView para mostrar la información del notch */}
      <View style={FavoritosStyles.header}>
        <Pressable onPress={() => router.back()} style={FavoritosStyles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </Pressable>
        <Text style={FavoritosStyles.headerTitle}>Favoritos</Text>
        <View style={FavoritosStyles.headerIcons}>
          <Pressable onPress={() => router.push("/Carrito/carrito")}>
            <Ionicons name="cart-outline" size={28} color="#fff" />
          </Pressable>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={FavoritosStyles.container}>
            <FlatList
              data={favoritos}
              keyExtractor={(item) => item.id}
              renderItem={renderFavorito}
              contentContainerStyle={FavoritosStyles.listContainer}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default FavoritosScreen;
