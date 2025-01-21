import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const InterfazMarcas = () => {
  return (
    <Image
      style={styles.interfazMarcasIcon}
      contentFit="cover"
      source={require("../assets/interfaz-marcas.png")}
    />
  );
};

const styles = StyleSheet.create({
  interfazMarcasIcon: {
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default InterfazMarcas;
