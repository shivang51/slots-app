import { IPackage, IService } from "@/types/common_types";
import { useNavigation } from "@react-navigation/native";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Octicons from "react-native-vector-icons/Octicons";
import { ScrollView } from "react-native-gesture-handler";
import Package from "@pages/home/dashboard/components/Package";
import React from "react";

const Packages = (props: { serviceData: IService; data: IPackage[] }) => {
  const navigation =
    useNavigation<
      HomeDashboardStackScreenProps<"ServiceDetails">["navigation"]
    >();

  return (
    <View style={styles.packages}>
      <Pressable
        onPress={() =>
          navigation.navigate("PackageSelection", {
            serviceName: props.serviceData.name,
            packages: props.data,
            serviceId: props.serviceData.id,
          })
        }
      >
        <View style={styles.packagesHeader}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.packagesHeading}>Packages Offered</Text>
          </View>
          <Octicons.default name="arrow-right" size={24} />
        </View>
      </Pressable>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((v, ind) => (
          <Package
            key={ind}
            data={v}
            marginHorizontal={8}
            onPress={() =>
              navigation.navigate("BookAppointment", {
                serviceName: props.serviceData.name,
                packageData: v,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  packages: {
    marginVertical: 8,
    flexDirection: "column",
    width: "100%",
    alignSelf: "stretch",
  },

  packagesHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
  },

  packagesHeading: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
  },

  packagesIcon: {
    width: 24,
    height: 24,
  },
});

export default Packages;
