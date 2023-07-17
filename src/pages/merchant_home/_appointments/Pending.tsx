import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/utils/GlobalStyles";

const Pending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notFound}>No Appointments Found</Text>
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

export default Pending;
