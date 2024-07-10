import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../app/screens/LoginScreen";
import RgisterScreen from "../../app/screens/RgisterScreen";
import WellcomeScreen from "../../app/screens/WelcomeScreen";
import AppNavigator from "./AppNavigator";

const Stak = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stak.Navigator>
    <Stak.Screen
      name="Welcome"
      component={WellcomeScreen}
      options={{ headerShown: false }}
    />
    <Stak.Screen name="Login" component={LoginScreen} />
    <Stak.Screen name="Register" component={RgisterScreen} />
    <Stak.Screen name="appnavigation" component={AppNavigator} />
  </Stak.Navigator>
);

export default AuthNavigator;
