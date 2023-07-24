import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBox from "@/components/TextBox";
import { Colors } from "@/utils/GlobalStyles";
import PrimaryButton from "@/components/PrimaryButton";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import FilePicker from "@/components/FilePicker";
import { SignUpStackScreenProps } from "@/types/route_types";

const MerchantDetails = ({
  navigation,
  route,
}: SignUpStackScreenProps<"MerchantDetails">) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Text style={styles.heading1}>Enter Your Details</Text>
        <Text>Enter the following details to complete signup.</Text>
      </View>

      <Icon name="person-circle-sharp" size={100} color={"black"} />

      <TextBox
        name="fullName"
        placeholder="Enter Your Name"
        // value={formData.fullName}
        // onValueChange={onFormChange}
      />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 0,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TextBox
          placeholder="+91"
          value="+91"
          containerStyle={{
            marginRight: 0,
            width: "15%",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRightWidth: 0,
            paddingRight: 0,
          }}
          style={{ paddingRight: 0, marginRight: 0 }}
          editable={false}
          name="countryCode"
          // onValueChange={onFormChange}
        />
        <View
          style={{
            left: 50,
            position: "absolute",
            width: 1,
            height: 20,
            backgroundColor: "black",
          }}
        ></View>
        <TextBox
          // value={formData.mobileNumber}
          name="mobileNumber"
          placeholder="Mobile Number"
          containerStyle={{
            margin: 0,
            width: "85%",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,

            borderLeftWidth: 0,
          }}
          style={{ paddingLeft: 8 }}
          // onValueChange={onFormChange}
        />
      </View>

      <PrimaryButton
        onPress={() =>
          navigation.navigate("BusinessDetails", { token: route.params.token })
        }
        label="Continue"
        margin_top={8}
      />
    </View>
  );
};

export default MerchantDetails;

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
    letterSpacing: 0.5,
    color: "black",
  },

  subTitle: {
    fontWeight: "400",
    textAlign: "center",
    color: "grey",
  },
});
