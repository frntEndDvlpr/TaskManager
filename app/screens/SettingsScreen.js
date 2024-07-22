import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "../components/AppText";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import TaskListIcon from "../components/TaskListIcon";

function SettingsScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <AppIcon
            name="city-variant-outline"
            backgroundColor={colors.secondary}
          />
          <View style={styles.innerContainer}>
            <AppText style={styles.titl}>Customer</AppText>
            <ListItemSeparator />
            <AppText style={styles.subTitle}>Just a long text to test</AppText>
          </View>
          <TaskListIcon
            name="chevron-right"
            iconColor={colors.darkGrey}
            size={50}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <AppIcon name="account-group" backgroundColor={colors.primary} />
          <View style={styles.innerContainer}>
            <AppText style={styles.titl}>Employees</AppText>
            <ListItemSeparator />
            <AppText style={styles.subTitle}>Just a long text to test</AppText>
          </View>
          <TaskListIcon
            name="chevron-right"
            iconColor={colors.darkGrey}
            size={50}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <AppIcon
            name="folder-multiple-outline"
            backgroundColor={colors.danger}
          />
          <View style={styles.innerContainer}>
            <AppText style={styles.titl}>Projects</AppText>
            <ListItemSeparator />
            <AppText style={styles.subTitle}>Just a long text to test</AppText>
          </View>
          <TaskListIcon
            name="chevron-right"
            iconColor={colors.darkGrey}
            size={50}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "auto",
    height: 70,
    alignItems: "center",
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 40,
    padding: 15,
    justifyContent: "space-between",
  },
  mainContainer: { backgroundColor: colors.lightGrey, flex: 1 },
  titl: { fontWeight: "bold" },
  innerContainer: { marginLeft: 10, width: "70%" },
  subTitle: { marginTop: 5 },
});

export default SettingsScreen;
