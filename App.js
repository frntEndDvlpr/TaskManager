//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen/>
  );
}
