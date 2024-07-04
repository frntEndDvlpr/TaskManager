import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required().label("Company Name"),
  contactPerson: Yup.string().label("Contact Person"),
  contactPhone: Yup.string().label("Contact Phone"),
});

function ClientScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            companyName: "",
            contactPerson: "",
            contactPhone: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="companyName"
            placeholder="Company Name"
            maxLength={100}
            autoFocus
            icon="city-variant-outline"
          />
          <AppFormField
            name="contactPerson"
            placeholder="Contact Person"
            maxLength={100}
            icon="account"
          />
          <AppFormField
            name="contactPhone"
            placeholder="Contact Phone"
            icon="phone"
            keyboardType="phone-pad"
          />
          <SubmitButton title="Save" />
        </AppForm>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});

export default ClientScreen;
