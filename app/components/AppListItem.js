import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import AppIcon from "./AppIcon";

function AppListItem({ title, subTitle, icon }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {icon && <AppIcon>{icon}</AppIcon>}
        <AppText>{title}</AppText>
        {subTitle && <AppText>{subTitle}</AppText>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppListItem;
