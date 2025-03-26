import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Rutas existentes */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Inicio de sesión" }} />
      <Stack.Screen name="registro" options={{ title: "Registro" }} />
      <Stack.Screen name="recuperar" options={{ title: "Recuperar Contraseña" }} />
      <Stack.Screen name="correo" options={{ title: "Revisar correo" }} />
      <Stack.Screen name="favoritos" options={{ title: "Favoritos" }} />

      {/* Nuevas pantallas de compra */}
      <Stack.Screen name="cart" options={{ title: "Carrito de Compras" }} /> {/* Pantalla del carrito */}
      <Stack.Screen name="address-details" options={{ title: "Detalles de la Dirección" }} /> {/* Pantalla de dirección */}
      <Stack.Screen name="payment-methods" options={{ title: "Métodos de Pago" }} /> {/* Pantalla de métodos de pago */}
      <Stack.Screen name="order-summary" options={{ title: "Resumen de la Compra" }} /> {/* Pantalla de resumen de compra */}

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
