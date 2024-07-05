import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppScreen from "../components/AppScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Username"),
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

function RgisterScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="name"
            placeholder="Username"
            maxLength={100}
            autoFocus
            icon="account"
          />
          <AppFormField
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            icon="email"
            autoCapitalize="none"
            autoCorrect="none"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            icon="lock"
            keyboardType="emai-address"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});

export default RgisterScreen;
