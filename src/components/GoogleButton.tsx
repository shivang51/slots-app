import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Icons from "@/utils/Icons";
// import { Colors } from "../globals/GlobalStyles";

const GoogleButton = () => {
  return (
    <Pressable style={styles.googleButton}>
      <Image
        style={[styles.googleIcon1]}
        resizeMode="cover"
        source={Icons.google}
      />
      <Text style={styles.label}>Continue With Google</Text>
    </Pressable>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  label: {
    marginLeft: 8,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    color: "black",
  },
  googleIcon1: {
    width: 28,
    height: 28,
  },
  googleButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    padding: 16,
  },
});
