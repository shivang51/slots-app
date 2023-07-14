import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import * as HomeIndex from "@/pages/_home/DrawerIndex";
import LogInPage from "./LogInPage";
import ForgotPasswordIndex from "./_forgot_password/FPIndex";
import { ScreenOptionsDefault } from "@/utils/Options";
import Icons from "@/utils/Icons";
import SignUpIndex from "./_signup/SignUpIndex";

type ScreenNames = [
  "Landing",
  "HomeRoute",
  "SignIn",
  "ForgotPassowrd",
  "SignUp"
];
type RootStackParamList = Record<
  ScreenNames[number],
  { type: "merchant" } | undefined
>;
export type RootStackNavigation = NavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

const Index = () => {
  const navigator = useNavigation();
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <RootStack.Screen name="Landing" component={LandingPage} />
      <RootStack.Screen name="HomeRoute" component={HomeIndex.default} />
      <RootStack.Screen
        name="SignIn"
        options={{
          headerShown: true,
          ...ScreenOptionsDefault(),
        }}
        component={LogInPage}
      />
      <RootStack.Screen name="ForgotPassowrd" component={ForgotPasswordIndex} />
      <RootStack.Screen name="SignUp" component={SignUpIndex} />
    </RootStack.Navigator>
  );
};

export default Index;
