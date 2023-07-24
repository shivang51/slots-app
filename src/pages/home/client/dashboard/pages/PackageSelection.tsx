import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { DummyPackage, DummyPackageFilters, DummyTags } from "@utils/Dummy";
import TagsLine from "@components/TagsLine";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { SharedElement } from "react-navigation-shared-element";
import Package from "@pages/home/client/dashboard/components/Package";

const PackageSelection = ({
  navigation,
  route,
}: HomeDashboardStackScreenProps<"PackageSelection">) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <SharedElement
        id={`item.${params.serviceId}.banner`}
        style={{ height: "30%", position: "absolute" }}
      >
        <View style={styles.banner_placeholder} />
      </SharedElement>
      <TagsLine tags={DummyPackageFilters} />
      {params.packages.map((v, ind) => (
        <Package
          key={ind}
          data={v}
          onPress={() =>
            navigation.navigate("BookAppointment", {
              packageData: v,
              serviceName: v.name,
            })
          }
        />
      ))}
    </View>
  );
};

export default PackageSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },

  package: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    padding: 16,
    backgroundColor: "rgb(255,255,255)",
    borderColor: "rgb(240,240,240)",
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  singleLine: {
    flexDirection: "row",
    width: "100%",
  },

  tag: {
    marginHorizontal: 2,
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 8,
  },

  capitalize: {
    textTransform: "capitalize",
  },

  men: {
    backgroundColor: "teal",
    color: "white",
  },
  women: {
    backgroundColor: "pink",
  },
  both: {
    backgroundColor: "brown",
    color: Colors.white,
  },
  home: {
    backgroundColor: "orange",
    color: "white",
  },

  on_site: {
    backgroundColor: "darkgreen",
    color: "white",
  },

  banner_placeholder: {
    width: "100%",
    height: "100%",
    display: "none",
    position: "absolute",
  },
});
