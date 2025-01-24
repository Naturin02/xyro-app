import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router"; // Navegación con Expo Router
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

const MarcasScreen = () => {
  const router = useRouter(); // Router para navegación

  return (
    <View style={styles.container}>
      {/* Contenido principal con Scroll */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.logo}>🛍️ Xyro</Text>
          <Pressable onPress={() => alert("Carrito de compras")}>
            <Text style={styles.cart}>🛒</Text>
          </Pressable>
        </View>

        {/* Categorías */}
        <View style={styles.navBar}>
          <Pressable style={styles.navItem} onPress={() => alert("Marcas")}>
            <Text style={styles.navText}>Marcas</Text>
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => alert("Mujer")}>
            <Text style={styles.navText}>Mujer</Text>
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => alert("Hombre")}>
            <Text style={styles.navText}>Hombre</Text>
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => alert("Belleza")}>
            <Text style={styles.navText}>Belleza</Text>
          </Pressable>
          <Pressable style={styles.navItem} onPress={() => alert("Calzado")}>
            <Text style={styles.navText}>Calzado</Text>
          </Pressable>
        </View>

        {/* Banner de promoción */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Envío gratuito por compras mayores a $1,000</Text>
        </View>

        {/* Sección de descuentos */}
        <Text style={styles.sectionTitle}>🔹 Destacado</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Obten hasta 82% de descuento</Text>
          <Pressable style={styles.button} onPress={() => alert("Ir a ofertas")}>
            <Text style={styles.buttonText}>Ver ofertas</Text>
          </Pressable>
        </View>

        {/* Sección de Ofertas */}
        <Text style={styles.sectionTitle}>🎉 ¡Oferta Top del Día!</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¡Descuentos en Adidas y Guess!</Text>
          <Pressable style={styles.button} onPress={() => alert("Explorar más")}>
            <Text style={styles.buttonText}>Explorar</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Navegación inferior fija */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => router.push("/marcas")}>
          <Text style={styles.footerText}>🏷️ Marcas</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => alert("/categorías")}>
          <Text style={styles.footerText}>📂 Categorías</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => router.push("/(tabs)/cuenta")}>
        <Text style={styles.footerText}>👤 Cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

// 🎨 **Estilos corregidos**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContent: {
    paddingBottom: 80, // Espacio para evitar que el contenido se superponga con la barra
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: Color.colorBlack,
  },
  logo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.juaRegular,
  },
  cart: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
  },
  navItem: {
    padding: 5,
  },
  navText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
  },
  banner: {
    backgroundColor: Color.colorSeagreen,
    padding: 10,
    alignItems: "center",
  },
  bannerText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  sectionTitle: {
    fontSize: FontSize.size_mini,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: Color.colorGainsboro_200,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Color.colorDarkslategray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
  },
});

export default MarcasScreen;
