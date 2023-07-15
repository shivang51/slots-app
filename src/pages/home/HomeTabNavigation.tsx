import { StyleSheet, Image } from "react-native";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "@utils/Icons";
import { load_fonts } from "@utils/LoadFonts";
import Chats from "./Chats";
import Maps from "./Maps";

import AppointmentsIndex from "./appointments/AppointmentsIndex";

import { HomeDrawerScreenProps, HomeTabParamList } from "@/types/route_types";
import { homeScreenOptions } from "./ScreenOptions";
import HomeStackNavigation from "@pages/home/dashboard/HomeStackNavigation";
import { useHomeState } from "@pages/home/HomeState";

const HomeTabNavigator = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigation = ({
  route,
  navigation,
}: HomeDrawerScreenProps<"DrawerRoot">) => {
  const [fontLoaded] = load_fonts();

  const { state } = useHomeState();

  return (
    <HomeTabNavigator.Navigator
      screenOptions={(props) =>
        homeScreenOptions(navigation, fontLoaded, props)
      }
    >
      <HomeTabNavigator.Screen
        name={"Home"}
        component={HomeStackNavigation}
        initialParams={{
          screen: "Dashboard",
        }}
        options={{
          headerShown: state.isDashboardHome,
        }}
      />

      <HomeTabNavigator.Screen name={"Maps"} component={Maps} />

      <HomeTabNavigator.Screen
        name={"Appointments"}
        component={AppointmentsIndex}
        options={{
          headerLeft: () => (
            <Image
              source={Icons.calender}
              style={[styles.tab_bar_icon, { marginLeft: 16 }]}
            />
          ),
          headerRight: undefined,
          title: "My Appointments",
          tabBarLabel: "Appointments",
          headerTitleAlign: "left",

          headerTitleStyle: {
            fontSize: 24,
          },
        }}
      />

      <HomeTabNavigator.Screen
        name={"Chats"}
        component={Chats}
        options={{
          headerLeft: () => (
            <Image
              source={Icons.chat}
              style={[styles.tab_bar_icon, { marginLeft: 16 }]}
            />
          ),
          headerRight: undefined,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 24,
          },
          title: "Message",
        }}
      />
    </HomeTabNavigator.Navigator>
  );
};

export default HomeTabNavigation;

const styles = StyleSheet.create({
  tab_bar_icon: {
    width: 24,
    height: 24,
  },
});
