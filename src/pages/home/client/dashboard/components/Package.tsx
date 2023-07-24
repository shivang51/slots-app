import { IPackage } from "@/types/common_types";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { SharedElement } from "react-navigation-shared-element";

const Package = (props: {
  data: IPackage;
  onPress?: (event: GestureResponderEvent) => void;
  marginHorizontal?: number;
}) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{ marginHorizontal: props.marginHorizontal ?? 0 }}
    >
      <View style={[styles.singleLine, styles.package]}>
        <SharedElement id={`item.${props.data.id}.image`}>
          <Image
            source={{ uri: props.data.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
              marginRight: 8,
              resizeMode: "cover",
            }}
          />
        </SharedElement>
        <View>
          <Text style={[styles.title]}>{props.data.name}</Text>

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
                <Text style={[styles.tag, styles.on_site]}>On site</Text>
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
                color: Colors.gray,
              }}
            >
              ₹{props.data.price}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
              ₹
              {Math.floor(
                props.data.price -
                  props.data.price * (props.data.discount / 100)
              )}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Package;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    letterSpacing: 0.5,
    marginBottom: 2,
    color: "black",
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

  singleLine: {
    flexDirection: "row",
    width: "100%",
  },

  tag: {
    marginHorizontal: 2,
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
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
