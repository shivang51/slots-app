import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface HomeStateInterface {
  isDashboardHome: boolean;
}

const HomeStateContext = createContext({
  state: {} as Partial<HomeStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<HomeStateInterface>>>,
});

const HomeStateProvider = ({
  children,
  value = { isDashboardHome: true } as HomeStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<HomeStateInterface>;
}) => {
  const [state, setState] = useState(value);
  return (
    <HomeStateContext.Provider value={{ state, setState }}>
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
