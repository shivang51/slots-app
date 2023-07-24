import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import TextBox from "@/components/TextBox";
import { GStyles, Colors } from "@/utils/GlobalStyles";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ForgotPasswordStackNavigation } from "./FPIndex";

interface IForm {
  password: string;
  confirm_password: string;
}

const NewPassword = () => {
  const [form, setForm] = useState<IForm>({
    password: "",
    confirm_password: "",
  });
  const navigator = useNavigation<ForgotPasswordStackNavigation>();

  const setData = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading1}>Set New Password</Text>
        <Text style={styles.subTitle}>
          Please choose a password which contains atleast 8 characters, it must
          include an uppercase and lowercase alphabet, a number and an unique
          charachter.
        </Text>
      </View>
      <View style={[GStyles.width_100, { marginBottom: 32 }]}>
        <TextBox
          placeholder="Enter New Password"
          name="password"
          value={form.password}
          onValueChange={setData}
          password={true}
        />
        <TextBox
          placeholder="Confirm Password"
          name="confirm_password"
          value={form.confirm_password}
          onValueChange={setData}
          password={true}
        />
        <PrimaryButton
          label="Continue"
          onPress={() => {
            navigator.dispatch(StackActions.popToTop());
          }}
          margin_top={8}
        />
      </View>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  heading1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    fontWeight: "400",
    textAlign: "left",
    marginBottom: 16,
  },
});
