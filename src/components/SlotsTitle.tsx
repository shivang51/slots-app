import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { load_fonts } from "../utils/LoadFonts";
import { Colors } from "../utils/GlobalStyles";

const SlotsTitle = () => {
  const [loaded, setLoaded] = useState(false);

  const [fontsLoaded] = load_fonts();

  useEffect(() => {
    setLoaded(fontsLoaded);
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            fontFamily: loaded ? "KronaOne" : undefined,
          },
        ]}
      >
        Slots
      </Text>
    </View>
  );
};

export default SlotsTitle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 62,
    color: Colors.black,
    textAlign: "center",
  },
});
