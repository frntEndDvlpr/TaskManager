import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  FlatList,
  StatusBar,
} from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";

const menuItems = [
  {
    title: "My Tasks",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Emails",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ListItem
        title="Abbas Muhammad"
        customer="abbassalama2@gmail.com"
        image={require("../assets/SOMS-icon.png")}
      />
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginVertical: 20,
  },
});

export default AccountScreen;
