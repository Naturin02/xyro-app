import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415Pro1}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Text
        style={[styles.bienvenidoAXyro, styles.xyroFlexBox]}
      >{`Bienvenido a Xyro 
N°1 en México`}</Text>
      <Text style={[styles.xyro, styles.xyroFlexBox]}>Xyro</Text>
      <View style={styles.iphone1415Pro1Child} />
      <Text style={[styles.continuar, styles.continuarPosition]}>
        Continuar
      </Text>
      <Image
        style={styles.imagenDeWhatsapp20241125}
        contentFit="cover"
        source={require("../assets/imagen-de-whatsapp-20241125-a-las-001633-49d30edc-1.png")}
      />
      <Text
        style={[styles.bienvenidoAXyro, styles.xyroFlexBox]}
      >{`Bienvenido a Xyro 
N°1 en México`}</Text>
      <View style={styles.iphone1415Pro1Child} />
      <Text style={[styles.continuar, styles.continuarPosition]}>
        Continuar
      </Text>
      <Text
        style={[styles.bienvenidoAXyro, styles.xyroFlexBox]}
      >{`Bienvenido a Xyro 
N°1 en México`}</Text>
      <View style={styles.iphone1415Pro1Child} />
      <Text style={[styles.continuar, styles.continuarPosition]}>
        Continuar
      </Text>
      <Text
        style={[styles.bienvenidoAXyro, styles.xyroFlexBox]}
      >{`Bienvenido a Xyro 
N°1 en México`}</Text>
      <Pressable
        style={styles.iphone1415Pro1Child}
        onPress={() => navigation.navigate("InicioDeSecion")}
      />
      <Pressable
        style={styles.continuarPosition}
        onPress={() => navigation.navigate("InicioDeSecion")}
      >
        <Text style={[styles.continuar4, styles.xyroFlexBox]}>Continuar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  xyroFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  continuarPosition: {
    top: 770,
    left: "50%",
    position: "absolute",
  },
  imageIcon: {
    top: 0,
    left: 0,
    width: 393,
    position: "absolute",
    height: 852,
  },
  bienvenidoAXyro: {
    marginTop: -44,
    marginLeft: -78.5,
    top: "50%",
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    lineHeight: 43,
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xl,
    left: "50%",
    position: "absolute",
  },
  xyro: {
    top: 256,
    left: 140,
    fontSize: FontSize.size_17xl,
    letterSpacing: 4.7,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.spartan,
    position: "absolute",
  },
  iphone1415Pro1Child: {
    top: 764,
    left: 15,
    backgroundColor: Color.colorDarkslategray,
    width: 361,
    height: 50,
    position: "absolute",
  },
  continuar: {
    marginLeft: -51.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.juaRegular,
    lineHeight: 43,
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xl,
  },
  imagenDeWhatsapp20241125: {
    top: 114,
    left: 145,
    borderRadius: 241,
    width: 106,
    height: 120,
    position: "absolute",
  },
  continuar4: {
    marginLeft: -54.5,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 43,
    letterSpacing: -0.2,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
  },
  iphone1415Pro1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 852,
  },
});

export default IPhone1415Pro;
