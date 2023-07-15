import { GestureResponderEvent, Image, Pressable } from "react-native";
import Icons from "@utils/Icons";
import React from "react";

const BackButton = (props: {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image
        source={Icons.back}
        style={{ width: 24, height: 24, marginLeft: 8 }}
      />
    </Pressable>
  );
};

export default BackButton;
