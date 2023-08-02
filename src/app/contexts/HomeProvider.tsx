import { createContext } from "react";
import { HomeProviderProps } from "../types/HomeProvider";

const defaultHomeContextValues = {};

const HomeContext = createContext({});

const HomeProvider = ({ children }: HomeProviderProps) => {
  const values = {};

  return (
    <HomeContext.Provider value={values}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };