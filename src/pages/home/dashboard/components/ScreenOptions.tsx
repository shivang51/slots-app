import {
  HomeDashboardStackParamList,
  HomeDashboardStackScreenProps,
  HomeTabScreenProps,
} from "@/types/route_types";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { IService } from "@/types/common_types";
import * as ExpoImage from "expo-image";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { AvailableServices } from "@utils/AvalilableServices";

interface IPackageSelectionProps {
  route: RouteProp<HomeDashboardStackParamList, "PackageSelection">;
  navigation: any;
}

export const packageSelectionScreenOptions: (
  props: IPackageSelectionProps,
) => StackNavigationOptions = (props: IPackageSelectionProps) => {
  const serviceData = (props.route.params as { serviceData: IService })
    .serviceData;

  return {
    headerTitle: serviceData.name + " Packages",
    headerTitleAlign: "left",
    headerRight: (props) => (
      <ExpoImage.Image
        source={{ uri: serviceData.banner }}
        style={{
          width: 36,
          height: 36,
          borderRadius: 48,
          marginRight: 8,
        }}
      />
    ),
  };
};

interface IBookAppointmentProps {
  route: RouteProp<HomeDashboardStackParamList, "BookAppointment">;
  navigation: any;
}
export const bookAppointmentScreenOptions: (
  props: IBookAppointmentProps,
) => StackNavigationOptions = (props: IBookAppointmentProps) => {
  const { packageData, serviceName } = props.route.params;

  return {
    headerTitle: `${packageData.name} at ${serviceName}`,
    headerTitleAlign: "left",
    headerRight: undefined,
  };
};

interface IServiceListProps {
  route: RouteProp<HomeDashboardStackParamList, "ServiceList">;
  navigation: any;
}
export const serviceListScreenOptions: (
  props: IServiceListProps,
) => StackNavigationOptions = (props: IServiceListProps) => {
  const { services } = props.route.params;

  const serviceName = AvailableServices.All[services[0].typeId].name;

  return {
    headerTitle: `${serviceName}s Near You`,
    headerTitleAlign: "left",
    headerRight: undefined,
  };
};
