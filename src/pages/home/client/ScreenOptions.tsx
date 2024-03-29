import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Colors } from "@utils/GlobalStyles";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { DrawerActions, RouteProp } from "@react-navigation/native";
import * as IonIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "@utils/Icons";
import React from "react";
import { HomeTabParamList, HomeTabScreenProps } from "@/types/route_types";

interface IProps {
  route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
  navigation: any;
}

export const homeScreenOptions: (
  navigation: any,
  // isTabbarHome:
  fontLoaded: boolean,
  props: IProps
) => BottomTabNavigationOptions = (
  navigation: any,
  fontLoaded: boolean,
  props: IProps
) => ({
  title: "Slots",
  headerTitleStyle: {
    fontFamily: fontLoaded ? "KronaOne" : undefined,
    color: Colors.black,
    fontSize: 32,
  },
  headerShadowVisible: false,
  headerTitleAlign: "center",
  headerLeft: (props: any) => (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <IonIcon.default
        color={Colors.black}
        style={{ marginLeft: 8 }}
        name="menu"
        size={24}
      />
    </Pressable>
  ),
  headerRight: (props: any) => (
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
    } else if (props.route.name == "Maps") {
      icon = Icons.map;
    } else if (props.route.name == "Chats") {
      icon = Icons.chat;
    } else if (props.route.name == "Appointments") {
      icon = Icons.calender;
    } else {
      icon = Icons.cross;
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
  tabBarHideOnKeyboard: true,
  tabBarBackground: () => (
    <View style={{ backgroundColor: "transparent", height: 0, width: 0 }} />
  ),
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBarStyle,
});

const styles = StyleSheet.create({
  tabar_icon: {
    width: 24,
    height: 24,
  },
  tabBarStyle: {
    backgroundColor: "rgb(200, 200, 200)",
    marginHorizontal: 16,
    marginVertical: 4,
    marginTop: 0,
    borderRadius: 8,
    position: "absolute",
    elevation: 0,
  },
});

export const tabBarStyle = styles.tabBarStyle;
