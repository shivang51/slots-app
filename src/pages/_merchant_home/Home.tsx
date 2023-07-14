import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { Colors } from "@/utils/GlobalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { IService, Tags } from "@utils/Types";
import { DummyServices, DummyTags } from "@utils/Dummy";
import * as Octicons from "react-native-vector-icons/Octicons";
import Icons from "@/utils/Icons";
import { ScrollView } from "react-native-gesture-handler";
import {
  AvailableServices,
  availableServiceFromId,
} from "@utils/AvalilableServices";
import { Categories } from "@utils/Categories";

const Home = () => {
  return (
    <View style={styles.body}>
      {/* <Text style={styles.heading}>Packages offered by you</Text> */}
      {/* <ScrollView></ScrollView> */}

      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.notFound}>No Packages Found</Text>
        <Text style={{ fontSize: 18, marginTop: 8 }}>
          Start by clicking{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add Package</Text>{" "}
          button
        </Text>
      </View>
      <View style={fabStyles.container}>
        <Icon name="add" size={24} />
        <Text style={fabStyles.label}>Add Package</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    padding: 16,
  },
  notFound: {
    fontSize: 24,
    fontWeight: "bold",
  },

  heading: {
    fontSize: 18,
  },
});

const fabStyles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 16,
    bottom: 64,
    right: 16,
    borderRadius: 16,
    backgroundColor: "#e3e3e3",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginLeft: 4,

    fontSize: 20,
  },
});

export default Home;
