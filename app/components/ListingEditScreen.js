import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  assignee: Yup.string().required().label("Assignee"),
  client: Yup.string().label("Client"),
  department: Yup.string().label("Department"),
  description: Yup.string().label("Description"),
  ends: Yup.string().required().label("Ends"),
  project_code: Yup.string().required().label("Project Code"),
  starts: Yup.string().required().label("Stats"),
  title: Yup.string().required().label("Title"),
});

function ListingEditScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        initialValues={{
          assignee: "",
          client: "",
          department: "",
          description: "",
          ends: "",
          project_code: "",
          starts: "",
          title: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Task"
          maxLength={100}
          autoFocus
          icon="clipboard-clock-outline"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
          icon="file-document-edit-outline"
        />
        <AppFormField
          name="project-code"
          placeholder="Project Code"
          icon="folder-pound-outline"
        />
        <AppFormField
          name="starts"
          placeholder="Starts"
          icon="calendar-start"
        />
        <AppFormField name="ends" placeholder="Ends" icon="calendar-end" />
        <AppFormField name="assignee" placeholder="Assignee" icon="account" />
        <AppFormField
          name="department"
          placeholder="Department"
          icon="office-building-cog-outline"
        />
        <AppFormField
          name="client"
          placeholder="Client"
          icon="city-variant-outline"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ListingEditScreen;
