import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@utils/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { SignUpStackNavigation } from "@pages/signup/SignUpIndex";
import { TabNavigationProp } from "@pages/_home/HomeTabNavigation";
import TextBox from "@components/TextBox";
import SecondaryButton from "@components/SecondaryButton";
import PrimaryButton from "@components/PrimaryButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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

const FriendsDetails = () => {
  const navigator = useNavigation<TabNavigationProp>();

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

  const [saveInfo, setSaveInfo] = useState(false);

  const onFormChange = (name: string, value: string, _: number) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Text style={styles.heading1}>Enter Your Friends Details</Text>
        <Text>Enter the following details to continue.</Text>
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

      <BouncyCheckbox
        style={{ padding: 16, justifyContent: "center", width: "100%" }}
        fillColor={"black"}
        textStyle={{ textDecorationLine: "none", color: "black" }}
        isChecked={saveInfo}
        onPress={() => setSaveInfo(!saveInfo)}
        text={"Save details for future use"}
        // style={styles.checkbox}
      />
      <PrimaryButton
        onPress={() => navigator.navigate("confirm_appointment")}
        label="Confirm Appointment"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    padding: 16,
  },

  notFound: {
    fontSize: 24,
    fontWeight: "bold",
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

export default FriendsDetails;
