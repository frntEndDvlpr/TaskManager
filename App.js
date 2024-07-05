//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import ClientScreen from "./app/screens/ClientScreen";

export default function App() {
  return <ClientScreen />;
}
