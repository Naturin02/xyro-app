import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import CarritoScreen from "./Carrito/carrito"; // Ruta del carrito

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51Qy03qJH9b2ZpTqVbuiT8BQkGPiBOmwbcZcC8u3jUHc8xueexf5yM6UYpXT1kX7JhUOxtycgV1vvhRebFI7E9SLQ00SK3JXn54">
      <CarritoScreen />
    </StripeProvider>
  );
}
