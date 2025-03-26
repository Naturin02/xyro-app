import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { CardField, useStripe, StripeProvider } from "@stripe/stripe-react-native";
import { useRouter } from "expo-router";

const stripeKey = "pk_test_51Qy03qJH9b2ZpTqVbuiT8BQkGPiBOmwbcZcC8u3jUHc8xueexf5yM6UYpXT1kX7JhUOxtycgV1vvhRebFI7E9SLQ00SK3JXn54";

const PaymentScreen = () => {
  return (
    <StripeProvider publishableKey={stripeKey}>
      <PaymentContent />
    </StripeProvider>
  );
};

const PaymentContent = () => {
  const { createPaymentMethod } = useStripe();
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);
  const [shippingAddress, setShippingAddress] = useState("");
  const [message, setMessage] = useState("");
  const [purchaseStatus, setPurchaseStatus] = useState(null);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!cardDetails?.complete) {
      Alert.alert("Error", "Por favor, completa todos los campos de la tarjeta");
      return;
    }

    setLoading(true);
    setMessage("");
    setPurchaseStatus(null);

    try {
      const { error, paymentMethod } = await createPaymentMethod({
        type: "Card",
      });

      if (error) {
        setMessage("Error al procesar los detalles de la tarjeta.");
        setPurchaseStatus("error");
        setLoading(false);
        return;
      }

      const orderData = {
        products: [
          {
            productId: "product._id", // Reemplaza con el ID del producto real
            quantity: 1, // Reemplaza con la cantidad real
          },
        ],
        paymentMethod: "card",
        shippingAddress: shippingAddress || "Dirección predeterminada",
        paymentDetails: {
          paymentMethodId: paymentMethod.id,
          cardDetails: "Pago con Stripe",
        },
      };

      // Aquí harías la llamada a tu API para procesar el pago
      // const response = await axios.post('/payments', orderData);

      // Simulamos una respuesta exitosa
      const response = { data: { compra: true } };

      if (response.data.compra) {
        setPurchaseStatus("success");
        setMessage("Compra confirmada");
        setTimeout(() => {
          router.back();
        }, 3000);
      } else {
        setPurchaseStatus("error");
        setMessage("Error al confirmar la compra.");
        setTimeout(() => {
          router.back();
        }, 3000);
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      setPurchaseStatus("error");
      setMessage("Ocurrió un error al procesar el pago.");
      setTimeout(() => {
        router.back();
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        <Text style={styles.title}>Confirmar Compra</Text>

        <View style={styles.productContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Reemplaza con la URL de la imagen del producto
            style={styles.productImage}
          />
          <Text style={styles.productName}>Nombre del Producto</Text>
          <Text style={styles.productPrice}>Precio: $100.00</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Dirección de Envío"
          value={shippingAddress}
          onChangeText={setShippingAddress}
        />

        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
            expiration: "MM/AA",
            cvc: "CVC",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#333333",
            fontSize: 16,
            placeholderColor: "#BBBBBB",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#DDDDDD",
          }}
          style={styles.cardField}
          onCardChange={(details) => setCardDetails(details)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text style={styles.buttonText}>Pagar Ahora</Text>
          )}
        </TouchableOpacity>

        {message && (
          <Text style={styles.messageText}>{message}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 24,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  productContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#666666",
  },
  input: {
    height: 50,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cardField: {
    height: 50,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0066cc",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  messageText: {
    marginTop: 16,
    textAlign: "center",
    color: "#333333",
  },
});

export default PaymentScreen;