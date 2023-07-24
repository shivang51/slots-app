import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "./Upcoming";
import Pending from "./Pending";
import Previous from "./Previous";
import { Colors } from "@utils/GlobalStyles";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";

const AppointmentsNavigation = createMaterialTopTabNavigator();
const AppointmentsIndex = () => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: true }));
    }, [])
  );

  return (
    <AppointmentsNavigation.Navigator
      screenOptions={{
        title: "My Appointments",
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarStyle: {
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          width: 80,
          left: (Dimensions.get("window").width / 3 - 80) / 2,
          backgroundColor: Colors.black,
        },
        // tabBarItemStyle: { width: 100 },
        tabBarContentContainerStyle: { justifyContent: "center" },
      }}
    >
      <AppointmentsNavigation.Screen
        name="Upcoming"
        component={Upcoming}
        options={{ title: "Upcoming" }}
      />
      <AppointmentsNavigation.Screen
        name="Pending"
        component={Pending}
        options={{ title: "Pending" }}
      />
      <AppointmentsNavigation.Screen
        name="Previous"
        component={Previous}
        options={{ title: "Previous" }}
      />
    </AppointmentsNavigation.Navigator>
  );
};

export default AppointmentsIndex;
