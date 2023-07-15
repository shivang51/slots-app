import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { DummyPackage, DummyPackageTags, DummyTags } from "@utils/Dummy";
import TagsLine from "@components/TagsLine";
import { Image } from "expo-image";
import { IPackage, IService } from "@/types/common_types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeDashboardStackScreenProps } from "@/types/route_types";

const Package = (props: {
  data: IPackage;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.singleLine, styles.package]}>
        <Image
          source={{ uri: props.data.image }}
          style={{ width: 100, height: 100, borderRadius: 8, marginRight: 8 }}
        />
        <View>
          <Text style={styles.title}>{props.data.name}</Text>

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

const PackageSelection = ({
  navigation,
  route,
}: HomeDashboardStackScreenProps<"PackageSelection">) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <TagsLine tags={DummyPackageTags} />
      <Package
        data={DummyPackage}
        onPress={() =>
          navigation.navigate("BookAppointment", {
            packageData: DummyPackage,
            serviceName: "Belle Curls",
          })
        }
      />
      <Package
        data={DummyPackage}
        onPress={() =>
          navigation.navigate("BookAppointment", {
            packageData: DummyPackage,
            serviceName: "Belle Curls",
          })
        }
      />
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
});
