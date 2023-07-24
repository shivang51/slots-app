import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@utils/GlobalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useHomeState } from "@pages/home/HomeState";
import { MerchantHomeStackScreenProps } from "@/types/route_types";
import { useFocusEffect } from "@react-navigation/native";
import FAB from "@pages/home/components/FAB";

const Dashboard = ({
  navigation,
}: MerchantHomeStackScreenProps<"Dashboard">) => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({
        ...prevState,
        hideTabBar: false,
        showTabBarHeader: true,
      }));
    }, [])
  );

  return (
    <View style={styles.body}>
      {/* <Text style={styles.heading}>Packages offered by you</Text> */}
      {/* <ScrollView></ScrollView> */}

      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.notFound}>No Packages Found</Text>
        <Text style={{ fontSize: 18, marginTop: 8, color: "grey" }}>
          Start by clicking{" "}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add Package</Text>{" "}
          button
        </Text>
      </View>

      <FAB
        onPress={() => navigation.navigate("AddPackage")}
        label={"Add Package"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    padding: 16,
  },
  notFound: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  heading: {
    fontSize: 18,
  },
});

export default Dashboard;
