import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Maps from "./Maps";
import DrawerWidget from "@/components/DrawerWidget";
import { NavigationProp } from "@react-navigation/native";
import HomeIndex from "./HomeIndex";

type ScreenNames = ["HomeIndex", "RootIndex"];
type DrawerParamList = Record<
  ScreenNames[number],
  { screen: string } | { serviceId: string }
>;
export type DrawerNavigation = NavigationProp<DrawerParamList>;

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerIndex = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerWidget {...props} />}
    screenOptions={{
      headerShown: false,
      drawerType: "front",
      drawerStyle: styles.drawerStyle,
    }}
  >
    <Drawer.Screen
      name="HomeIndex"
      component={HomeIndex}
      options={{
        title: "Home",
      }}
    />
  </Drawer.Navigator>
);

export default DrawerIndex;

const styles = StyleSheet.create({
  drawerStyle: {
    marginTop: 40,
    marginBottom: 16,
    borderTopEndRadius: 32,
    borderBottomEndRadius: 32,
    width: "80%",
  },
});
