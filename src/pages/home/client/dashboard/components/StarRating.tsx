import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import React from "react";

const StarRating = (props: { rating: number }) => {
  const dec = props.rating - Math.floor(props.rating);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 4 }}>
      <Text
        style={{
          marginRight: 8,
          fontSize: 16,
          fontWeight: "bold",
          color: "black",
        }}
      >
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

export default StarRating;
