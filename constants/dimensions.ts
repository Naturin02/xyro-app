import { Dimensions } from "react-native";

// Obtener el ancho y alto de la pantalla
const { width, height } = Dimensions.get("window");

export const ScreenSize = {
  width,
  height,
  isSmallDevice: width < 375, // Verifica si el dispositivo es pequeño
  isLargeDevice: width > 768, // Verifica si el dispositivo es grande
};
