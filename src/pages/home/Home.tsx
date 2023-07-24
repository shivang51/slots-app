import { HomeStateProvider } from "@pages/home/HomeState";
import HomeDrawerNavigation from "@pages/home/HomeDrawerNavigation";
import { RootStackScreenProps } from "@/types/route_types";

const Home = (props: RootStackScreenProps<"Home">) => {
  return (
    <HomeStateProvider>
      <HomeDrawerNavigation {...props} />
    </HomeStateProvider>
  );
};

export default Home;
