import { Text, View } from "react-native";
import * as MaterialIcon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import * as module from "module";

const Primary = (props: { label: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 8,
        alignSelf: "flex-start",
        margin: 4,

        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <MaterialIcon.default name={"my-location"} size={24} color={"white"} />
      <Text style={{ marginLeft: 8, color: "white" }}>{props.label}</Text>
    </View>
  );
};

const Secondary = (props: { label: string; icon: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: "flex-start",
        margin: 4,
      }}
    >
      <MaterialIcon.default color={"black"} name={props.icon} size={24} />
      <Text style={{ marginLeft: 8, color: "black" }}>{props.label}</Text>
    </View>
  );
};

export default {
  Primary,
  Secondary,
};
