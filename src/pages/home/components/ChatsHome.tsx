import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@utils/GlobalStyles";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";

const ChatsHome = () => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: true }));
    }, [])
  );
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
    color: "black",
  },
});

export default ChatsHome;
