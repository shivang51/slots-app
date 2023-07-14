import {
  StyleSheet,
  Text,
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
  style?: StyleProp<TextStyle>;
}

const TextButton = (props: IProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={[styles.text_button, props.style ?? null]}>
        {props.label}
      </Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  text_button: {
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "700",
    color: Colors.black,
    textAlign: "center",
  },
});
