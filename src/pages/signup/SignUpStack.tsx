import React from "react";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenOptionsDefault } from "@/utils/Options";
import Id from "./Id";
import VerifyId from "./VerifyId";
import UserDetails from "./UserDetails";
import ServicesProvided from "./ServicesProvided";
import MerchantDetails from "./MerchantDetails";
import { SignUpStackParamList } from "@/types/route_types";
import BusinessDetails from "./BusinessDetails";

const SignUpStackNavigation = createStackNavigator<SignUpStackParamList>();

const SignUpStack = ({ route }: { route: RouteProp<ParamListBase> }) => {
  return (
    <SignUpStackNavigation.Navigator screenOptions={ScreenOptionsDefault()}>
      <SignUpStackNavigation.Screen name={"Id"} component={Id} />
      <SignUpStackNavigation.Screen name={"VerifyId"} component={VerifyId} />
      <SignUpStackNavigation.Screen
        name={"UserDetails"}
        component={UserDetails}
      />
      <SignUpStackNavigation.Screen
        name={"ServicesProvided"}
        component={ServicesProvided}
      />
      <SignUpStackNavigation.Screen
        name={"MerchantDetails"}
        component={MerchantDetails}
      />
      <SignUpStackNavigation.Screen
        name={"BusinessDetails"}
        component={BusinessDetails}
      />
    </SignUpStackNavigation.Navigator>
  );
};

export default SignUpStack;
