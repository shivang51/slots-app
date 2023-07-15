import { View, Image, Text, StyleSheet } from "react-native";
import { Colors } from "@utils/GlobalStyles";
import Icons from "@utils/Icons";
import { AvailableCategories } from "@utils/AvailableCategories";

const Categories = () => {
  return (
    <View style={styles.services}>
      <View style={styles.servicesHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.servicesIcon} source={Icons.categorize} />
          <Text style={styles.servicesHeading}>Categories</Text>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        {AvailableCategories.map((v, ind) => (
          <View style={styles.category} key={ind}>
            <Image style={styles.servicesIcon} source={v.icon} />
            <Text style={{ marginLeft: 4 }}>{v.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
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
