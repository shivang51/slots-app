import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './LandingPage';
import LogInPage from './LogInPage';
import ForgotPasswordIndex from '@pages/forgot_password/FPIndex';
import SignUpIndex from '@pages/signup/SignUpIndex';
import {RootStackParamList} from '@src/types/route_types';
import Home from '@pages/home/Home';

const RootStack = createStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Landing">
      <RootStack.Screen name="Landing" component={LandingPage} />
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="SignIn"
        options={{
          headerShown: true,
        }}
        component={LogInPage}
      />
      <RootStack.Screen name="ForgotPassword" component={ForgotPasswordIndex} />
      <RootStack.Screen name="SignUp" component={SignUpIndex} />
    </RootStack.Navigator>
  );
};

export default Root;
