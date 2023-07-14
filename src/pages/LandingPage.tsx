import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SlotsTitle from "../components/SlotsTitle";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { Colors } from "../utils/GlobalStyles";
import GoogleButton from "../components/GoogleButton";
import { StackActions, useNavigation } from "@react-navigation/native";
import { LOGIN_PAGE_ID } from "./LogInPage";
// import LinkButton from "../components/LinkButton";
import TextButton from "../components/TextButton";
import LinkTextButton from "../components/LinkTextButton";
import { RootStackNavigation } from "@/pages/Index";

export const LANDING_PAGE_ID: string = "index";
const LandingPage = ({ navigation }: { navigation: RootStackNavigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.in_container}>
        <View>
          <SlotsTitle />
          <Text style={styles.subTitle}>Book your apointments</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.margin_bootom_27}>
            <PrimaryButton
              onPress={() => navigation.navigate("SignIn")}
              label="Log In"
            />
          </View>
          <View style={styles.margin_bootom_27}>
            <SecondaryButton
              onPress={() => navigation.navigate("SignUp")}
              label="Sign Up"
            />
          </View>
          <TextButton
            onPress={() =>
              navigation.dispatch(StackActions.replace("HomeRoute"))
            }
            label="Continue as guest"
          />
        </View>
        <View style={styles.divider}>
          <View style={styles.line}></View>
          <View style={styles.circle}></View>
          <View style={styles.line}></View>
        </View>
        <Pressable onPress={() => null}>
          <GoogleButton />
        </Pressable>
        <TextButton
          onPress={() => {
            navigation.navigate("SignUp", { type: "merchant" });
          }}
          label="Continue as merchant"
        />
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: Colors.white,
  },
  in_container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 500,
  },

  margin_bootom_27: {
    marginBottom: 27,
  },

  buttons: {
    width: "100%",
  },

  subTitle: {
    fontWeight: "400",
    textAlign: "center",
  },
  text_button: {
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
  },

  divider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "visible",
  },
  line: {
    height: 2,
    backgroundColor: "#929292",
    width: "40%",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#929292",
    zIndex: 10,
  },
});