import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClientsListScreen from "../screens/ClientsListScreen";
import ClientFormScreen from "../screens/ClientFormScreen";
import { Text } from "react-native";

const Stak = createStackNavigator();

const ClientNavigator = () => (
  <Stak.Navigator screenOptions={{ presentation: "modal" }}>
    <Stak.Screen
      name="ClientsList"
      component={ClientsListScreen}
      options={{
        headerTitle: (props) => <Text>Clients List</Text>,
      }}
    />

    <Stak.Screen
      name="ClientForm"
      component={ClientFormScreen}
      options={{
        headerTitle: (props) => <Text>New Client</Text>,
        headerBackTitle: "Dismess",
        headerBackTitleStyle: {},
      }}
    />
  </Stak.Navigator>
);

export default ClientNavigator;
