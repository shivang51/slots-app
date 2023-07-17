import { Image, Pressable } from "react-native";
import React from "react";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Id from "./Id";
import VerifyId from "./VerifyId";
import NewPassword from "./NewPassword";
import { Colors } from "@/utils/GlobalStyles";
import { load_fonts } from "@/utils/LoadFonts";
import Icons from "@/utils/Icons";
import { ScreenOptionsDefault } from "@/utils/Options";

type ScreenNames = ["id", "verify_id", "new_password"];
type ForgotPasswordStackParamList = Record<ScreenNames[number], undefined>;
export type ForgotPasswordStackNavigation =
  NavigationProp<ForgotPasswordStackParamList>;

const ForgotPasswordStack =
  createStackNavigator<ForgotPasswordStackParamList>();

const ForgotPasswordIndex = () => {
  return (
    <ForgotPasswordStack.Navigator screenOptions={ScreenOptionsDefault()}>
      <ForgotPasswordStack.Screen name="id" component={Id} />
      <ForgotPasswordStack.Screen name="verify_id" component={VerifyId} />
      <ForgotPasswordStack.Screen name="new_password" component={NewPassword} />
    </ForgotPasswordStack.Navigator>
  );
};

export default ForgotPasswordIndex;
