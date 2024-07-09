import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import colors from "../config/colors";

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    date: "1/1/2024",
    assignee: "Assignee",
  },
  {
    id: 2,
    title: "Task 2",
    date: "6/19/2024",
    assignee: "Ahmed",
    project: "Project 2",
  },
  {
    id: 3,
    title: "Task 3",
    date: "7/19/2024",
    assignee: "Ali",
    project: "Project 3",
    customer: "XYZ",
  },
];
function TasksListScreen(props) {
  const [tasks, setTasks] = useState(initialTasks);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <>
      <FlatList
        data={initialTasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            date={item.date}
            assignee={item.assignee}
            project={item.project}
            customer={item.customer}
            image={item.image}
            onPress={() => console.log("Task Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setTasks([
            {
              id: 2,
              title: "Task 2",
              date: "6/19/2024",
              assignee: "Ahmed",
              project: "Project 2",
              customer: "ABC",
            },
          ]);
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  text: { fontSize: 30, color: colors.white },
});

export default TasksListScreen;
