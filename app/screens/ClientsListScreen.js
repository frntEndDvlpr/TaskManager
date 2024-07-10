import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialClients = [
  {
    id: 1,
    title: "Company 1",
    contactPerson: "Person 1",
    contactPhone: "6568646",
  },
  {
    id: 2,
    title: "Company 2",
    contactPerson: "Person 2",
    contactPhone: "6568646",
  },
  {
    id: 3,
    title: "Company 3",
    contactPerson: "Person 3",
    contactPhone: "6568646",
  },
];
function ClientsListScreen() {
  const [clients, setclients] = useState(initialClients);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (clients) => {
    setclients(clients.filter((c) => c.id !== clients.id));
  };

  return (
    <>
      <FlatList
        data={initialClients}
        keyExtractor={(client) => client.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            contactPerson={item.contactPerson}
            contactPhone={item.contactPhone}
            onPress={() => console.log("Project Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setclients([
            {
              id: 2,
              title: "Company 2",
              contactPerson: "Person 2",
              contactPhone: "6568646",
            },
          ]);
        }}
      />
    </>
  );
}

export default ClientsListScreen;
