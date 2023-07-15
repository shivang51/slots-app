import { View, Text } from "react-native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useHomeState } from "@pages/home/HomeState";

const Maps = () => {
  const { setState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setState({ isDashboardHome: true });
    }, []),
  );
  return (
    <View>
      <Text>Maps</Text>
    </View>
  );
};

export default Maps;
