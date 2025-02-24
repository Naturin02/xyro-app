import React from "react";
import { Slot } from "expo-router";
import {CartProvider} from "../context/CartContext"// Ruta correcta al contexto

export default function Layout() {
  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
