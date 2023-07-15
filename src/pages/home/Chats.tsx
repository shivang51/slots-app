import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/utils/GlobalStyles";

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notFound}>No Messages Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },

  notFound: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Chats;
