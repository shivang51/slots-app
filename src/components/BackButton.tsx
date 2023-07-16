import { GestureResponderEvent, Image, Pressable } from "react-native";
import Icons from "@utils/Icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const BackButton = (props: {
  onPress: ((e?: GestureResponderEvent) => void) | null | undefined;
}) => {
  return (
    <Pressable onPress={() => (props.onPress ? props.onPress() : null)}>
      <Image
        source={Icons.back}
        style={{ width: 24, height: 24, marginLeft: 8 }}
      />
    </Pressable>
  );
};

export default BackButton;
