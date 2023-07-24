import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface HomeStateInterface {
  showTabBarHeader: boolean;
  hideTabBar: boolean;
  userRole: "merchant" | "client";
  userName: string;
}

const HomeStateContext = createContext({
  homeState: {} as Partial<HomeStateInterface>,
  setHomeState: {} as Dispatch<SetStateAction<Partial<HomeStateInterface>>>,
});

const HomeStateProvider = ({
  children,
  value = {
    showTabBarHeader: true,
    hideTabBar: false,
    userRole: "client",
    userName: "Guest",
  } as HomeStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<HomeStateInterface>;
}) => {
  const [homeState, setHomeState] = useState(value);
  return (
    <HomeStateContext.Provider
      value={{ homeState: homeState, setHomeState: setHomeState }}
    >
      {children}
    </HomeStateContext.Provider>
  );
};

const useHomeState = () => {
  const context = useContext(HomeStateContext);
  if (!context) {
    throw new Error("useHomeState must be used within a HomeStateContext");
  }
  return context;
};

export { HomeStateProvider, useHomeState };
