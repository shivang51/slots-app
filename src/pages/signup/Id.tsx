import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TextBox from "@/components/TextBox";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/utils/GlobalStyles";
import Icons from "@/utils/Icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SignUpStackNavigation } from "./SignUpIndex";
import Icon from "react-native-paper/lib/typescript/src/components/Icon";

interface IParams {
  userRole: "merchant" | "client";
}

const Id = () => {
  const route = useRoute();
  const params = route.params ? (route.params as IParams) : null;
  const navigator = useNavigation<SignUpStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Image
          source={
            params && params.userRole === "merchant"
              ? Icons.merchant
              : Icons.person
          }
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.heading1}>Sign Up</Text>
      </View>
      <TextBox placeholder="Enter Your Email or Phone Number" />
      <TextBox placeholder="Password" password={true} />
      <TextBox placeholder="Confirm Password" password={true} />
      <PrimaryButton
        onPress={() => navigator.navigate("verify_id", params)}
        label="Continue"
      />
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
  },
});
