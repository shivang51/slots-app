import { Pressable, Image } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { Colors } from "./GlobalStyles";
import Icons from "./Icons";
import { load_fonts } from "./LoadFonts";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const ScreenOptionsDefault = () => {
  const [fontLoaded] = load_fonts();
  const navigator = useNavigation();

  let options: StackNavigationOptions = {
    title: "Slots",
    headerTitleStyle: {
      fontFamily: fontLoaded ? "KronaOne" : undefined,
      color: Colors.black,
      fontSize: 32,
    },
    headerShadowVisible: false,
    headerTitleAlign: "center",
    headerLeft: (props: any) => {
      const navigator = useNavigation();
      return (
        <Pressable
          onPress={() => {
            navigator.goBack();
          }}
        >
          <Image
            style={{ marginLeft: 8, width: 24, height: 24 }}
            source={Icons.back}
          />
        </Pressable>
      );
    },
  };

  return options;
};
