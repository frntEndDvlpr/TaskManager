import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import TaskListItem from "../components/TaskListItem";
import TaskListIcon from "../components/TaskListIcon";
import AppListItem from "../components/AppListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppListItem title="Clients" subTitle="lskfskg" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: Platform.OS === "android" ? 20 : 0 },
});

export default SettingsScreen;
