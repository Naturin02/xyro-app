import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CarritoScreen from "./Carrito/carrito"; // Ruta a tu pantalla de carrito
import PaymentScreen from "./Carrito/PaymentScreen"; // Ruta a tu pantalla de pago

const Stack = createStackNavigator();

const App = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51Qy03qJH9b2ZpTqVbuiT8BQkGPiBOmwbcZcC8u3jUHc8xueexf5yM6UYpXT1kX7JhUOxtycgV1vvhRebFI7E9SLQ00SK3JXn54"
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Carrito">
          <Stack.Screen
            name="Carrito"
            component={CarritoScreen}
            options={{ title: "Carrito de Compras" }}
          />
          <Stack.Screen
            name="Pago"
            component={PaymentScreen}
            options={{ title: "Pago con Stripe" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

export default App;