import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import LogInPage from "./LogInPage";
import ForgotPasswordIndex from "@pages/forgot_password/FPIndex";
import SignUpStack from "@pages/signup/SignUpStack";
import { RootStackParamList } from "@src/types/route_types";
import Home from "@pages/home/Home";
import BackButton from "@components/BackButton";
import { useNavigation } from "@react-navigation/native";

const RootStack = createStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <RootStack.Screen name="Landing" component={LandingPage} />
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="SignIn"
        options={{
          headerShown: true,
          headerTitle: "Log In",
          headerLeft: (props) => {
            const navigator = useNavigation();
            return <BackButton onPress={() => navigator.goBack()} />;
          },
        }}
        component={LogInPage}
      />
      <RootStack.Screen name="ForgotPassword" component={ForgotPasswordIndex} />
      <RootStack.Screen name="SignUp" component={SignUpStack} />
    </RootStack.Navigator>
  );
};

export default Root;
