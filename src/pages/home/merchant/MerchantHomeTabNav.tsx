import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as IonIcon from "react-native-vector-icons/Ionicons";
import * as AntDesign from "react-native-vector-icons/AntDesign";

import Icons from "@utils/Icons";
import { load_fonts } from "@utils/LoadFonts";
import { Colors } from "@utils/GlobalStyles";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import Dashboard from "@pages/home/merchant/dashboard/pages/Dashboard";
import ChatsHome from "@pages/home/components/ChatsHome";
import MapsHome from "@pages/home/components/MapsHome";
import AppointmentsIndex from "@pages/home/components/appointments/AppointmentsIndex";
import { useHomeState } from "@pages/home/HomeState";
import {
  HomeDrawerScreenProps,
  MerchantHomeTabParamList,
  MerchantHomeTabScreenProps,
} from "@/types/route_types";
import HomeStackNavigation from "@pages/home/client/dashboard/HomeStackNavigation";
import MerchantHomeStackNav from "@pages/home/merchant/dashboard/MerchantHomeStackNav";
import QuickActions from "@pages/home/merchant/quick_access/pages/QuickActions";
import QuickActionsStackNav from "@pages/home/merchant/quick_access/QuickActionsStackNav";
// import AppointmentsIndex from "./";

const TabNavigator = createBottomTabNavigator<MerchantHomeTabParamList>();

const MerchantHomeTabNav = ({
  navigation,
  route,
}: HomeDrawerScreenProps<"DrawerRoot">) => {
  const [fontLoaded] = load_fonts();

  const { homeState } = useHomeState();

  return (
    <TabNavigator.Navigator
      screenOptions={(props) => ({
        title: "Slots",
        headerTitleStyle: {
          fontFamily: fontLoaded ? "KronaOne" : undefined,
          color: Colors.black,
          fontSize: 32,
        },

        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerShown: homeState.showTabBarHeader,
        headerLeft: (props: any) => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <IonIcon.default
              style={{ marginLeft: 8, color: "black" }}
              name="menu"
              size={24}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Icon
            style={{ marginRight: 16 }}
            name="user-circle"
            size={24}
            color={"black"}
          />
        ),

        tabBarIcon: ({ focused }) => {
          let icon: any;
          if (props.route.name == "Home") {
            icon = Icons.home;
          } else if (props.route.name == "Chats") {
            icon = Icons.chat;
          } else if (props.route.name == "Appointments") {
            icon = Icons.calender;
          }
          return (
            <View
              style={{
                borderBottomWidth: 3,
                borderColor: focused ? "black" : "transparent",
                paddingBottom: 2,
              }}
            >
              {props.route.name === "QuickAccess" ? (
                <AntDesign.default
                  name={"appstore1"}
                  color={"black"}
                  size={24}
                />
              ) : (
                <Image style={styles.tabar_icon} source={icon} />
              )}
            </View>
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => (
          <View
            style={{ backgroundColor: "transparent", height: 0, width: 0 }}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgb(200, 200, 200)",
          marginHorizontal: 8,
          borderRadius: 8,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 2,
          elevation: 0,
        },
      })}
    >
      <TabNavigator.Screen name={"Home"} component={MerchantHomeStackNav} />

      <TabNavigator.Screen
        name={"QuickAccess"}
        component={QuickActionsStackNav}
        options={{
          headerLeft: () => (
            <AntDesign.default
              name={"appstore1"}
              color={"black"}
              size={24}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: undefined,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 24,
          },
          title: "Quick Actions",
        }}
      />

      <TabNavigator.Screen
        name={"Appointments"}
        component={AppointmentsIndex}
        options={{
          headerLeft: () => (
            <Image
              source={Icons.calender}
              style={[styles.tabar_icon, { marginLeft: 16 }]}
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
      <TabNavigator.Screen
        name={"Chats"}
        component={ChatsHome}
        options={{
          headerLeft: () => (
            <Image
              source={Icons.chat}
              style={[styles.tabar_icon, { marginLeft: 16 }]}
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
    </TabNavigator.Navigator>
  );
};

export default MerchantHomeTabNav;

const styles = StyleSheet.create({
  tabar_icon: {
    width: 24,
    height: 24,
  },
});
