import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  title: string;
  children?: React.ReactElement;
  onPress?: () => void;
}
const Card = (props: IProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => (props.onPress ? props.onPress() : null)}
    >
      {props.children}
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(245,245,245)",
    borderColor: "rgb(220,220,220)",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
