import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { MarcasStyles } from "../Styles/marcasStyle"; // Importando los estilos desde marcasStyle.ts
import FooterNavigation from "../Componentes/FooterNavigation"; // Importación del FooterNavigation
import CategoryNavigation from "../Componentes/CategoryNavigation"; // Importación del CategoryNavigation

const MarcasScreen = () => {
  const router = useRouter(); // Router para navegación

  return (
    <View style={MarcasStyles.container}>
      {/* Contenido principal con Scroll */}
      <ScrollView contentContainerStyle={MarcasStyles.scrollContent}>
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
      </ScrollView>

      {/* Footer de navegación */}
      <FooterNavigation />
    </View>
  );
};

export default MarcasScreen;
