import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Inicio de sesión" }} />
      <Stack.Screen name="registro" options={{ title: "Registro" }} />
      <Stack.Screen name="recuperar" options={{ title: "Recuperar Contraseña" }} />
      <Stack.Screen name="correo" options={{ title: "Revisar correo" }} /> {/* Aquí se agrega correo */}
      <Stack.Screen name="favoritos" options={{ title: "Favoritos" }} /> {/* Ruta para la pantalla de favoritos */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
