// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Herramientas\marcas.tsx
import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { MarcasStyles } from "../Styles/marcasStyle"; // Importando los estilos desde marcasStyle.ts

const MarcasScreen = () => {
  const router = useRouter(); // Router para navegación

  return (
    <View style={MarcasStyles.container}>
      {/* Contenido principal con Scroll */}
      <ScrollView contentContainerStyle={MarcasStyles.scrollContent}>
        {/* Encabezado */}
        <View style={MarcasStyles.header}>
          <Text style={MarcasStyles.logo}>🛍️ Xyro</Text>
          <Pressable onPress={() => alert("Carrito de compras")}>
            <Text style={MarcasStyles.cart}>🛒</Text>
          </Pressable>
        </View>

        {/* Categorías */}
        <View style={MarcasStyles.navBar}>
          <Pressable style={MarcasStyles.navItem} onPress={() => alert("Marcas")}>
            <Text style={MarcasStyles.navText}>Marcas</Text>
          </Pressable>
          <Pressable style={MarcasStyles.navItem} onPress={() => alert("Mujer")}>
            <Text style={MarcasStyles.navText}>Mujer</Text>
          </Pressable>
          <Pressable style={MarcasStyles.navItem} onPress={() => alert("Hombre")}>
            <Text style={MarcasStyles.navText}>Hombre</Text>
          </Pressable>
          <Pressable style={MarcasStyles.navItem} onPress={() => alert("Belleza")}>
            <Text style={MarcasStyles.navText}>Belleza</Text>
          </Pressable>
          <Pressable style={MarcasStyles.navItem} onPress={() => alert("Calzado")}>
            <Text style={MarcasStyles.navText}>Calzado</Text>
          </Pressable>
        </View>

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
        <Text style={MarcasStyles.sectionTitle}>🎉 ¡Oferta Top del Día!</Text>
        <View style={MarcasStyles.card}>
          <Text style={MarcasStyles.cardTitle}>¡Descuentos en Adidas y Guess!</Text>
          <Pressable style={MarcasStyles.button} onPress={() => alert("Explorar más")}>
            <Text style={MarcasStyles.buttonText}>Explorar</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Navegación inferior fija */}
      <View style={MarcasStyles.footer}>
        <Pressable style={MarcasStyles.footerItem} onPress={() => router.push("/Herramientas/marcas")}>
          <Text style={MarcasStyles.footerText}>🏷️ Marcas</Text>
        </Pressable>
        <Pressable style={MarcasStyles.footerItem} onPress={() => alert("/categorías")}>
          <Text style={MarcasStyles.footerText}>📂 Categorías</Text>
        </Pressable>
        <Pressable style={MarcasStyles.footerItem} onPress={() => router.push("/Herramientas/cuenta")}>
          <Text style={MarcasStyles.footerText}>👤 Cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MarcasScreen;
