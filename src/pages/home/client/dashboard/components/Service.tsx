import { IService } from "@/types/common_types";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import * as Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "@utils/GlobalStyles";
import Icons from "@utils/Icons";
import React from "react";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { parseHour } from "@utils/Utils";
import { SharedElement } from "react-navigation-shared-element";

const Service = (props: { data: IService }) => {
  const navigation =
    useNavigation<HomeDashboardStackScreenProps<"Dashboard">["navigation"]>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ServiceDetails", { serviceData: props.data })
      }
    >
      <View style={styles.service}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <SharedElement id={`item.${props.data.id}.banner`}>
            <Image
              source={{ uri: props.data.banner }}
              style={styles.serviceBanner}
            />
          </SharedElement>
        </View>
        <SharedElement id={`item.${props.data.id}.title`}>
          <Text numberOfLines={1} style={styles.serviceTitle}>
            {props.data.name}
          </Text>
        </SharedElement>
        <Text numberOfLines={1} style={{ color: "black" }}>
          Opens till {parseHour(parseInt(props.data.time.close.split(":")[0]))}
        </Text>
        <Text style={styles.serviceDistance} numberOfLines={1}>
          5 mins away
        </Text>
        <View style={styles.serviceBottomLine}>
          <View style={styles.serviceRatingContainer}>
            <View style={styles.serviceRatingWrapper}>
              <Octicons.default
                color={Colors.white}
                name="star-fill"
                size={12}
              />
              <Text style={styles.serviceRatingText}>{props.data.rating}</Text>
            </View>
          </View>
          <Image
            style={styles.serviceVerifiedIcon}
            source={Icons.verifiedIcon}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Service;

const styles = StyleSheet.create({
  service: {
    marginHorizontal: 8,
    flexDirection: "column",
    minHeight: 180,
    // maxWidth: 114,
  },

  serviceBanner: {
    width: 128,
    height: 128,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "cover",
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },

  serviceDistance: {
    color: "green",
  },

  serviceBottomLine: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  serviceRatingContainer: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    alignSelf: "flex-start",
    alignItems: "center",
  },

  serviceRatingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: "black",
    borderRadius: 4,
  },

  serviceRatingText: {
    marginLeft: 2,
    color: Colors.white,
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 14.5,
  },

  serviceVerifiedIcon: {
    width: 18,
    height: 18,
  },
});
