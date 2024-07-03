import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import TasksListScreen from "../screens/TasksListScreen";

const BottomTap = createBottomTabNavigator();

const AppNavigator = () => (
  <BottomTap.Navigator>
    <BottomTap.Screen name="Tasks Listings" component={TasksListScreen} />
    <BottomTap.Screen name="Tasks Form" component={ListingEditScreen} />
    <BottomTap.Screen name="Account" component={AccountScreen} />
  </BottomTap.Navigator>
);
export default AppNavigator;
