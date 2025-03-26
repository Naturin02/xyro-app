import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { useRouter } from "expo-router"; // Para la navegación
import { FooterNavigationStyle } from "../Styles/FooterNavigationStyle"; // Asegúrate de la ruta correcta

const FooterNavigation = () => {
  const router = useRouter(); // Inicializa el hook de navegación
  const [activeTab, setActiveTab] = useState("marcas"); // Estado para controlar el tab activo

  return (
    <View style={FooterNavigationStyle.footer}>
      {/* Tiendas */}
      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("marcas"); // Cambia el estado a 'marcas'
          router.push("/Herramientas/marcas");
        }}
      >
        <Image
          source={require("../../assets/images/tienda-alt.png")} // Ruta de la imagen de "Tiendas"
          style={[ 
            FooterNavigationStyle.footerIcon,
            {
              width: 20,
              height: 20,
              resizeMode: "contain",
            },
          ]}
        />
        <Text style={FooterNavigationStyle.footerText}>
          Tiendas
        </Text>
      </Pressable>

      {/* Cuenta */}
      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("cuenta"); // Cambia el estado a 'cuenta'
          router.push("/Herramientas/cuenta");
        }}
      >
        <Image
          source={require("../../assets/images/lapiz-de-usuario.png")} // Ruta de la imagen de "Cuenta"
          style={[ 
            FooterNavigationStyle.footerIcon,
            {
              width: 20,
              height: 20,
              resizeMode: "contain",
            },
          ]}
        />
        <Text style={FooterNavigationStyle.footerText}>
          Cuenta
        </Text>
      </Pressable>

      {/* Mis Pedidos */}
      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("pedidos"); // Cambia el estado a 'pedidos'
          router.push("/Herramientas/misPedidos");
        }}
      >
        <Image
          source={require("../../assets/images/caja.png")} // Ruta de la imagen de "Mis pedidos"
          style={[ 
            FooterNavigationStyle.footerIcon,
            {
              width: 20,
              height: 20,
              resizeMode: "contain",
            },
          ]}
        />
        <Text style={FooterNavigationStyle.footerText}>
          Mis pedidos
        </Text>
      </Pressable>

      {/* Favoritos */}
      <Pressable
        style={FooterNavigationStyle.footerItem}
        onPress={() => {
          setActiveTab("favoritos"); // Cambia el estado a 'favoritos'
          router.push("/Herramientas/favoritos");
        }}
      >
        <Image
          source={require("../../assets/images/favorito.png")} // Ruta de la imagen de "Favoritos"
          style={[ 
            FooterNavigationStyle.footerIcon,
            {
              width: 20,
              height: 20,
              resizeMode: "contain",
            },
          ]}
        />
        <Text style={FooterNavigationStyle.footerText}>
          Favoritos
        </Text>
      </Pressable>
    </View>
  );
};

export default FooterNavigation;
