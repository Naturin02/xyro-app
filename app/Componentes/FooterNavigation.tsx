import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router"; // Para la navegación
import { FooterNavigationStyle } from "../Styles/FooterNavigationStyle"; // Asegúrate de la ruta correcta

const FooterNavigation = () => {
  const router = useRouter(); // Inicializa el hook de navegación
  const [activeTab, setActiveTab] = useState("marcas"); // Estado para controlar el tab activo

  return (
    <View style={FooterNavigationStyle.footer}>
      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("marcas");
          router.push("/Herramientas/marcas");
        }}
      >
        <Text style={[
          FooterNavigationStyle.footerIcon,
          activeTab === "marcas" && FooterNavigationStyle.activeIcon
        ]}>🏠</Text>
        <Text style={[
          FooterNavigationStyle.footerText,
          activeTab === "marcas" && FooterNavigationStyle.activeItem
        ]}>Tiendas</Text>
      </Pressable>



      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("cuenta");
          router.push("/Herramientas/cuenta");
        }}
      >
        <Text style={[
          FooterNavigationStyle.footerIcon,
          activeTab === "cuenta" && FooterNavigationStyle.activeIcon
        ]}>👤</Text>
        <Text style={[
          FooterNavigationStyle.footerText,
          activeTab === "cuenta" && FooterNavigationStyle.activeItem
        ]}>Cuenta</Text>
      </Pressable>
    </View>
  );
};

export default FooterNavigation;