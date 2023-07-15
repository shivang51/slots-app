import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as IonIcon from "react-native-vector-icons/Ionicons";

import Icons from "@/utils/Icons";
import { load_fonts } from "@utils/LoadFonts";
import { Colors } from "@/utils/GlobalStyles";

import Chats from "./Chats";
import Home from "./Home";
import Maps from "./Maps";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AppointmentsIndex from "./_appointments/AppointmentsIndex";
// import AppointmentsIndex from "./";

const TabNavigator = createBottomTabNavigator();

const HomeIndex = () => {
  const [fontLoaded] = load_fonts();
  const navigator = useNavigation();

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
        tabBarHideOnKeyboard: true,
        headerLeft: (props: any) => (
          <Pressable
            onPress={() => navigator.dispatch(DrawerActions.toggleDrawer())}
          >
            <IonIcon.default style={{ marginLeft: 8 }} name="menu" size={24} />
          </Pressable>
        ),
        headerRight: (prpos: any) => (
          <Icon style={{ marginRight: 16 }} name="user-circle" size={24} />
        ),

        tabBarIcon: ({ focused }) => {
          let icon: any;
          if (props.route.name == "home") {
            icon = Icons.home;
          } else if (props.route.name == "maps") {
            icon = Icons.map;
          } else if (props.route.name == "chats") {
            icon = Icons.chat;
          } else if (props.route.name == "appointments") {
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
              <Image style={styles.tabar_icon} source={icon} />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgba(102, 102, 102, 0.18)",
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
      <TabNavigator.Screen name={"home"} component={Home} />
      <TabNavigator.Screen name={"maps"} component={Maps} />
      <TabNavigator.Screen
        name={"appointments"}
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
        name={"chats"}
        component={Chats}
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

export default HomeIndex;

const styles = StyleSheet.create({
  tabar_icon: {
    width: 24,
    height: 24,
  },
});
