import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Maps from "../_home/Maps";
import DrawerWidget from "@/components/DrawerWidget";
import { NavigationProp } from "@react-navigation/native";
import MerchantHomeIndex from "./MerchantHomeIndex";

type ScreenNames = ["HomeIndex", "RootIndex"];
type DrawerParamList = Record<ScreenNames[number], { screen: string }>;
export type DrawerNavigation = NavigationProp<DrawerParamList>;

const Drawer = createDrawerNavigator<DrawerParamList>();

const MerchantDrawerIndex = () => (
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
      component={MerchantHomeIndex}
      options={{ title: "Home" }}
    />
  </Drawer.Navigator>
);

export default MerchantDrawerIndex;

const styles = StyleSheet.create({
  drawerStyle: {
    marginTop: 40,
    marginBottom: 16,
    borderTopEndRadius: 32,
    borderBottomEndRadius: 32,
    width: "80%",
  },
});
