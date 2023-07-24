import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TextBox from "@/components/TextBox";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/utils/GlobalStyles";
import Icons from "@/utils/Icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-paper/lib/typescript/src/components/Icon";
import { SignUpStackScreenProps } from "@/types/route_types";

const Id = ({ route, navigation }: SignUpStackScreenProps<"Id">) => {
  const params = route.params;

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
        onPress={() =>
          navigation.navigate("VerifyId", {
            userRole: params.userRole,
            token: "my-token",
          })
        }
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
    color: "black",
  },
});
