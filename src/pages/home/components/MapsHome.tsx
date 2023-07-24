import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useHomeState } from "@pages/home/HomeState";
import { Colors } from "@utils/GlobalStyles";

const MapsHome = () => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: true }));
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.notFound}>Coming Soon</Text>
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
    color: "black",
  },
});

export default MapsHome;
