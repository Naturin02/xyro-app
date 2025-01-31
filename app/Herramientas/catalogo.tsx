import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ProductStyles } from '../Styles/CatalogoStyle';
import FooterNavigation from '../Componentes/FooterNavigation';
import { API_URL } from '@/backend/utils/config';


const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [storeName, setStoreName] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        if (data.length > 0) {
          setStoreName(data[0].nombre_tienda);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={ProductStyles.productContainer}>
      <TouchableOpacity style={ProductStyles.addButton}>
        <Text style={ProductStyles.addButtonText}>Añadir</Text>
      </TouchableOpacity>
      <Text style={ProductStyles.productName}>{item.nombre_producto}</Text>
      <Text style={ProductStyles.productPrice}>${item.precio.toFixed(2)}</Text>
      <TouchableOpacity style={ProductStyles.commentButton}>
        <Text>Comentarios</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={ProductStyles.container}>
      <View style={ProductStyles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={ProductStyles.headerTitle}>{storeName || 'Tienda'}</Text>
        <Pressable onPress={() => router.push('/Carrito/carrito')}> 
          <Ionicons name="cart-outline" size={24} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={ProductStyles.productList}
      />
      <FooterNavigation />
    </View>
  );
};

export default ProductGrid;
