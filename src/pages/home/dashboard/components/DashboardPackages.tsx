import { IPackages, IPackage } from "@/types/common_types";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Package from "@pages/home/dashboard/components/Package";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "@components/PrimaryButton";
import { Button } from "react-native-paper";
import * as Octicons from "react-native-vector-icons/Octicons";
import React from "react";

interface IProps {
  name: string;
  packages: IPackages;
}

const EMPTY_PACKAGE: IPackage = {
  name: "More",
  id: "-1",
  discount: 0,
  price: 0,
  category: "both",
  image: "",
  locationType: "both",
};

const EmptyPlaceholder = (props: { name: string }) => {
  return (
    <Button
      style={{
        marginVertical: 16,
        backgroundColor: "rgb(240,240,240)",
        borderRadius: 8,
        marginHorizontal: 8,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "black",
          textDecorationLine: "underline",
          letterSpacing: 0.5,
        }}
      >
        More
      </Text>
    </Button>
  );
};

const DashboardPackages = (props: IProps) => {
  return (
    <View style={{ marginVertical: 16 }}>
      <Pressable>
        <View style={styles.servicesHeader}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.servicesHeading}>{props.name}s Near You</Text>
          </View>
          <Octicons.default name="arrow-right" size={24} />
        </View>
      </Pressable>
      <ScrollView horizontal={true}>
        {props.packages.map((v, ind) => (
          <Package key={ind} data={v} marginHorizontal={8} />
        ))}
        <EmptyPlaceholder name={props.name} />
      </ScrollView>
    </View>
  );
};

export default DashboardPackages;

const styles = StyleSheet.create({
  package: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 4,
    padding: 16,
    backgroundColor: "rgb(255,255,255)",
    borderColor: "rgb(230,230,230)",
    elevation: 2,
    borderWidth: 1,
    borderRadius: 8,
  },
  services: {
    marginVertical: 12,
    flexDirection: "column",
    width: "100%",
    alignSelf: "stretch",
  },

  servicesHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
  },

  servicesHeading: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
  },

  servicesIcon: {
    width: 24,
    height: 24,
  },
});
