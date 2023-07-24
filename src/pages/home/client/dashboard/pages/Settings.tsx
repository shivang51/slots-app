import { StyleSheet, Text, View } from "react-native";
import { HomeDrawerScreenProps } from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
// @ts-ignore
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const SettingsItem = ({
  name,
  iconName,
}: {
  name: string;
  iconName: string;
}) => {
  return (
    <View style={[styles.singleLine, styles.itemContainer]}>
      <View style={styles.singleLine}>
        <FontAwesome6
          style={{ marginRight: 16 }}
          name={iconName}
          size={24}
          color={"black"}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <FontAwesome6 name="chevron-right" size={16} color={"black"} />
    </View>
  );
};

const Settings = ({ route }: HomeDrawerScreenProps<"Settings">) => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, hideTabBar: true }));

      return () => {
        setHomeState((prevState) => ({ ...prevState, hideTabBar: false }));
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <SettingsItem name="Profile" iconName="circle-user" />
      <SettingsItem name="Location" iconName="compass" />
      <SettingsItem name="About" iconName="circle-info" />
      <SettingsItem name="Help" iconName="circle-question" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  singleLine: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    color: "black",
  },

  itemContainer: {
    marginVertical: 0,
    justifyContent: "space-between",
    padding: 8,
    paddingVertical: 16,
    borderColor: "rgb(220, 220,220)",
    borderTopWidth: 1,
  },
});

export default Settings;
