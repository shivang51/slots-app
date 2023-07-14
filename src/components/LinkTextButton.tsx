import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Colors, GStyles } from "../utils/GlobalStyles";
import { Link } from "expo-router";
import { Href } from "expo-router/build/link/href";

interface IProps {
  label: string;
  href: Href;
}

const LinkTextButton = (props: IProps) => {
  return (
    <Link href={props.href} style={styles.container} asChild>
      <Pressable
        style={{
          width: "100%",
        }}
      >
        <Text style={styles.label}>{props.label}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  label: {
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
  },
});

export default LinkTextButton;
