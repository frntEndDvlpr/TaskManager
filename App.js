//import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import EmployeeNavigator from "./app/navigation/EmployeeNavigator";
import ClientNavigator from "./app/navigation/ClientNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import ProjectNavigator from "./app/navigation/ProjectNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import TaskNavigator from "./app/navigation/TaskNavigator";
import SettingsScreen from "./app/screens/SettingsScreen";
import SettingsNavigator from "./app/navigation/SettingsNavigator";

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Location from "expo-location";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const getCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMsg("Error getting location");
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        Current Location:{" "}
        {location
          ? `${location.coords.latitude}, ${location.coords.longitude}`
          : "Unknown"}
      </Text>
      <Button title="Get Location" onPress={getCurrentLocation} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default App;

//export default function App() {
//  return (
//    <NavigationContainer theme={NavigationTheme}>
//      <AuthNavigator />
//    </NavigationContainer>
//  );
//}
