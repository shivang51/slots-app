import { Pressable, StyleSheet, Text, View } from "react-native";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import FAB from "@pages/home/components/FAB";

const UpdateOffers = () => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: false }));
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.bigLabel}>No current running offers</Text>
      <FAB onPress={() => null} label={"Add Offer"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  singleLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  bigLabel: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginHorizontal: 8,
  },

  label: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    marginHorizontal: 8,
  },
});

export default UpdateOffers;
