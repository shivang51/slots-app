import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  HomeDashboardStackParamList,
  MerchantHomeStackParamList,
} from "@/types/route_types";
import MerchantHomeTabNav from "@pages/home/merchant/MerchantHomeTabNav";
import Dashboard from "@pages/home/merchant/dashboard/pages/Dashboard";
import AddPackage from "@pages/home/merchant/dashboard/pages/AddPackage";
import BackButton from "@components/BackButton";

const StackNavigation =
  createSharedElementStackNavigator<MerchantHomeStackParamList>();

const MerchantHomeStackNav = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name={"Dashboard"}
        component={Dashboard}
      />
      <StackNavigation.Screen
        options={{
          headerTitle: "Add Package",
          headerLeft: (props) => (
            <BackButton
              onPress={() => (props.onPress ? props.onPress() : null)}
            />
          ),
        }}
        name={"AddPackage"}
        component={AddPackage}
      />
    </StackNavigation.Navigator>
  );
};

export default MerchantHomeStackNav;
