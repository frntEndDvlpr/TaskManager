import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProjecstListScreen from "../screens/ProjecstListScreen";
import ProjectsFormScreen from "../screens/ProjectsFormScreen";
import EmployeesListScreen from "../screens/EmployeesListScreen";
import EmployeeFormScreen from "../screens/EmployeeFormScreen";

const Stak = createNativeStackNavigator();

const EmployeeNavigator = () => (
  <Stak.Navigator>
    <Stak.Screen
      name="EmployeesList"
      component={EmployeesListScreen}
      options={{ headerShown: false }}
    />
    <Stak.Screen name="EmployeeForm" component={EmployeeFormScreen} />
  </Stak.Navigator>
);

export default EmployeeNavigator;
