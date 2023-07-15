import { HomeStateProvider } from "@pages/home/HomeState";
import HomeDrawerNavigation from "@pages/home/HomeDrawerNavigation";

const Home = () => {
  return (
    <HomeStateProvider>
      <HomeDrawerNavigation />
    </HomeStateProvider>
  );
};

export default Home;
