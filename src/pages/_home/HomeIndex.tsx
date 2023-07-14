import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  View,
  GestureResponderEvent,
} from "react-native";

import * as ExpoImage from "expo-image";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as IonIcon from "react-native-vector-icons/Ionicons";

import Icons from "@/utils/Icons";
import { load_fonts } from "@utils/LoadFonts";
import { Colors } from "@/utils/GlobalStyles";

import Chats from "./Chats";
import Maps from "./Maps";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import AppointmentsIndex from "./_appointments/AppointmentsIndex";
import PackageSelection from "./PackageSelection";
import Dashboard from "./Home";
import { IPackage, IService } from "@utils/Types";
import BookAppointment from "@pages/_home/_appointments/BookAppointment";
import { createStackNavigator } from "@react-navigation/stack";
import FriendsDetails from "@pages/_home/_appointments/FriendsDetails";
import ConfirmAppointment from "@pages/_home/_appointments/ConfirmAppointment";
import ServiceList from "@pages/_home/ServiceList";
import ServiceDetails from "@pages/_home/ServiceDetails";

type ScreenNames = [
  "dashboard",
  "select_package",
  "maps",
  "chats",
  "appointments",
  "book_appointment",
  "friends_details",
  "confirm_appointment",
  "service_list",
  "service_details",
];
type TabNavigationParamList = Record<
  ScreenNames[number],
  | { screen: string }
  | { serviceData: IService }
  | { packageData: IPackage; serviceName: string }
  | undefined
>;

export type TabNavigationProp = NavigationProp<TabNavigationParamList>;

const TabNavigator = createBottomTabNavigator<TabNavigationParamList>();

const BackButton = (props: {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image
        source={Icons.back}
        style={{ width: 24, height: 24, marginLeft: 8 }}
      />
    </Pressable>
  );
};

const StackNavigator = createStackNavigator();

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
          if (props.route.name == "dashboard") {
            icon = Icons.home;
          } else if (props.route.name == "maps") {
            icon = Icons.map;
          } else if (props.route.name == "chats") {
            icon = Icons.chat;
          } else if (props.route.name == "appointments") {
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
      <TabNavigator.Screen name={"dashboard"} component={Dashboard} />

      <TabNavigator.Group
        screenOptions={{
          tabBarStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          headerLeft: (props) => (
            <BackButton onPress={() => navigator.goBack()} />
          ),

          headerTitleStyle: undefined,
        }}
      >
        <TabNavigator.Screen
          name={"select_package"}
          component={PackageSelection}
          options={(props) => {
            if (!props.route.params) return {};

            const serviceData = (
              props.route.params as { serviceData: IService }
            ).serviceData;

            return {
              headerTitle: serviceData.name + " Packages",
              headerTitleAlign: "left",
              headerRight: (props) => (
                <ExpoImage.Image
                  source={{ uri: serviceData.banner }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 48,
                    marginRight: 8,
                  }}
                />
              ),
            };
          }}
        />
        <TabNavigator.Screen
          name={"book_appointment"}
          component={BookAppointment}
          options={(props) => {
            if (!props.route.params) return {};

            const { packageData, serviceName } = props.route.params as {
              packageData: IPackage;
              serviceName: string;
            };

            return {
              headerTitle: `${packageData.name} at ${serviceName}`,
              headerTitleAlign: "left",
              headerRight: undefined,
            };
          }}
        />
        <TabNavigator.Screen
          name={"friends_details"}
          component={FriendsDetails}
          options={{
            headerTitle: `Enter Friends Details`,
            headerTitleAlign: "left",
            headerRight: undefined,
          }}
        />
        <TabNavigator.Screen
          name={"confirm_appointment"}
          component={ConfirmAppointment}
          options={{
            headerTitle: "Confirm appointment",
            headerTitleAlign: "left",
            headerRight: undefined,
          }}
        />

        <TabNavigator.Screen
          name={"service_list"}
          component={ServiceList}
          options={{
            headerTitle: "Saloons near you",
            headerTitleAlign: "left",
            headerRight: undefined,
          }}
        />

        <TabNavigator.Screen
          name={"service_details"}
          component={ServiceDetails}
          options={{
            headerTitle: "",
            headerTitleAlign: "left",
            headerRight: undefined,
          }}
        />
      </TabNavigator.Group>

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
