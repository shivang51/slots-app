import { StyleSheet, Image, Dimensions } from "react-native";

import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "@utils/Icons";
import { load_fonts } from "@utils/LoadFonts";

import AppointmentsIndex from "@pages/home/components/appointments/AppointmentsIndex";

import { HomeDrawerScreenProps, HomeTabParamList } from "@/types/route_types";
import { homeScreenOptions, tabBarStyle } from "./ScreenOptions";
import HomeStackNavigation from "@pages/home/client/dashboard/HomeStackNavigation";
import { useHomeState } from "@pages/home/HomeState";
import ChatsHome from "@pages/home/components/ChatsHome";
import MapsHome from "@pages/home/components/MapsHome";

const HomeTabNavigator = createBottomTabNavigator<HomeTabParamList>();
const { width } = Dimensions.get("window");

const HomeTabNavigation = ({
  route,
  navigation,
}: HomeDrawerScreenProps<"DrawerRoot">) => {
  const [fontLoaded] = load_fonts();

  const { homeState } = useHomeState();

  return (
    <HomeTabNavigator.Navigator
      screenOptions={(props) => ({
        ...homeScreenOptions(navigation, fontLoaded, props),
        scrollEnabled: true,
        indicatorStyle: { backgroundColor: "transparent" },
      })}
    >
      <HomeTabNavigator.Screen
        name={"Home"}
        component={HomeStackNavigation}
        options={{
          headerShown: homeState.showTabBarHeader,
          tabBarStyle: homeState.hideTabBar ? { display: "none" } : tabBarStyle,
        }}
      />

      <HomeTabNavigator.Screen name={"Maps"} component={MapsHome} />

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
        component={ChatsHome}
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
