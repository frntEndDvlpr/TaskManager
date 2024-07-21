import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Platform } from "react-native";

import ListItem from "../components/ListItem";
import TaskListIcon from "../components/TaskListIcon";

const menuItems = [
  {
    title: "Clients",
    icon: { name: "city-variant-outline" },
  },
  {
    title: "Projects",
    icon: { name: "folder-pound-outline" },
  },
  {
    title: "Employees",
    icon: { name: "account-tie" },
  },
];
function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            ImageComponent={
              <TaskListIcon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: Platform.OS === "android" ? 20 : 0 },
});

export default SettingsScreen;
