import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeDashboardStackParamList,
  HomeTabScreenProps,
} from "@/types/route_types";
import Dashboard from "@pages/home/dashboard/Dashboard";
import ServiceDetails from "@pages/home/dashboard/components/ServiceDetails";
import BookAppointment from "@pages/home/dashboard/components/BookAppointment";
import ServiceList from "@pages/home/dashboard/components/ServiceList";
import PackageSelection from "@pages/home/dashboard/components/PackageSelection";
import ConfirmAppointment from "@pages/home/dashboard/components/ConfirmAppointment";
import {
  bookAppointmentScreenOptions,
  packageSelectionScreenOptions,
  serviceListScreenOptions,
} from "@pages/home/dashboard/components/ScreenOptions";
import BackButton from "@components/BackButton";
import FriendsDetails from "@pages/home/dashboard/components/FriendsDetails";

const HomeStackNavigator = createStackNavigator<HomeDashboardStackParamList>();

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
      />

      <HomeStackNavigator.Screen
        name={"ServiceDetails"}
        component={ServiceDetails}
        options={{ headerTitle: "Details" }}
      />

      <HomeStackNavigator.Screen
        name={"PackageSelection"}
        component={PackageSelection}
        options={packageSelectionScreenOptions}
      />

      <HomeStackNavigator.Screen
        name={"BookAppointment"}
        component={BookAppointment}
        options={bookAppointmentScreenOptions}
      />

      <HomeStackNavigator.Screen
        name={"FriendsDetails"}
        component={FriendsDetails}
      />

      <HomeStackNavigator.Screen
        name={"ConfirmAppointment"}
        component={ConfirmAppointment}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStackNavigation;
