// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Componentes\CategoryNavigation.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";
import { MarcasStyles } from "../Styles/marcasStyle"; // Asegúrate de que la ruta sea correcta

const CategoryNavigation = () => {
  return (
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
  );
};

export default CategoryNavigation;
