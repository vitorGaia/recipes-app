import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextValues {
  activeSearch: boolean;
  setActiveSearch: Dispatch<SetStateAction<boolean>>;
}

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