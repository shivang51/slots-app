import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors, GStyles } from "@/utils/GlobalStyles";
import TextBox from "@components/TextBox";
import PrimaryButton from "@components/PrimaryButton";
import TextButton from "@components/TextButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigation } from "@/pages/Index";

export const LOGIN_PAGE_ID: string = "login";

interface IForm {
  email: string;
  password: string;
}

const LogInPage = () => {
  const [form, setForm] = useState<IForm>({ email: "tesdt", password: "gobo" });
  const naviagation = useNavigation<RootStackNavigation>();

  const setData = (name: string, value: string, _: number) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="login" size={32} color={Colors.black} />
          <Text style={styles.heading1}>LOGIN</Text>
        </View>
        <View style={GStyles.width_100}>
          <TextBox
            placeholder="Enter Your Email / Phone"
            name="email"
            value={form.email}
            onValueChange={setData}
          />
          <TextBox
            placeholder="Enter Your Password"
            password={true}
            name="password"
            value={form.password}
            onValueChange={setData}
          />
          <PrimaryButton label="Continue" onPress={() => {}} margin_top={8} />
        </View>
        <TextButton
          onPress={() => {
            naviagation.navigate("ForgotPassowrd");
          }}
          label="Forgot Password?"
        />
      </View>
    </View>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  inner_container: {
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 400,
  },
  heading1: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
