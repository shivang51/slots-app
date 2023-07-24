import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import TextBox from "@/components/TextBox";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/utils/GlobalStyles";
import Icons from "@/utils/Icons";
import { useNavigation } from "@react-navigation/native";
import TextButton from "@/components/TextButton";
import { black } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import SecondaryButton from "@/components/SecondaryButton";

interface IForm {
  fullName: string;
  countryCode: string;
  mobileNumber: string;
  addressLine: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
}

const UserDetails = () => {
  // const navigator = useNavigation<SignUpStackNavigation>();

  const [formData, setFormData] = useState<IForm>({
    fullName: "",
    countryCode: "+91",
    mobileNumber: "",
    addressLine: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
  });

  const onFormChange = (name: string, value: string, _: number) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Text style={styles.heading1}>Enter Your Details</Text>
        <Text>Enter the following details to complete signup.</Text>
      </View>

      <TextBox
        name="fullName"
        placeholder="Enter Your Full Name"
        value={formData.fullName}
        onValueChange={onFormChange}
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
          onValueChange={onFormChange}
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
          value={formData.mobileNumber}
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
          onValueChange={onFormChange}
        />
      </View>

      <TextBox
        name="addressLine"
        placeholder="Address Line 1"
        value={formData.addressLine}
        onValueChange={onFormChange}
      />

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextBox
          name="pinCode"
          placeholder="PIN Code"
          containerStyle={{ width: "60%" }}
          value={formData.pinCode}
          onValueChange={onFormChange}
        />
        <SecondaryButton
          label="Check"
          style={{
            paddingHorizontal: 16,
            margin: 0,
            width: "35%",
            paddingVertical: 8,
            // borderColor: "green",
          }}
          labelStyle={{
            fontSize: 16,
            // color: "green",
          }}
        />
      </View>
      <TextBox
        name="city"
        placeholder="City"
        value={formData.city}
        onValueChange={onFormChange}
      />

      <TextBox
        name="state"
        placeholder="State"
        value={formData.state}
        onValueChange={onFormChange}
      />

      <TextBox
        name="country"
        placeholder="Country"
        value={formData.country}
        onValueChange={onFormChange}
      />
      <PrimaryButton
        // onPress={() => navigator.navigate("verify_id")}
        label="Continue"
      />
    </View>
  );
};

export default UserDetails;

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

  subTitle: {
    fontWeight: "400",
    textAlign: "center",
  },
});
