// FooterNavigation.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router"; // Para la navegación
import { FooterNavigationStyle } from "../Styles/FooterNavigationStyle"; // Asegúrate de la ruta correcta

const FooterNavigation = () => {
  const router = useRouter(); // Inicializa el hook de navegación

  return (
    <View style={FooterNavigationStyle.footer}>
      <Pressable style={FooterNavigationStyle.footerItem} onPress={() => router.push("/Herramientas/marcas")}>
        <Text style={FooterNavigationStyle.footerText}>🏷️ Tienda</Text>
      </Pressable>
     
      <Pressable style={FooterNavigationStyle.footerItem} onPress={() => router.push("/Herramientas/cuenta")}>
        <Text style={FooterNavigationStyle.footerText}>👤 Cuenta</Text>
      </Pressable>
    </View>
  );
};

export default FooterNavigation;
