import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

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
  );
}

export default TasksListScreen;
