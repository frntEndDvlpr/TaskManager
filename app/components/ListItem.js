import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";
import AppIcon from "./AppIcon";

function ListItem({
  image,
  ImageComponent,
  title,
  date,
  assignee,
  project,
  customer,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGreen}>
          <View style={styles.listContainer}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.listDetailsContainer}>
              <View style={styles.dateAsignContainer}>
                {date && <AppText style={styles.date}>{date}</AppText>}
                {assignee && (
                  <AppText style={styles.assignee}>
                    <AppIcon name="account" iconColor={colors.blue} />
                    {assignee}
                  </AppText>
                )}
              </View>
              <AppText style={styles.itemTitle}>{title}</AppText>
              <View style={styles.customerProjectContainer}>
                {customer && (
                  <AppText style={styles.customer}>
                    <AppIcon
                      name="city-variant-outline"
                      iconColor={colors.danger}
                    />
                    {customer}
                  </AppText>
                )}
                {project && (
                  <AppText style={styles.project}>
                    <AppIcon name="folder-pound-outline" />
                    {project}
                  </AppText>
                )}
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  assignee: {
    color: colors.gray,
  },
  customer: {
    color: colors.gray,
    paddingRight: 20,
  },
  customerProjectContainer: {
    flexDirection: "row",
  },
  date: {
    paddingRight: 20,
    color: colors.gray,
  },
  dateAsignContainer: {
    flexDirection: "row",
  },
  itemTitle: {
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  listContainer: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  listDetailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  project: {
    color: colors.gray,
  },
});

export default ListItem;
