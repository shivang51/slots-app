import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { Colors } from "@utils/GlobalStyles";

const SearchBox = () => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.textArea} placeholder="Search for services" />

      <Icon
        style={styles.button}
        // onPress={() => null}
        name="search"
        size={24}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    paddingHorizontal: 26,
    paddingVertical: 8,
    borderRadius: 32,
    borderColor: Colors.black,
    borderWidth: 2,
    justifyContent: "center",
  },
  textArea: {
    color: Colors.black,
    fontSize: 15,
  },
  button: {
    position: "absolute",
    right: 26,
  },
});
