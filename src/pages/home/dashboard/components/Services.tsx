import { IService } from "@/types/common_types";
import { availableServiceFromId } from "@utils/AvalilableServices";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import * as Octicons from "react-native-vector-icons/Octicons";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import Service from "@pages/home/dashboard/components/Service";
import { HomeDashboardStackScreenProps } from "@/types/route_types";

const Services = (props: { id: number; data: IService[] }) => {
  const serviceType = availableServiceFromId(props.id);
  const navigation =
    useNavigation<HomeDashboardStackScreenProps<"Dashboard">["navigation"]>();

  return (
    <View style={styles.services}>
      <Pressable
        onPress={() =>
          navigation.navigate("ServiceList", { serviceTypeId: serviceType.id })
        }
      >
        <View style={styles.servicesHeader}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.servicesIcon} source={serviceType.icon} />
            <Text style={styles.servicesHeading}>
              {serviceType.name}s Near You
            </Text>
          </View>
          <Octicons.default name="arrow-right" size={24} />
        </View>
      </Pressable>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((v, ind) => (
          <Service key={ind} data={v} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  services: {
    marginVertical: 8,
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