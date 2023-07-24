import { StyleSheet, Text, View } from "react-native";
import TagsLine from "@components/TagsLine";
import { DummyPackages, DummyServices, DummyTags } from "@utils/Dummy";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import SearchBox from "@pages/home/client/dashboard/components/SearchBox";
import Services from "@pages/home/client/dashboard/components/Services";
import Categories from "@pages/home/client/dashboard/components/Categories";
import { Colors } from "@utils/GlobalStyles";
import {
  HomeDashboardStackScreenProps,
  HomeTabScreenProps,
} from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";
import { IService, IServices } from "@/types/common_types";
import { getPackages, organizeServices } from "@utils/Utils";
import DashboardCarousel from "@pages/home/client/dashboard/components/DashboardCarousel";
import DashboardPackages from "@pages/home/client/dashboard/components/DashboardPackages";

const Dashboard = ({ route }: HomeDashboardStackScreenProps<"Dashboard">) => {
  const { setHomeState } = useHomeState();

  const [organizedServices, setOrganizedServices] = useState<{
    [id: number]: IServices;
  }>([]);

  useEffect(() => {
    setOrganizedServices(organizeServices(DummyServices));
  }, [DummyServices]);

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({
        ...prevState,
        hideTabBar: false,
        showTabBarHeader: true,
      }));

      return () => {
        setHomeState((prevState) => ({
          ...prevState,
          showTabBarHeader: false,
        }));
      };
    }, [])
  );

  return (
    <View style={styles.body}>
      <SearchBox />
      <TagsLine tags={DummyTags} />

      <ScrollView>
        <Categories />

        <DashboardCarousel />

        {Object.keys(organizedServices)
          .slice(0, 2)
          .map((v, ind) => (
            <Services
              key={ind}
              id={parseInt(v)}
              data={organizedServices[parseInt(v)] ?? []}
            />
          ))}
        <DashboardPackages
          name={"Hair Cut"}
          packages={getPackages(DummyPackages, ["s1", "s2", "s3"])}
        />
        {Object.keys(organizedServices)
          .slice(2)
          .map((v, ind) => (
            <Services
              key={ind}
              id={parseInt(v)}
              data={organizedServices[parseInt(v)] ?? []}
            />
          ))}
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
