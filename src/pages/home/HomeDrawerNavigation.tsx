import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerWidget from "@/components/DrawerWidget";
import HomeTabNavigation from "./HomeTabNavigation";
import { HomeDrawerParamList, RootStackScreenProps } from "@/types/route_types";
import { useRoute } from "@react-navigation/native";

const DrawerNavigator = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawerNavigation = () => {
  const route = useRoute<RootStackScreenProps<"Home">["route"]>();

  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <DrawerWidget {...props} />}
      screenOptions={(props) => {
        return {
          headerShown: false,
          drawerType: "front",
          drawerStyle: styles.drawerStyle,
        };
      }}
    >
      <DrawerNavigator.Screen
        name="DrawerRoot"
        component={HomeTabNavigation}
        options={{
          title: "Home",
        }}
        initialParams={{
          screen: "Home",
          // params: { userId: route.params.userId as string },
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default HomeDrawerNavigation;

const styles = StyleSheet.create({
  drawerStyle: {
    marginTop: 40,
    marginBottom: 16,
    borderTopEndRadius: 32,
    borderBottomEndRadius: 32,
    width: "80%",
  },
});
