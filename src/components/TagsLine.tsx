import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import { Tags } from "@utils/Types";

interface ITagsProps {
  tags: Tags;
}

const TagsLine = (props: ITagsProps) => {
  return (
    <View style={styles.tagsLine}>
      {props.tags.map((value, ind) => (
        <View
          key={ind}
          style={[
            styles.tommalButton,
            styles.tag,
            value.active ? styles.tagActive : null,
          ]}
        >
          <Pressable>
            <Text>{value.name}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default TagsLine;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    padding: 8,
    paddingBottom: 58,
  },
  tagsLine: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
  },

  tommalButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 32,
  },
  tag: {
    marginHorizontal: 4,
  },

  tagActive: {
    backgroundColor: Colors.black,
  },
});