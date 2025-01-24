import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle:
          route.name === "marcas"
            ? { display: "flex" } // Mostrar en "marcas"
            : { display: "none" }, // Ocultar en otras pantallas
      })}
    />
  );
}

