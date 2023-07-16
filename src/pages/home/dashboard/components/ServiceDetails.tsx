import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { DummyPackage } from "@utils/Dummy";
import { Image } from "expo-image";
import { IPackage, IService } from "@/types/common_types";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Fontisto";
import * as MaterialIcon from "react-native-vector-icons/MaterialIcons";
import * as Octicons from "react-native-vector-icons/Octicons";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";

const Package = (props: {
  data: IPackage;
  onPress?: (event: GestureResponderEvent) => void;
  titleSize?: number;
  marginHorizontal?: number;
}) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{ marginHorizontal: props.marginHorizontal ?? 0 }}
    >
      <View style={[styles.singleLine, styles.package]}>
        <Image
          source={{ uri: props.data.image }}
          style={{ width: 100, height: 100, borderRadius: 8, marginRight: 8 }}
        />
        <View>
          <Text style={[styles.title, { fontSize: props.titleSize ?? 32 }]}>
            {props.data.name}
          </Text>

          <View
            style={[
              styles.singleLine,
              { marginVertical: 8, alignItems: "center" },
            ]}
          >
            {props.data.category == "both" ? (
              <>
                <Text style={[styles.tag, styles.men]}>Men</Text>
                <Text style={[styles.tag, styles.women]}>Women</Text>
              </>
            ) : (
              <Text
                style={[
                  styles.capitalize,
                  styles.tag,
                  styles[props.data.category],
                ]}
              >
                {props.data.category}
              </Text>
            )}

            {props.data.locationType == "both" ? (
              <>
                <Text style={[styles.tag, styles.on_site]}>On Site</Text>
                <Text style={[styles.tag, styles.home]}>Home</Text>
              </>
            ) : (
              <Text
                style={[
                  styles.capitalize,
                  styles.tag,
                  styles[props.data.category],
                ]}
              >
                {props.data.locationType}
              </Text>
            )}
          </View>

          <View style={[styles.singleLine, { alignItems: "center" }]}>
            <Text
              style={[
                styles.tag,
                {
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                },
              ]}
            >
              {props.data.discount}% off
            </Text>
            <Text
              style={{
                fontWeight: "400",
                marginHorizontal: 8,
                textDecorationLine: "line-through",
              }}
            >
              ₹{props.data.price}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>₹{80}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const StarRating = (props: { rating: number }) => {
  const dec = props.rating - Math.floor(props.rating);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 4 }}>
      <Text style={{ marginRight: 8, fontSize: 16, fontWeight: "bold" }}>
        {props.rating}
      </Text>
      <View style={{ flexDirection: "row" }}>
        {Array.from(Array(Math.floor(props.rating)).keys()).map((v, ind) => (
          <Icon
            key={ind}
            style={{ marginHorizontal: 4, color: "orange" }}
            name={"star"}
            size={15}
          />
        ))}

        {dec != 0.0 ? (
          <Icon
            style={{ marginHorizontal: 4, color: "orange" }}
            size={15}
            name={"star-half"}
          />
        ) : null}
      </View>
    </View>
  );
};

const IconButton = (props: { label: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 8,
        alignSelf: "flex-start",
        margin: 4,

        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <MaterialIcon.default name={"my-location"} size={24} color={"white"} />
      <Text style={{ marginLeft: 8, color: "white" }}>{props.label}</Text>
    </View>
  );
};

const SecondaryIconButton = (props: { label: string; icon: string }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: "flex-start",
        margin: 4,
      }}
    >
      <MaterialIcon.default name={props.icon} size={24} />
      <Text style={{ marginLeft: 8 }}>{props.label}</Text>
    </View>
  );
};

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
            serviceData: props.serviceData,
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
            titleSize={20}
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

const ServiceDetails = () => {
  const navigation =
    useNavigation<
      HomeDashboardStackScreenProps<"ServiceDetails">["navigation"]
    >();
  const route = useRoute();

  const params = route.params as { serviceData: IService };

  const { setHomeState } = useHomeState();
  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, hideTabBar: true }));
    }, []),
  );
  const windowWidth = Dimensions.get("window").width;

  const imageWidth = windowWidth * 0.9;

  const imageStyle = StyleSheet.create({
    crousel: {
      marginHorizontal: 4,
      borderRadius: 8,
      width: imageWidth,
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ height: "30%" }}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingBottom: 8 }}
        >
          <Image
            source={{ uri: params.serviceData.banner }}
            style={imageStyle.crousel}
          />
          <Image
            source={{ uri: params.serviceData.banner }}
            style={imageStyle.crousel}
          />
          <Image
            source={{ uri: params.serviceData.banner }}
            style={imageStyle.crousel}
          />
        </ScrollView>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{params.serviceData.name}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <View style={{ flexDirection: "row" }}>
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
              {params.serviceData.type}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginVertical: 4,
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              5 km
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
          <IconButton label={"Locate"} />
          <SecondaryIconButton icon={"chat-bubble"} label={"Chat"} />
          <SecondaryIconButton icon={"rate-review"} label={"Rate"} />
        </View>

        <Packages
          data={[DummyPackage, DummyPackage, DummyPackage]}
          serviceData={params.serviceData}
        />

        <Text style={{ marginTop: 8, fontSize: 20, padding: 8 }}>Reviews</Text>
        <Text
          style={{ paddingHorizontal: 16, fontWeight: "bold", fontSize: 15 }}
        >
          No Reviews Found
        </Text>
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

  image: {
    marginHorizontal: 4,
    width: 200,
    height: "30%",
    borderRadius: 8,
  },

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

  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginVertical: 4,
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
