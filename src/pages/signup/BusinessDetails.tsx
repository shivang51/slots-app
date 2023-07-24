import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBox from "@/components/TextBox";
import { Colors } from "@/utils/GlobalStyles";
import PrimaryButton from "@/components/PrimaryButton";
import Icon from "react-native-vector-icons/Ionicons";
import SecondaryButton from "@/components/SecondaryButton";
import FilePicker from "@/components/FilePicker";
import { ScrollView } from "react-native-gesture-handler";
import { StackActions, useNavigation } from "@react-navigation/native";
import {
  RootStackScreenProps,
  SignUpStackScreenProps,
} from "@/types/route_types";

const BusinessDetails = ({
  navigation,
  route,
}: SignUpStackScreenProps<"BusinessDetails">) => {
  const rootNavigation =
    useNavigation<RootStackScreenProps<"Home">["navigation"]>();

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", paddingHorizontal: 32 }}>
        <View
          style={{
            alignItems: "center",
            marginBottom: 16,
            paddingHorizontal: 32,
          }}
        >
          <Text style={styles.heading1}>Enter Your Business Details</Text>
          <Text style={styles.subTitle}>
            Enter the following details to complete signup.
          </Text>
        </View>
        <TextBox
          name="fullName"
          placeholder="Enter Your Business Name"
          // value={formData.fullName}
          // onValueChange={onFormChange}
        />
        <View style={{ width: "100%", marginVertical: 8 }}>
          <Text style={styles.smallBoldTitle}>
            Select a banner for your business
          </Text>
          <FilePicker
            placeholder="Select an image"
            buttonLabel="Choose Image"
            style={{ marginVertical: 4 }}
          />
        </View>

        <View style={{ width: "100%" }}>
          <Text style={styles.smallBoldTitle}>
            Single Document containing license or certificates
          </Text>
          <FilePicker
            placeholder="Can be an image or pdf"
            buttonLabel="Choose"
            style={{ marginVertical: 4 }}
          />
        </View>

        <TextBox
          name="addressLine"
          placeholder="Address Line 1"
          // value={formData.addressLine}
          // onValueChange={onFormChange}
          containerStyle={{ marginVertical: 8 }}
        />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
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
          containerStyle={{ marginVertical: 8 }}
        />

        <TextBox
          name="state"
          placeholder="State"
          // value={formData.state}
          // onValueChange={onFormChange}
          containerStyle={{ marginVertical: 8 }}
        />

        <TextBox
          name="country"
          placeholder="Country"
          // value={formData.country}
          // onValueChange={onFormChange}
          containerStyle={{ marginVertical: 8 }}
        />
        <PrimaryButton
          onPress={() => {
            navigation.popToTop();
            rootNavigation.popToTop();
            rootNavigation.dispatch(
              StackActions.replace("Home", {
                userRole: "merchant",
                routeParams: {
                  screen: "DrawerRoot",
                  params: {
                    screen: "Home",
                    params: {
                      screen: "Home",
                      params: {
                        screen: "Dashboard",
                        params: { userId: "merchant-101" },
                      },
                    },
                  },
                },
              })
            );
          }}
          label="Continue"
          margin_top={8}
        />
      </ScrollView>
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingTop: 4,
  },
  heading1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },

  subTitle: {
    fontWeight: "400",
    textAlign: "center",
    color: "grey",
  },

  smallBoldTitle: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    marginVertical: 4,
    marginTop: 8,
    color: "black",
  },
});
