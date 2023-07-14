import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { Colors } from "@/utils/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
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
import { createStackNavigator } from "@react-navigation/stack";
import PackageSelection from "./PackageSelection";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabNavigationProp } from "./HomeIndex";
import TagsLine from "@components/TagsLine";

const SearchBox = () => {
  return (
    <View style={searchBoxStyles.box}>
      <TextInput
        style={searchBoxStyles.textArea}
        placeholder="Search for services"
      />

      <Icon
        style={searchBoxStyles.button}
        // onPress={() => null}
        name="search"
        size={24}
      />
    </View>
  );
};

const Service = (props: { data: IService }) => {
  const navigation = useNavigation<TabNavigationProp>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("service_details", { serviceData: props.data })
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
          <Image
            style={styles.serviceBanner}
            onError={(err) => console.error(err)}
            source={{ uri: props.data.banner }}
          />
        </View>
        <Text numberOfLines={1} style={styles.serviceTitle}>
          {props.data.name}
        </Text>
        <Text numberOfLines={1} style={undefined}>
          Opens till{" "}
          {new Date(Date.parse(props.data.time.close))
            .toLocaleTimeString()
            .replace(/(.*)\D\d+/, "$1")}
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

const Services = (props: { id: number; data: IService[] }) => {
  const serviceType = availableServiceFromId(props.id);
  const navigation = useNavigation<TabNavigationProp>();

  return (
    <View style={styles.services}>
      <Pressable onPress={() => navigation.navigate("service_list")}>
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

const Dashboard = () => {
  return (
    <View style={styles.body}>
      <SearchBox />
      <TagsLine tags={DummyTags} />

      <ScrollView>
        <View style={styles.services}>
          <View style={styles.servicesHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.servicesIcon}
                source={Icons.categorize}
                contentFit="fill"
              />
              <Text style={styles.servicesHeading}>Categories</Text>
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            {Categories.map((v, ind) => (
              <View style={styles.category} key={ind}>
                <Image
                  style={styles.servicesIcon}
                  source={v.icon}
                  contentFit="fill"
                />
                <Text style={{ marginLeft: 4 }}>{v.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <Services id={0} data={DummyServices} />
        <Services id={0} data={DummyServices} />
        <Services id={0} data={DummyServices} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    padding: 8,
    paddingBottom: 58,
  },

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
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "bold",
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

  categoriesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
  },

  category: {
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 4,
  },
});

const searchBoxStyles = StyleSheet.create({
  box: {
    width: "100%",
    paddingHorizontal: 26,
    paddingVertical: 8,
    borderRadius: 32,
    borderColor: Colors.black,
    borderWidth: 2,
    justifyContent: "center",
  },
  textArea: {
    color: Colors.black,
    fontSize: 15,
  },
  button: {
    position: "absolute",
    right: 26,
  },
});

export default Dashboard;
