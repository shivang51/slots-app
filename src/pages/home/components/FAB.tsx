import Icon from "react-native-vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

interface IProps {
  label: string;
  onPress: () => void;
}

const FAB = (props: IProps) => {
  return (
    <Pressable onPress={() => props.onPress()} style={styles.container}>
      <Icon name="add" size={24} color={"black"} />
      <Text style={styles.label}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 16,
    bottom: 64,
    right: 16,
    borderRadius: 16,
    backgroundColor: "#e3e3e3",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginLeft: 4,
    fontSize: 20,
    color: "black",
  },
});

export default FAB;
