import { IPackage, IPackages, IService, IServices } from "@/types/common_types";
import { StackScreenProps } from "@react-navigation/stack";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MerchantHomeTabNav from "@pages/home/merchant/MerchantHomeTabNav";

export type RootStackParamList = {
  Landing: undefined;
  Home: {
    userRole: "merchant" | "client";
    routeParams: NavigatorScreenParams<HomeDrawerParamList>;
  };
  SignIn: undefined;
  SignUp: NavigatorScreenParams<SignUpStackParamList>;
  ForgotPassword: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeDrawerParamList = {
  DrawerRoot:
    | NavigatorScreenParams<HomeTabParamList>
    | { screen: string; params: NavigatorScreenParams<HomeTabParamList> };
  Settings: { userId: string };
};

export type HomeDrawerScreenProps<T extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeTabParamList = {
  Home: NavigatorScreenParams<HomeDashboardStackParamList>;
  Maps: undefined;
  Chats: undefined;
  Appointments: { screen: string };
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

export type SignUpStackParamList = {
  Id: { userRole: "merchant" | "client" };
  VerifyId: { userRole: "merchant" | "client"; token: string };
  ServicesProvided: { token: string };
  UserDetails: { token: string };
  MerchantDetails: { token: string };
  BusinessDetails: { token: string };
  AccountDetails: undefined;
};

export type SignUpStackScreenProps<T extends keyof SignUpStackParamList> =
  CompositeScreenProps<
    StackScreenProps<SignUpStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MerchantHomeTabParamList = {
  Home: NavigatorScreenParams<MerchantHomeStackParamList>;
  QuickAccess: undefined;
  Chats: undefined;
  Appointments: { screen: string };
};

export type MerchantHomeTabScreenProps<
  T extends keyof MerchantHomeTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<MerchantHomeTabParamList, T>,
  HomeDrawerScreenProps<keyof HomeDrawerParamList>
>;

export type MerchantHomeStackParamList = {
  Dashboard: { userId: "guest" | string };
  AddPackage: undefined;
};

export type MerchantHomeStackScreenProps<
  T extends keyof MerchantHomeStackParamList
> = CompositeScreenProps<
  StackScreenProps<MerchantHomeStackParamList, T>,
  MerchantHomeTabScreenProps<keyof MerchantHomeTabParamList>
>;

export type MerchantQAStackParamList = {
  QuickActions: undefined;
  UpdateAvailability: undefined;
  UpdateOffers: undefined;
};

export type MerchantQAStackScreenProps<
  T extends keyof MerchantQAStackParamList
> = CompositeScreenProps<
  StackScreenProps<MerchantQAStackParamList, T>,
  MerchantHomeTabScreenProps<keyof MerchantHomeTabParamList>
>;
