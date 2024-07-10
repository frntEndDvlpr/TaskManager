import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProjecstListScreen from "../screens/ProjecstListScreen";
import ProjectsFormScreen from "../screens/ProjectsFormScreen";

const Stak = createNativeStackNavigator();

const ProjectNavigator = () => (
  <Stak.Navigator>
    <Stak.Screen
      name="ProjectsList"
      component={ProjecstListScreen}
      options={{ headerShown: false }}
    />
    <Stak.Screen name="ProjectForm" component={ProjectsFormScreen} />
  </Stak.Navigator>
);

export default ProjectNavigator;
