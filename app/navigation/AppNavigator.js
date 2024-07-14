import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/TaskFormScreen";
import TasksListScreen from "../screens/TasksListScreen";
import colors from "../config/colors";
import AddTaskButton from "./AddTaskButton";

const BottomTap = createBottomTabNavigator();

const AppNavigator = () => (
  <BottomTap.Navigator>
    <BottomTap.Screen
      name="TasksListings"
      component={TasksListScreen}
      options={{
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
      name="TasksForm"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddTaskButton onPress={() => navigation.navigate("TasksForm")} />
        ),
      })}
    />
    <BottomTap.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
  </BottomTap.Navigator>
);
export default AppNavigator;
