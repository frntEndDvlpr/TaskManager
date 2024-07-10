//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import EmployeeNavigator from "./app/navigation/EmployeeNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import ProjectNavigator from "./app/navigation/ProjectNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <EmployeeNavigator />
    </NavigationContainer>
  );
}
