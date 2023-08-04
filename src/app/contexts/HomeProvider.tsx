import { createContext, useContext, useEffect } from "react";
import { HomeProviderProps } from "../types/HomeProvider";
import { SearchContext } from "./SearchProvider";

const defaultHomeContextValues = {};

const HomeContext = createContext({});

const HomeProvider = ({ children }: HomeProviderProps) => {
  const { headerRecipes } = useContext(SearchContext);

  // useEffect(() => {
  //   console.log(headerRecipes);
  // }, [headerRecipes]);

  const values = {};

  return (
    <HomeContext.Provider value={values}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };