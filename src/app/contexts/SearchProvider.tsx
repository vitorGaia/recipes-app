import { createContext, useState } from "react";
import { SearchContextValues, SearchProviderProps } from "../types";

const defaultSearchContextValues: SearchContextValues = {
  activeSearch: false,
  setActiveSearch: () => {},
};

const SearchContext = createContext<SearchContextValues>(defaultSearchContextValues);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);

  const values = {
    activeSearch,
    setActiveSearch
  };

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  )
};

export { SearchProvider, SearchContext };