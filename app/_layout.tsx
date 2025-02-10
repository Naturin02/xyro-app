import { Stack } from "expo-router";
import { CartProvider } from "../app/context/CartContext"; // Importamos el contexto

export default function Layout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CartProvider>
  );
}
