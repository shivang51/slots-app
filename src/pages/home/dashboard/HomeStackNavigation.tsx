import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeDashboardStackParamList,
  HomeTabScreenProps,
} from "@/types/route_types";
import Dashboard from "@pages/home/dashboard/Dashboard";
import ServiceDetails from "@pages/home/dashboard/pages/ServiceDetails";
import BookAppointment from "@pages/home/dashboard/pages/BookAppointment";
import ServiceList from "@pages/home/dashboard/pages/ServiceList";
import PackageSelection from "@pages/home/dashboard/pages/PackageSelection";
import ConfirmAppointment from "@pages/home/dashboard/pages/ConfirmAppointment";
import {
  bookAppointmentScreenOptions,
  packageSelectionScreenOptions,
  serviceListScreenOptions,
} from "@pages/home/dashboard/components/ScreenOptions";
import BackButton from "@components/BackButton";
import FriendsDetails from "@pages/home/dashboard/pages/FriendsDetails";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { IPackages, IService, IServices } from "@/types/common_types";

const HomeStackNavigator =
  createSharedElementStackNavigator<HomeDashboardStackParamList>();

const HomeStackNavigation = ({
  route,
  navigation,
}: HomeTabScreenProps<"Home">) => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        headerTitleStyle: {
          fontSize: 22,
        },

        transitionSpec: {
          open: {
            animation: "spring",
            config: { bounciness: 5, velocity: 5 },
          },
          close: {
            animation: "spring",
            config: { bounciness: 5, velocity: 5 },
          },
        },
      }}
    >
      <HomeStackNavigator.Screen
        options={{ headerShown: false }}
        name={"Dashboard"}
        component={Dashboard}
        initialParams={{ userId: "guest" }}
      />

      <HomeStackNavigator.Screen
        name={"ServiceList"}
        component={ServiceList}
        options={serviceListScreenOptions}
        sharedElements={(route, otherRoute, showing) => {
          if (!route.params) return [];
          const data = route.params as { services: IServices };
          let banners: string[] = [];
          let titles: any[] = [];
          data.services.forEach((v) => {
            banners.push(`item.${v.id}.banner`);
            titles.push({
              id: `item.${v.id}.title`,
              animation: "fade",
              resize: "clip",
              align: "left-top",
            });
          });
          return [...titles, ...banners];
        }}
      />

      <HomeStackNavigator.Screen
        name={"ServiceDetails"}
        component={ServiceDetails}
        options={{ headerTitle: "Details" }}
        sharedElements={(route, otherRoute, showing) => {
          if (!route.params) return [];
          const data = route.params.serviceData;
          return [
            { id: `item.${data.id}.banner` },
            {
              id: `item.${data.id}.title`,
              animation: "fade",
              resize: "clip",
              align: "left-top",
            },
          ];
        }}
      />

      <HomeStackNavigator.Screen
        name={"PackageSelection"}
        component={PackageSelection}
        options={packageSelectionScreenOptions}
        sharedElements={(route) => {
          const data = route.params as {
            serviceName: string;
            packages: IPackages;
            serviceId: number;
          };
          return data.packages.map((v) => `item.${v.id}.image`);
        }}
      />

      <HomeStackNavigator.Screen
        name={"BookAppointment"}
        component={BookAppointment}
        options={bookAppointmentScreenOptions}
      />

      <HomeStackNavigator.Screen
        name={"FriendsDetails"}
        component={FriendsDetails}
        options={{
          headerTitle: "Friends Details",
        }}
      />

      <HomeStackNavigator.Screen
        name={"ConfirmAppointment"}
        component={ConfirmAppointment}
        options={{
          headerTitle: "Confirm Your Appointment",
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStackNavigation;
