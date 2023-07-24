import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerWidget from "@pages/home/components/DrawerWidget";
import HomeTabNavigation from "./client/HomeTabNavigation";
import { HomeDrawerParamList, RootStackScreenProps } from "@/types/route_types";
import { useRoute } from "@react-navigation/native";
import { useHomeState } from "@pages/home/HomeState";
import MerchantHomeIndex from "@pages/home/merchant/MerchantHomeTabNav";
import Settings from "@pages/home/client/dashboard/pages/Settings";
import BackButton from "@components/BackButton";

const DrawerNavigator = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawerNavigation = ({
  navigation,
  route,
}: RootStackScreenProps<"Home">) => {
  const { setHomeState } = useHomeState();

  useEffect(() => {
    setHomeState((prevState) => {
      let name =
        route.params.userRole === "merchant" ? "Merchant John" : "Guest";
      console.log(name);
      return {
        ...prevState,
        userRole: route.params.userRole,
        userName: name,
      };
    });
  }, []);

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
        component={
          route.params.userRole === "client"
            ? HomeTabNavigation
            : MerchantHomeIndex
        }
        options={{
          title: "Home",
        }}
        initialParams={{
          screen: "Home",
          // params: { userId: route.params.userId as string },
        }}
      />

      <DrawerNavigator.Screen
        name={"Settings"}
        component={Settings}
        options={{
          title: "Settings",
          headerShown: true,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
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
