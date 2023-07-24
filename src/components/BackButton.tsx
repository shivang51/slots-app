import { GestureResponderEvent, Image, Pressable } from "react-native";
import Icons from "@utils/Icons";
import React from "react";
import { Button, IconButton } from "react-native-paper";
import { Colors } from "@utils/GlobalStyles";

const BackButton = (props: {
  onPress: ((e: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <IconButton
      iconColor={"black"}
      icon={Icons.back}
      onPress={props.onPress}
      rippleColor={Colors.lightgray}
      size={24}
      style={{ justifyContent: "center" }}
    />
  );
};

export default BackButton;
