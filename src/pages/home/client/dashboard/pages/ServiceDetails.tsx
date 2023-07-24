import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { DummyPackage, DummyPackages } from "@utils/Dummy";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";
import { AvailableServices } from "@utils/AvalilableServices";

import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import IconButton from "@pages/home/client/dashboard/components/IconButton";
import StarRating from "@pages/home/client/dashboard/components/StarRating";
import Packages from "@pages/home/client/dashboard/components/Packages";
import { getPackages } from "@utils/Utils";

const ServiceDetails = () => {
  const route =
    useRoute<HomeDashboardStackScreenProps<"ServiceDetails">["route"]>();

  const params = route.params;

  const { setHomeState } = useHomeState();
  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, hideTabBar: true }));
    }, [])
  );

  const imageWidth = Dimensions.get("window").width * 0.9;

  const imageStyle = StyleSheet.create({
    carousel: {
      marginHorizontal: 4,
      borderRadius: 8,
      width: imageWidth,
      height: "100%",
    },
  });

  return (
    <View style={styles.container}>
      {/*Carousal*/}
      <View style={{ height: "30%" }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingBottom: 8 }}
        >
          <SharedElement id={`item.${params.serviceData.id}.banner`}>
            <Image
              source={{ uri: params.serviceData.banner }}
              style={[imageStyle.carousel, { resizeMode: "cover" }]}
            />
          </SharedElement>
          <Image
            source={{ uri: params.serviceData.banner }}
            style={imageStyle.carousel}
          />
          <Image
            source={{ uri: params.serviceData.banner }}
            style={imageStyle.carousel}
          />
        </ScrollView>
      </View>

      <View style={styles.content}>
        {/*Title*/}
        <SharedElement id={`item.${params.serviceData.id}.title`}>
          <Text style={styles.title}>{params.serviceData.name}</Text>
        </SharedElement>
        <Animatable.View animation={"fadeInUp"} duration={500}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 4,
                  paddingHorizontal: 8,
                  alignSelf: "flex-start",
                  borderRadius: 4,
                  textTransform: "capitalize",
                }}
              >
                {AvailableServices.All[params.serviceData.typeId].name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 4,
                  fontWeight: "bold",
                  marginLeft: 8,
                  color: "black",
                }}
              >
                5 km from your home
              </Text>
            </View>

            <StarRating rating={4.5} />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              left: -4,
              justifyContent: "space-between",
            }}
          >
            <IconButton.Primary label={"Locate"} />
            <IconButton.Secondary icon={"rate-review"} label={"Rate"} />
          </View>

          {/*Packages*/}
          <Packages
            data={getPackages(DummyPackages, params.serviceData.packages)}
            serviceData={params.serviceData}
          />
          <Text
            style={{ marginTop: 8, fontSize: 20, padding: 8, color: "black" }}
          >
            Reviews
          </Text>
          <Text
            style={{
              paddingHorizontal: 16,
              fontWeight: "bold",
              fontSize: 15,
              color: "grey",
            }}
          >
            No Reviews Found
          </Text>
        </Animatable.View>
      </View>
    </View>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  content: {
    padding: 8,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginVertical: 4,
    color: "black",
  },
});
