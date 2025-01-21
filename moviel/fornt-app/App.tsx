const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import InterfazMarcas from "./components/InterfazMarcas";
import Registro1 from "./screens/Registro1";
import RecuperarContrasea1 from "./screens/RecuperarContrasea1";
import CorreoVerificaco7 from "./screens/CorreoVerificaco7";
import RegistroIOS9 from "./screens/RegistroIOS9";
import RecuperarContraseaParte3 from "./screens/RecuperarContraseaParte3";
import InicioDeSecion from "./screens/InicioDeSecion";
import ReenviarCorreo6 from "./screens/ReenviarCorreo6";
import RegistroFacebook1 from "./screens/RegistroFacebook1";
import RegistroGoogle5 from "./screens/RegistroGoogle5";
import RegistroIOS2 from "./screens/RegistroIOS2";
import IPhone1415Pro from "./screens/IPhone1415Pro";
import VerificacionDeCorreo2 from "./screens/VerificacionDeCorreo2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "IBMPlexMono-Bold": require("./assets/fonts/IBMPlexMono-Bold.ttf"),
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "IBMPlexSans-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    "Imprima-Regular": require("./assets/fonts/Imprima-Regular.ttf"),
    "Jua-Regular": require("./assets/fonts/Jua-Regular.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Registro"
              component={Registro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarContrasea"
              component={RecuperarContrasea1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorreoVerificaco1"
              component={CorreoVerificaco7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroIOS7"
              component={RegistroIOS9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarContraseaParte1"
              component={RecuperarContraseaParte3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioDeSecion"
              component={InicioDeSecion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReenviarCorreo4"
              component={ReenviarCorreo6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroFacebook3"
              component={RegistroFacebook1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroGoogle2"
              component={RegistroGoogle5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroIOS3"
              component={RegistroIOS2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro"
              component={IPhone1415Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificacionDeCorreo1"
              component={VerificacionDeCorreo2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
