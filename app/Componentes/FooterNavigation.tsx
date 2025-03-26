import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router"; // Para la navegación
import { FooterNavigationStyle } from "../Styles/FooterNavigationStyle"; // Asegúrate de la ruta correcta

const FooterNavigation = () => {
  const router = useRouter(); // Inicializa el hook de navegación
  const [activeTab, setActiveTab] = useState("tienda"); // Estado para controlar el tab activo

  return (
    <View style={FooterNavigationStyle.footer}>
      <Pressable
        style={[
          FooterNavigationStyle.footerItem,
          activeTab === "marcas" && FooterNavigationStyle.activeButton, // Si la sección es activa, aplica el estilo
        ]}
        onPress={() => {
          setActiveTab("marcas"); // Cambiar solo el estado para hacer el botón activo
          router.push("/Herramientas/marcas"); // Navegar a la ruta de Tienda
        }}
      >
        <Text
          style={[
            FooterNavigationStyle.footerText,
            activeTab === "marcas" && FooterNavigationStyle.activeText, // Si la sección es activa, cambia el color del texto
          ]}
        >
          🏷️ Tienda
        </Text>
      </Pressable>

      <Pressable
        style={[
          FooterNavigationStyle.footerItem,
          activeTab === "cuenta" && FooterNavigationStyle.activeButton, // Si la sección es activa, aplica el estilo
        ]}
        onPress={() => {
          setActiveTab("cuenta"); // Cambiar solo el estado para hacer el botón activo
          router.push("/Herramientas/cuenta"); // Navegar a la ruta de Cuenta
        }}
      >
        <Text
          style={[
            FooterNavigationStyle.footerText,
            activeTab === "cuenta" && FooterNavigationStyle.activeText, // Si la sección es activa, cambia el color del texto
          ]}
        >
          👤 Cuenta
        </Text>
      </Pressable>
    </View>
  );
};

export default FooterNavigation;
