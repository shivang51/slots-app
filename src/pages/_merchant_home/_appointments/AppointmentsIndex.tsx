import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "./Upcoming";
import Pending from "./Pending";
import Previous from "./Previous";
import { Colors } from "@/utils/GlobalStyles";

const AppointmentsNavgation = createMaterialTopTabNavigator();
const AppointmentsIndex = () => {
  return (
    <AppointmentsNavgation.Navigator
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
      <AppointmentsNavgation.Screen
        name="upcoming_appoinments"
        component={Upcoming}
        options={{ title: "Upcoming" }}
      />
      <AppointmentsNavgation.Screen
        name="pending_appoinments"
        component={Pending}
        options={{ title: "Pending" }}
      />
      <AppointmentsNavgation.Screen
        name="previous_appoinments"
        component={Previous}
        options={{ title: "Previous" }}
      />
    </AppointmentsNavgation.Navigator>
  );
};

export default AppointmentsIndex;
