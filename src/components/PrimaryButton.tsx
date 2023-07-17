import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors, GStyles } from "../utils/GlobalStyles";

interface IProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  label: string;
  margin_top?: number;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton = (props: IProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        { marginTop: props.margin_top ?? 0 },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text style={styles.label}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: Colors.black,
    width: "100%",
    paddingVertical: 15,
  },

  label: {
    fontSize: 22,
    color: Colors.white,
    textAlign: "center",
  },
});

export default PrimaryButton;
