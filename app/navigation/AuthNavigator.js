import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/";
import RgisterScreen from "../screens/RgisterScreen";
import WellcomeScreen from "../screens/WelcomeScreen";

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
  </Stak.Navigator>
);

export default AuthNavigator;
