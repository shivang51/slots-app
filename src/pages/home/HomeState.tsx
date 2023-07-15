import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface HomeStateInterface {
  isDashboardHome: boolean;
  hideTabBar: boolean;
}

const HomeStateContext = createContext({
  homeState: {} as Partial<HomeStateInterface>,
  setHomeState: {} as Dispatch<SetStateAction<Partial<HomeStateInterface>>>,
});

const HomeStateProvider = ({
  children,
  value = { isDashboardHome: true, hideTabBar: false } as HomeStateInterface,
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
