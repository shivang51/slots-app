import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FilePicker = (props: { buttonLabel: string; placeholder: string }) => {
  return (
    <View
      style={[
        styles.bannerForYourBusinessParent,
        styles.chooseImageWrapperFlexBox,
      ]}
    >
      <Text style={[styles.bannerForYour1, styles.chooseImageTypo]}>
        {props.placeholder}
      </Text>
      <View
        style={[styles.chooseImageWrapper, styles.chooseImageWrapperFlexBox]}
      >
        <Text style={[styles.chooseImage, styles.chooseImageTypo]}>
          {props.buttonLabel}
        </Text>
      </View>
    </View>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  chooseImageWrapperFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  chooseImageTypo: {
    textAlign: "left",
    fontSize: 15,
  },
  bannerForYour1: {
    fontWeight: "300",
    color: "#b4b4b4",
    width: 180,
  },
  chooseImage: {
    color: "#fff",
  },
  chooseImageWrapper: {
    borderRadius: 8,
    backgroundColor: "#000",
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bannerForYourBusinessParent: {
    borderRadius: 11,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
