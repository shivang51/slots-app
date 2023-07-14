import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { Colors } from "../utils/GlobalStyles";

interface IProps {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const SecondaryButton = (props: IProps) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "stretch",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: Colors.black,
    borderWidth: 2,
    backgroundColor: Colors.white,
    width: "100%",
    paddingVertical: 15,
  },

  label: {
    fontSize: 22,
    color: Colors.black,
    textAlign: "center",
  },
});

export default SecondaryButton;
