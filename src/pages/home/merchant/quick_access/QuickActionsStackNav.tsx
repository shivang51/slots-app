import { createStackNavigator } from "@react-navigation/stack";
import { MerchantQAStackParamList } from "@/types/route_types";
import QuickActions from "@pages/home/merchant/quick_access/pages/QuickActions";
import UpdateAvailability from "@pages/home/merchant/quick_access/pages/UpdateAvailability";
import BackButton from "@components/BackButton";
import UpdateOffers from "@pages/home/merchant/quick_access/pages/UpdateOffers";

const StackNavigation = createStackNavigator<MerchantQAStackParamList>();

const QuickActionsStackNav = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerLeft: (props) => <BackButton onPress={() => props.onPress?.()} />,
      }}
    >
      <StackNavigation.Screen
        options={{ headerShown: false }}
        name={"QuickActions"}
        component={QuickActions}
      />
      <StackNavigation.Screen
        name={"UpdateAvailability"}
        component={UpdateAvailability}
        options={{ headerTitle: "Update Availability" }}
      />
      <StackNavigation.Screen
        name={"UpdateOffers"}
        component={UpdateOffers}
        options={{ headerTitle: "Update Offers" }}
      />
    </StackNavigation.Navigator>
  );
};

export default QuickActionsStackNav;
