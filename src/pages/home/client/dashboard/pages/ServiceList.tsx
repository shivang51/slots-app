import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { IService } from "@/types/common_types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Octicons from "react-native-vector-icons/Octicons";
import Icons from "@utils/Icons";
import TagsLine from "@components/TagsLine";
import { DummyTags } from "@utils/Dummy";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { ScrollView } from "react-native-gesture-handler";
import { useHomeState } from "@pages/home/HomeState";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const Service = (props: { data: IService }) => {
  const navigation =
    useNavigation<HomeDashboardStackScreenProps<"ServiceList">["navigation"]>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ServiceDetails", { serviceData: props.data })
      }
    >
      <View style={styles.service}>
        <SharedElement id={`item.${props.data.id}.banner`}>
          <Image
            resizeMethod={"scale"}
            style={styles.serviceBanner}
            onError={(err) => console.error(err)}
            source={{ uri: props.data.banner }}
          />
        </SharedElement>
        <View
          style={{
            justifyContent: "center",
            // alignItems: "center",
            paddingVertical: 8,
            flex: 1,
          }}
        >
          <SharedElement id={`item.${props.data.id}.title`}>
            <Text style={styles.serviceTitle}>{props.data.name}</Text>
          </SharedElement>
          <Animatable.View animation={"fadeInUp"} duration={500}>
            <Text numberOfLines={1} style={{ color: "black" }}>
              Opens till{" "}
              {new Date(Date.parse(props.data.time.close))
                .toLocaleTimeString()
                .replace(/(.*)\D\d+/, "$1")}
            </Text>
            <Text style={styles.serviceDistance} numberOfLines={1}>
              5 mins away
            </Text>
          </Animatable.View>
        </View>
        <Animatable.View
          style={{ alignItems: "center" }}
          animation={"fadeInUp"}
          duration={500}
        >
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
        </Animatable.View>
      </View>
    </Pressable>
  );
};

const ServiceList = ({
  route,
}: HomeDashboardStackScreenProps<"ServiceList">) => {
  const { setHomeState } = useHomeState();
  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, hideTabBar: false }));
    }, [])
  );
  return (
    <View style={styles.container}>
      <TagsLine tags={DummyTags} />
      <ScrollView style={{ marginBottom: 38 }}>
        {route.params.services.map((v, ind) => (
          <Service key={ind} data={v} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    paddingTop: 2,
  },

  notFound: {
    fontSize: 24,
    fontWeight: "bold",
  },

  service: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 4,
    padding: 16,
    backgroundColor: "rgb(240,240,240)",
    borderColor: "rgb(200,200,200)",
    borderWidth: 1,
    borderRadius: 8,
  },

  serviceBanner: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
    resizeMode: "cover",
  },

  serviceTitle: {
    fontSize: 18,
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
    flex: 1,
  },

  serviceRatingContainer: {
    height: 18,
    flexDirection: "row",
    marginBottom: 4,
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
    lineHeight: 14.5,
  },

  serviceVerifiedIcon: {
    width: 18,
    height: 18,
  },
});

export default ServiceList;
