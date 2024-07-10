import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClientsListScreen from "../screens/ClientsListScreen";
import ClientFormScreen from "../screens/ClientFormScreen";

const Stak = createNativeStackNavigator();

const ClientNavigator = () => (
  <Stak.Navigator>
    <Stak.Screen
      name="ClientsList"
      component={ClientsListScreen}
      options={{ headerShown: false }}
    />
    <Stak.Screen name="ClientForm" component={ClientFormScreen} />
  </Stak.Navigator>
);

export default ClientNavigator;
