import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Inicio de sesión" }} />
      <Stack.Screen name="registro" options={{ title: "Registro" }} /> {/* Asegúrate de que está aquí */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
