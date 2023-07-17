import * as Font from "expo-font";

export function load_fonts(): [boolean, Error | null] {
  return Font.useFonts({
    KronaOne: require("../../assets/fonts/Krona_One/KronaOne-Regular.ttf"),
  });
}
