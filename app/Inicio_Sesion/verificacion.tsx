// C:\Users\shiro\OneDrive\Escritorio\Exp\xyro-app\app\Inicio_Sesion\verificacionCorreo.tsx
import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import verificacionCorreoStyles from "../Styles/verificacionCorreoStyle"; // Importación default

const VerificacionCorreo = () => {
  const router = useRouter();

  return (
    <View style={verificacionCorreoStyles.container}>
      {/* Encabezado */}
      <View style={verificacionCorreoStyles.header}>
        <Image style={verificacionCorreoStyles.logo} source={require("../../assets/images/logo-xyro2.png")} />
      </View>

      {/* Mensaje de verificación */}
      <Text style={verificacionCorreoStyles.title}>Verifica tu identidad en dos pasos para una mejor seguridad</Text>
      <Text style={verificacionCorreoStyles.subtitle}>
        Te hemos enviado un correo electrónico con un enlace de verificación
      </Text>

      {/* Botón Continuar */}
      <Pressable style={verificacionCorreoStyles.button} onPress={() => router.replace("/Herramientas/marcas")}>
        <Text style={verificacionCorreoStyles.buttonText}>Continuar</Text>
      </Pressable>

      {/* Enlace para reenviar código */}
      <Text style={verificacionCorreoStyles.resendText}>
        ¿No recibió un correo de verificación?{" "}
        <Pressable onPress={() => alert("Correo reenviado")}>
          <Text style={verificacionCorreoStyles.resendLink}>Reenviar</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default VerificacionCorreo;
