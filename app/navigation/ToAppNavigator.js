import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stak = createNativeStackNavigator();

const ToAppNavigator = () => (
  <NavigationContainer>
    <Stak.Navigator>
      <Stak.Screen name="Login" component={LoginScreen} />
      <Stak.Screen name="WelCome" component={AppNavigator} />
    </Stak.Navigator>
  </NavigationContainer>
);

export default ToAppNavigator;
