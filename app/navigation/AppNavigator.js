import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import colors from "../config/colors";
import TaskNavigator from "./TaskNavigator";
import AppText from "../components/AppText";
import SettingsNavigator from "./SettingsNavigator";

const BottomTap = createBottomTabNavigator();

const AppNavigator = () => (
  <BottomTap.Navigator>
    <BottomTap.Screen
      name="TasksListings"
      component={TaskNavigator}
      options={{
        title: () => <AppText>Tasks</AppText>,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
    <BottomTap.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: () => <AppText>Account</AppText>,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
    <BottomTap.Screen
      name="settings"
      component={SettingsNavigator}
      options={{
        title: () => <AppText>Settings</AppText>,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="cog"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
  </BottomTap.Navigator>
);
export default AppNavigator;
