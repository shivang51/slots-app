import 'expo-dev-client';
import Index from "@/pages/Index";
import { StyleSheet, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";

NavigationBar.setBackgroundColorAsync("white");

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
