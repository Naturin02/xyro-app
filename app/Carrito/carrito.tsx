import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { CardField, useStripe, StripeProvider } from "@stripe/stripe-react-native";
import api from "../../context/api";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from 'expo-av'; // Asegúrate de tener instalado expo-av para usar Video

const stripePublishableKey = "pk_test_51Qy03qJH9b2ZpTqVbuiT8BQkGPiBOmwbcZcC8u3jUHc8xueexf5yM6UYpXT1kX7JhUOxtycgV1vvhRebFI7E9SLQ00SK3JXn54"; // Tu clave pública de Stripe

const CarritoScreenWrapper = () => {
  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <CarritoScreen />
    </StripeProvider>
  );
};

const CarritoScreen = () => {
  const { cart, updateQuantity, removeFromCart, totalItems } = useCart();
  const { confirmPayment, isInitialized } = useStripe();

  const [direccionEnvio, setDireccionEnvio] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [nombreDestinatario, setNombreDestinatario] = useState("");
  const [descripcionCasa, setDescripcionCasa] = useState(""); // Campo para descripción de la casa
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false); // Estado para mostrar el modal de carga

  const total = cart.reduce(
    (sum, item) => sum + (parseFloat(item.precio) || 0) * (item.cantidad || 0),
    0
  );

  useEffect(() => {
    if (!isInitialized) {
      console.log("Stripe SDK no está inicializado.");
    } else {
      console.log("Stripe SDK está listo.");
    }
  }, [isInitialized]);

  const handlePayment = async () => {
    if (!direccionEnvio || !codigoPostal || !nombreDestinatario || !descripcionCasa) {
      Alert.alert("Error", "Por favor, llena todos los campos.");
      return;
    }

    if (cart.length === 0) {
      Alert.alert("Error", "El carrito está vacío.");
      return;
    }

    setCargando(true);
    setMensaje("");
    setModalVisible(true); // Mostrar modal de carga

    try {
      const response = await api.post(
        "/stripe/pay",
        {
          amount: total * 100,
          currency: "mxn",
          payment_method: "card",
          description: "Compra en la tienda",
          user_id: 1012,
          product_id: cart[0].id,
          quantity: cart[0].cantidad,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
          },
        }
      );
      console.log("Respuesta de la API:", response.data);
      const paymentIntentData = response.data;

      if (!paymentIntentData.client_secret) {
        throw new Error("No se pudo generar el clientSecret.");
      }

      const { paymentIntent, error } = await confirmPayment(
        paymentIntentData.client_secret,
        {
          paymentMethodType: "Card",
        }
      );

      if (error) {
        setMensaje("Error al procesar el pago.");
        Alert.alert("Error", `No se pudo procesar el pago: ${error.message}`);
        setCargando(false);
        setModalVisible(false); // Cerrar modal
        return;
      }

      if (
        paymentIntent?.status === "Succeeded" ||
        paymentIntent?.status === "succeeded"
      ) {
        Alert.alert("Éxito", "Pago realizado con éxito.");
        console.log("Pedido generado:", {
          productos: cart.map((item) => ({
            productoId: item.id,
            cantidad: item.cantidad,
          })),
          metodoPago: "tarjeta",
          direccionEnvio,
          paymentDetails: { paymentIntentId: paymentIntent.id },
          total,
        });
      } else {
        Alert.alert("Error", "Pago no completado.");
      }

      setCargando(false);
      setModalVisible(false); // Cerrar modal
    } catch (error) {
      console.error("Error en el pago:", error);
      Alert.alert("Error", `Hubo un problema al procesar el pago: ${error.message}`);
      setCargando(false);
      setModalVisible(false); // Cerrar modal
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🛒 Carrito de Compras</Text>
        <Text style={styles.itemCount}>({totalItems} artículos)</Text>
      </View>

      {cart.length === 0 ? (
        <View style={styles.emptyCart}>
          <FontAwesome name="shopping-cart" size={50} color="#ffffff" />
          <Text style={styles.emptyText}>Tu carrito está vacío.</Text>
        </View>
      ) : (
        cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image
              source={{ uri: item.imagen_url }}
              style={styles.cartImage}
            />
            <View style={styles.cartDetails}>
              <Text style={styles.productName}>{item.nombre_producto}</Text>
              <Text style={styles.productPrice}>
                ${(parseFloat(item.precio) || 0).toFixed(2)}
              </Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, Math.max(1, item.cantidad - 1))}
                style={[styles.quantityButton, styles.minusButton]} // Botón menos en rojo
              >
                <FontAwesome name="minus" size={16} color="#ffffff" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.cantidad}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, item.cantidad + 1)}
                style={[styles.quantityButton, styles.plusButton]} // Botón más en verde
              >
                <FontAwesome name="plus" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
              <FontAwesome name="trash" size={20} color="#ff4444" />
            </TouchableOpacity>
          </View>
        ))
      )}

      {/* Dirección de Envío */}
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>Dirección de Envío</Text>
        <TextInput
          value={direccionEnvio}
          onChangeText={setDireccionEnvio}
          style={styles.input}
          placeholder="Ingresa tu dirección"
          placeholderTextColor="#ffffff"
        />
      </View>

      {/* Código Postal */}
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>Código Postal</Text>
        <TextInput
          value={codigoPostal}
          onChangeText={setCodigoPostal}
          style={styles.input}
          placeholder="Ingresa tu código postal"
          placeholderTextColor="#ffffff"
        />
      </View>

      {/* Nombre del destinatario */}
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>Nombre del destinatario</Text>
        <TextInput
          value={nombreDestinatario}
          onChangeText={setNombreDestinatario}
          style={styles.input}
          placeholder="A quién va dirigido el paquete"
          placeholderTextColor="#ffffff"
        />
      </View>

      {/* Descripción de la casa */}
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>Descripción de la casa</Text>
        <TextInput
          value={descripcionCasa}
          onChangeText={setDescripcionCasa}
          style={styles.input}
          placeholder="Descripción del lugar de entrega"
          placeholderTextColor="#ffffff"
        />
      </View>

      {/* Total */}
      <View style={styles.paymentContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>

      {/* Tarjeta */}
      <View style={styles.cardFieldContainer}>
        <CardField
          postalCodeEnabled={false}
          placeholders={{ number: "4242 4242 4242 4242" }}
          cardStyle={styles.cardField}
          style={styles.cardFieldStyle}
        />
      </View>

      {/* Botón de pago (en la parte inferior) */}
      <TouchableOpacity
        onPress={handlePayment}
        style={[styles.payButton, cargando && styles.disabledButton]}
        disabled={cargando}
      >
        <Text style={styles.payButtonText}>
          {cargando ? "Procesando..." : "Pagar Ahora"}
        </Text>
      </TouchableOpacity>

      {/* Modal de carga (con video) */}
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Video
            source={require("../../assets/images/cargando1.mp4")}
            style={styles.video}
            resizeMode="contain"
            repeat={true}
            shouldPlay={true}
          />
          <Text style={styles.loadingText}>Cargando... por favor espere</Text>
        </View>
      </Modal>

      {/* Mensaje de error */}
      {mensaje && <Text style={styles.errorMessage}>{mensaje}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#70E099",
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    flex: 1,
  },
  itemCount: {
    fontSize: 14,
    color: "#bbbbbb",
  },
  emptyCart: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  cartDetails: {
    flex: 1,
  },
  productName: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "500",
  },
  productPrice: {
    color: "#1db954",
    fontSize: 12,
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  quantityButton: {
    padding: 6,
  },
  minusButton: {
    backgroundColor: "#ff4444", // Rojo para el botón de menos
  },
  plusButton: {
    backgroundColor: "#1db954", // Verde para el botón de más
  },
  quantity: {
    color: "#333333",
    fontSize: 14,
    marginHorizontal: 6,
  },
  removeButton: {
    padding: 6,
    marginLeft: 6,
  },
  shippingContainer: {
    marginTop: 12,
  },
  shippingText: {
    color: "#333333",
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    color: "#333333",
    padding: 8,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 12,
  },
  paymentContainer: {
    marginTop: 20,
  },
  totalText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cardFieldContainer: {
    marginTop: 16,
  },
  cardField: {
    backgroundColor: "#ffffff",
    color: "#333333",
    padding: 8,
  },
  cardFieldStyle: {
    width: "100%",
    height: 50,
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: "#70E099",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#666",
  },
  payButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorMessage: {
    color: "#ff6b6b",
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  video: {
    width: "80%",
    height: 200,
  },
  loadingText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default CarritoScreenWrapper;
  