import { StyleSheet, Text, View } from "react-native";
import TagsLine from "@components/TagsLine";
import { DummyServices, DummyTags } from "@utils/Dummy";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect } from "react";
import SearchBox from "@pages/home/dashboard/components/SearchBox";
import Services from "@pages/home/dashboard/components/Services";
import Categories from "@pages/home/dashboard/components/Categories";
import { Colors } from "@utils/GlobalStyles";
import {
  HomeDashboardStackScreenProps,
  HomeTabScreenProps,
} from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";

const Dashboard = ({ route }: HomeDashboardStackScreenProps<"Dashboard">) => {
  const { setState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setState({ isDashboardHome: true });

      return () => {
        setState({ isDashboardHome: false });
      };
    }, []),
  );

  return (
    <View style={styles.body}>
      <SearchBox />
      <TagsLine tags={DummyTags} />

      <ScrollView>
        <Categories />
        <Services id={0} data={DummyServices} />
        <Services id={1} data={DummyServices} />
        <Services id={2} data={DummyServices} />
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
});

export default Dashboard;
