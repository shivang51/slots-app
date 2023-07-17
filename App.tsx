import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Root from "./src/pages/Root";
import * as NavigationBar from "expo-navigation-bar";
import { PaperProvider } from "react-native-paper";

NavigationBar.setBackgroundColorAsync("white").then((r) => null);

function App(): JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
