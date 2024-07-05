//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import ClientScreen from "./app/screens/ClientScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
