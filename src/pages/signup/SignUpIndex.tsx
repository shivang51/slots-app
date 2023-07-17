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
import BusinessDetails from "./BuisnessDetails";
import MerchantDrawerIndex from "@pages/merchant_home/MerchantDrawerIndex";

type ScreenNames = [
  "home",
  "id",
  "verify_id",
  "sign_up_details",
  "buisness_details",
  "services_provided",
  "merchant_details",
];
type SignUpStackParamList = Record<ScreenNames[number], any | undefined>;
export type SignUpStackNavigation = NavigationProp<SignUpStackParamList>;

const SignUpStack = createStackNavigator<SignUpStackParamList>();

const SignUpIndex = ({ route }: { route: RouteProp<ParamListBase> }) => {
  return (
    <SignUpStack.Navigator screenOptions={ScreenOptionsDefault()}>
      <SignUpStack.Screen
        name="id"
        component={Id}
        initialParams={route.params}
      />
      <SignUpStack.Screen name="verify_id" component={VerifyId} />
      <SignUpStack.Screen name="sign_up_details" component={UserDetails} />

      {/* merchant routes */}
      <SignUpStack.Group>
        <SignUpStack.Screen
          name="services_provided"
          component={ServicesProvided}
        />
        <SignUpStack.Screen
          name="merchant_details"
          component={MerchantDetails}
        />
        <SignUpStack.Screen
          name="buisness_details"
          component={BusinessDetails}
        />
      </SignUpStack.Group>

      <SignUpStack.Screen
        options={{ headerShown: false }}
        name="home"
        component={MerchantDrawerIndex}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpIndex;
