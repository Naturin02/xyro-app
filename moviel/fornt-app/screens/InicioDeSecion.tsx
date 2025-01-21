import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InicioDeSecion = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.inicioDeSecion}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View
        style={[styles.inicioDeSecionChild, styles.inicioDeSecionChildPosition]}
      />
      <Pressable
        style={[
          styles.whatsappImage20241001At1,
          styles.inicioDeSecionChildPosition,
        ]}
        onPress={() => navigation.navigate("IPhone1415Pro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/whatsapp-image-20241001-at-112411-pm-1-1.png")}
        />
      </Pressable>
      <Text style={styles.xyro}>Xyro</Text>
      <Text style={styles.ingresaTusDatos}>Ingresa tus datos</Text>
      <LinearGradient
        style={[styles.inicioDeSecionItem, styles.inicioBorder]}
        locations={[0, 0]}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0)"]}
      />
      <Text style={[styles.correoElectrnico, styles.contraseaTypo]}>
        Correo electrónico
      </Text>
      <LinearGradient
        style={[styles.inicioDeSecionInner, styles.inicioBorder]}
        locations={[0, 0]}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0)"]}
      />
      <Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      <Pressable
        style={styles.olvidasteTuContraseaContainer}
        onPress={() => navigation.navigate("RecuperarContrasea")}
      >
        <Text
          style={[styles.olvidasteTuContrasea, styles.resgstrateGratis1Layout]}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.inicioLayout]}
        onPress={() => navigation.navigate("InterfazMarcas")}
      />
      <Pressable
        style={styles.resgstrateGratis}
        onPress={() => navigation.navigate("Registro")}
      >
        <Text style={[styles.resgstrateGratis1, styles.oFlexBox]}>
          Resgístrate gratis
        </Text>
      </Pressable>
      <Text style={[styles.o, styles.oFlexBox]}>O</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.inicioDeSecionChild1, styles.rectangleViewLayout]} />
      <LinearGradient
        style={[styles.wrapper, styles.inicioLayout]}
        locations={[0, 0]}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.inicioBorder]}
          onPress={() => navigation.navigate("RegistroGoogle2")}
        />
      </LinearGradient>
      <Pressable
        style={styles.continuarConGoogleContainer}
        onPress={() => navigation.navigate("RegistroGoogle2")}
      >
        <Text style={styles.continuarConGoogle}>Continuar con Google</Text>
      </Pressable>
      <Pressable
        style={[styles.image2, styles.imageLayout]}
        onPress={() => navigation.navigate("RegistroGoogle2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.container, styles.framePosition]}
        locations={[0, 0]}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.inicioBorder]}
          onPress={() => navigation.navigate("RegistroIOS3")}
        />
      </LinearGradient>
      <Pressable
        style={[
          styles.continuarConAppleContainer,
          styles.continuarContainerPosition,
        ]}
        onPress={() => navigation.navigate("RegistroIOS3")}
      >
        <Text style={styles.continuarConGoogle}>Continuar con Apple</Text>
      </Pressable>
      <LinearGradient
        style={[styles.frame, styles.framePosition]}
        locations={[0, 0]}
        colors={["rgba(217, 217, 217, 0)", "rgba(115, 115, 115, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.inicioBorder]}
          onPress={() => navigation.navigate("RegistroFacebook3")}
        />
      </LinearGradient>
      <Pressable
        style={[
          styles.continuarConFacebookContainer,
          styles.continuarContainerPosition,
        ]}
        onPress={() => navigation.navigate("RegistroFacebook3")}
      >
        <Text style={styles.continuarConGoogle}>Continuar con Facebook</Text>
      </Pressable>
      <Pressable
        style={[styles.image4, styles.imageLayout]}
        onPress={() => navigation.navigate("RegistroFacebook3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Pressable
        style={styles.iniciarSesin}
        onPress={() => navigation.navigate("InterfazMarcas")}
      >
        <Text style={styles.iniciarSesin1}>Iniciar sesión</Text>
      </Pressable>
      <Pressable
        style={[styles.image3, styles.imageLayout]}
        onPress={() => navigation.navigate("RegistroIOS3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inicioDeSecionChildPosition: {
    top: 0,
    position: "absolute",
  },
  inicioBorder: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
  },
  contraseaTypo: {
    color: Color.colorDarkgray_200,
    left: 33,
    fontFamily: FontFamily.inderRegular,
    opacity: 0.66,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    lineHeight: 40,
    position: "absolute",
  },
  resgstrateGratis1Layout: {
    height: 25,
    width: 177,
    color: Color.colorSeagreen,
  },
  inicioLayout: {
    height: 50,
    position: "absolute",
  },
  oFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  rectangleViewLayout: {
    height: 3,
    width: 150,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  imageLayout: {
    height: 28,
    position: "absolute",
  },
  framePosition: {
    left: 21,
    height: 50,
    width: 353,
    position: "absolute",
  },
  continuarContainerPosition: {
    left: 73,
    position: "absolute",
  },
  image1Icon: {
    top: 261,
    left: 344,
    width: 18,
    height: 18,
    position: "absolute",
  },
  inicioDeSecionChild: {
    left: 0,
    backgroundColor: Color.colorBlack,
    width: 393,
    height: 114,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  whatsappImage20241001At1: {
    left: 137,
    width: 117,
    height: 84,
  },
  xyro: {
    top: 72,
    left: 150,
    fontSize: FontSize.size_17xl,
    letterSpacing: 4.7,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexMonoBold,
    color: Color.colorSnow,
    textAlign: "center",
    lineHeight: 40,
    position: "absolute",
  },
  ingresaTusDatos: {
    marginLeft: -53.5,
    top: 119,
    fontFamily: FontFamily.nunitoRegular,
    opacity: 0.66,
    textAlign: "left",
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    left: "50%",
    lineHeight: 40,
    position: "absolute",
  },
  inicioDeSecionItem: {
    top: 168,
    height: 50,
    position: "absolute",
    width: 353,
    left: 20,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  correoElectrnico: {
    top: 173,
  },
  inicioDeSecionInner: {
    top: 243,
    height: 50,
    position: "absolute",
    width: 353,
    left: 20,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  contrasea: {
    top: 248,
  },
  olvidasteTuContrasea: {
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    width: 177,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.inderRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  olvidasteTuContraseaContainer: {
    left: 23,
    top: 297,
    position: "absolute",
  },
  rectanglePressable: {
    top: 353,
    left: 16,
    backgroundColor: Color.colorGray_200,
    width: 361,
  },
  resgstrateGratis1: {
    height: 25,
    width: 177,
    color: Color.colorSeagreen,
    justifyContent: "center",
  },
  resgstrateGratis: {
    left: 112,
    top: 429,
    position: "absolute",
  },
  o: {
    top: 473,
    left: 189,
    width: 16,
    justifyContent: "center",
    color: Color.colorBlack,
    height: 18,
    position: "absolute",
  },
  rectangleView: {
    top: 481,
    left: 20,
    height: 3,
    width: 150,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_10xs,
  },
  inicioDeSecionChild1: {
    top: 482,
    left: 226,
  },
  pressable: {
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    borderStyle: "solid",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 530,
    width: 353,
    height: 50,
    left: 20,
  },
  continuarConGoogle: {
    fontFamily: FontFamily.inderRegular,
    opacity: 0.66,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
    lineHeight: 40,
  },
  continuarConGoogleContainer: {
    left: 72,
    top: 535,
    position: "absolute",
  },
  image2: {
    top: 541,
    width: 27,
    height: 28,
    left: 28,
  },
  container: {
    top: 599,
  },
  continuarConAppleContainer: {
    top: 604,
  },
  frame: {
    top: 668,
  },
  continuarConFacebookContainer: {
    top: 673,
  },
  image4: {
    top: 679,
    width: 28,
    left: 28,
  },
  iniciarSesin1: {
    marginLeft: -42.5,
    fontSize: FontSize.size_xl,
    letterSpacing: -1.6,
    lineHeight: 43,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  iniciarSesin: {
    top: 357,
    left: "50%",
    position: "absolute",
  },
  image3: {
    left: 30,
    top: 608,
    width: 27,
    height: 28,
  },
  inicioDeSecion: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default InicioDeSecion;
