import { IPackage, IPackages, IService, IServices } from "@/types/common_types";
import { StackScreenProps } from "@react-navigation/stack";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Landing: undefined;
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  SignIn: undefined;
  SignUp: { userRole: "merchant" | "client" };
  ForgotPassword: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeDrawerParamList = {
  DrawerRoot: NavigatorScreenParams<HomeTabParamList>;
};

export type HomeDrawerScreenProps<T extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeTabParamList = {
  Home:
    | NavigatorScreenParams<HomeDashboardStackParamList>
    | { homeStackScreenDashboard: boolean };
  Maps: undefined;
  Chats: undefined;
  Appointments: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    HomeDrawerScreenProps<keyof HomeDrawerParamList>
  >;

export type HomeDashboardStackParamList = {
  Dashboard: { userId: "guest" | string };

  ServiceList: { services: IServices };

  ServiceDetails: {
    serviceData: IService;
  };

  PackageSelection: {
    serviceId: string;
    serviceName: string;
    packages: IPackages;
  };

  BookAppointment: {
    packageData: IPackage;
    serviceName: string;
  };

  FriendsDetails: undefined;

  ConfirmAppointment: undefined;
};

export type HomeDashboardStackScreenProps<
  T extends keyof HomeDashboardStackParamList
> = CompositeScreenProps<
  StackScreenProps<HomeDashboardStackParamList, T>,
  HomeTabScreenProps<keyof HomeTabParamList>
>;
