import { StyleSheet, Text, View } from "react-native";
import TextBox from "@components/TextBox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";
import FilePicker from "@components/FilePicker";
import PrimaryButton from "@components/PrimaryButton";
import { useFocusEffect } from "@react-navigation/native";
import { useHomeState } from "@pages/home/HomeState";

const AddPackage = () => {
  const [categories, setCategories] = useState({ men: false, women: false });
  const [location, setLocation] = useState({ home: false, onSite: false });

  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({
        ...prevState,
        showTabBarHeader: false,
      }));
    }, [])
  );

  return (
    <View style={styles.container}>
      <TextBox placeholder={"Enter Package Name"} />
      <View style={styles.itemContainer}>
        <Text style={styles.tagline}>Enter Price Range</Text>
        <View style={styles.singleLineContainer}>
          <TextBox
            placeholder={"Minimum Price"}
            containerStyle={styles.textBox}
          />
          <Text style={[styles.tagline]}>to</Text>
          <TextBox
            placeholder={"Maximum Price"}
            containerStyle={styles.textBox}
          />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.tagline}>Available for</Text>
        <View
          style={[styles.singleLineContainer, { justifyContent: "flex-start" }]}
        >
          <BouncyCheckbox
            style={{ padding: 16, justifyContent: "center" }}
            fillColor={"black"}
            textStyle={{ textDecorationLine: "none", color: "black" }}
            isChecked={categories.men}
            onPress={() =>
              setCategories({ ...categories, men: !categories.men })
            }
            text={"Men"}
            // style={styles.checkbox}
          />
          <BouncyCheckbox
            style={{ padding: 16, justifyContent: "center" }}
            fillColor={"black"}
            textStyle={{ textDecorationLine: "none", color: "black" }}
            isChecked={categories.women}
            onPress={() =>
              setCategories({ ...categories, women: !categories.women })
            }
            text={"Women"}
            // style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.tagline}>Available at</Text>
        <View
          style={[styles.singleLineContainer, { justifyContent: "flex-start" }]}
        >
          <BouncyCheckbox
            style={{ padding: 16, justifyContent: "center" }}
            fillColor={"black"}
            textStyle={{ textDecorationLine: "none", color: "black" }}
            isChecked={location.onSite}
            onPress={() =>
              setLocation({ ...location, onSite: !location.onSite })
            }
            text={"On Site"}
          />
          <BouncyCheckbox
            style={{ padding: 16, justifyContent: "center" }}
            fillColor={"black"}
            textStyle={{ textDecorationLine: "none", color: "black" }}
            isChecked={categories.women}
            onPress={() => setLocation({ ...location, home: !location.home })}
            text={"Home"}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.tagline}>
          Select at least 3 to 5 images of your work
        </Text>

        <View style={{ padding: 16 }}>
          <FilePicker
            placeholder="Select 3 -to 5 images"
            buttonLabel="Choose Images"
          />
        </View>
      </View>

      <PrimaryButton label={"Add"} margin_top={32} />
    </View>
  );
};

export default AddPackage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    padding: 16,
  },

  tagline: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
  },

  singleLineContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  textBox: {
    flex: 1,
    marginHorizontal: 16,
  },

  itemContainer: {
    marginVertical: 16,
    width: "100%",
  },
});
