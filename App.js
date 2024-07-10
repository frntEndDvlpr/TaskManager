//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import ProjectsFormScreen from "./app/screens/ProjectsFormScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <ProjectsFormScreen />
    </NavigationContainer>
  );
}
