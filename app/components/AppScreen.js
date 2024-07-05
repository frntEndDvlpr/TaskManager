import React from "react";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

function AppScreen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AppScreen;
