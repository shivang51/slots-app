import { StyleSheet, Text, View } from "react-native";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import Card from "@pages/home/merchant/quick_access/components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { MerchantQAStackScreenProps } from "@/types/route_types";

const QuickActions = ({
  navigation,
}: MerchantQAStackScreenProps<"QuickActions">) => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: true }));
    }, [])
  );

  return (
    <View style={styles.container}>
      <Card
        title={"Update Availability"}
        onPress={() => navigation.navigate("UpdateAvailability")}
      >
        <Icon
          name={"briefcase-clock"}
          size={100}
          color={"black"}
          style={{ margin: 8 }}
        />
      </Card>

      <Card
        title={"Update Offers"}
        onPress={() => navigation.navigate("UpdateOffers")}
      >
        <MaterialIcon.default
          name={"local-offer"}
          size={100}
          color={"black"}
          style={{ margin: 8 }}
        />
      </Card>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
