import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBox from "@/components/TextBox";
import { Colors } from "@/utils/GlobalStyles";
import PrimaryButton from "@/components/PrimaryButton";
import Icon from "react-native-vector-icons/Ionicons";
import SecondaryButton from "@/components/SecondaryButton";
import FilePicker from "@/components/FilePicker";
import { ScrollView } from "react-native-gesture-handler";
import { SignUpStackNavigation } from "./SignUpIndex";
import { StackActions, useNavigation } from "@react-navigation/native";

const BuisnessDetails = () => {
  const navigation = useNavigation<SignUpStackNavigation>();
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 16,
          paddingHorizontal: 32,
        }}
      >
        <Text style={styles.heading1}>Enter Your Business Details</Text>
        <Text>Enter the following details to complete signup.</Text>
      </View>
      <ScrollView style={{ width: "100%", paddingHorizontal: 32 }}>
        <TextBox
          name="fullName"
          placeholder="Enter Your Business Name"
          // value={formData.fullName}
          // onValueChange={onFormChange}
        />
        <FilePicker
          placeholder="Banner for your business"
          buttonLabel="Choose Image"
        />

        <View style={{ width: "100%" }}>
          <Text style={styles.smallBoldTitle}>
            Single Document containing license or certificates
          </Text>
        </View>

        <FilePicker placeholder="Can be an image or pdf" buttonLabel="Choose" />
        <TextBox
          name="addressLine"
          placeholder="Address Line 1"
          // value={formData.addressLine}
          // onValueChange={onFormChange}
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
            // value={formData.pinCode}
            // onValueChange={onFormChange}
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
          // value={formData.city}
          // onValueChange={onFormChange}
        />

        <TextBox
          name="state"
          placeholder="State"
          // value={formData.state}
          // onValueChange={onFormChange}
        />

        <TextBox
          name="country"
          placeholder="Country"
          // value={formData.country}
          // onValueChange={onFormChange}
        />
        <PrimaryButton
          onPress={() => navigation.dispatch(StackActions.replace("home"))}
          label="Continue"
          margin_top={8}
        />
      </ScrollView>
    </View>
  );
};

export default BuisnessDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  heading1: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
  },

  subTitle: {
    fontWeight: "400",
    textAlign: "center",
  },

  smallBoldTitle: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    marginVertical: 4,
    marginTop: 8,
  },
});
