import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ image, ImageComponent, title, date, assignee, project, completionPercentage, customer, onPress, renderRightActions }) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.lightGreen}>
                <View style={styles.listContainer}>
                    {ImageComponent}
                    {image &&<Image style={styles.image} source={image} />}
                    <View style={styles.listDetailsContainer}>
                        <View style={styles.dateAsignContainer}>
                            <AppText style={styles.date}>{date}</AppText>
                            <AppText style={styles.assignee}>{assignee}</AppText>
                        </View>
                        <AppText style={styles.itemTitle}>{title}</AppText>
                        <View style={styles.customerProjectContainer}>
                            <AppText style={styles.customer}>{customer}</AppText>
                            <AppText style={styles.project}>{project}</AppText>
                        </View>
                        <AppText style={styles.completionPercentage}>{completionPercentage}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    assignee: {
        color: colors.gray
    },
    customer: {
        color: colors.gray,
    },
    customerProjectContainer: {
        flexDirection: "row"
    },
    completionPercentage: {
        paddingTop: 5,
    },
    date: {
        paddingRight: 20,
        color: colors.gray
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
        left: 60,
    }
})

export default ListItem;