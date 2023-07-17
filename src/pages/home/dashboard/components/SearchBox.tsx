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
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    borderColor: "rgba(220, 220, 220, 1)",
    backgroundColor: "rgba(250, 250, 250, 1)",
    elevation: 1,
    borderWidth: 1,
    justifyContent: "center",
    marginVertical: 4,
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
