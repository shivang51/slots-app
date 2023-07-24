import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import TextBox from "@/components/TextBox";
import { GStyles } from "@/utils/GlobalStyles";
import { Colors } from "@/utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { ForgotPasswordStackNavigation } from "./FPIndex";

export const FORGOT_PASSWORD_PAGE_1_ID: string = "/email";

interface IForm {
  email: string;
}

const Id = () => {
  const [form, setForm] = useState<IForm>({ email: "" });
  const navigator = useNavigation<ForgotPasswordStackNavigation>();

  const setData = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>
        Enter Your Registered Email or Phone Number
      </Text>
      <View style={GStyles.width_100}>
        <TextBox
          placeholder="Enter Your Email / Phone"
          name="email"
          value={form.email}
          onValueChange={setData}
        />
        <PrimaryButton
          label="Continue"
          onPress={() => {
            navigator.navigate("verify_id");
          }}
          margin_top={8}
        />
      </View>
    </View>
  );
};

export default Id;

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
    margin: 16,
    color: "black",
  },
});
