import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import colors from "../config/colors";

import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="account"
          size={150}
          color={colors.secondary}
        />
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton
          title="login"
          //onPress={() => navigation.navigate("Navigator")}
        />
      </AppForm>
      <Button title="Forgot Your Password?" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  icon: {
    alignItems: "center",
    marginTop: 0,
  },
});

export default LoginScreen;
