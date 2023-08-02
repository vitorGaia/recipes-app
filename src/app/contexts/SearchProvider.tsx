import { createContext, useState } from "react";
import { Icons, Meals, SearchContextValues, SearchProviderProps } from "../types";
import { headerIcons } from "../images/header";
import { usePathname } from "next/navigation";
import { getDrinksByParams, getMealsByParams } from "../../../services/api/search";

const defaultSearchContextValues: SearchContextValues = {
  activeSearch: false,
  setActiveSearch: () => {},
  icons: {
    meals: '',
    drinks: '',
    donerecipes: '',
    favorites: '',
    profile: '',
  },
  formatPath: '',
  setSearchType: () => {},
  setSearchQuery: () => {},
  handleSearch: () => {},
  searchButtonDisable: true,
};

const SearchContext = createContext<SearchContextValues>(defaultSearchContextValues);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();

  const icons: Icons = {
    meals: headerIcons.mealsIcon,
    drinks: headerIcons.drinksIcon,
    donerecipes: headerIcons.doneRecipesIcon,
    favorites: headerIcons.favoritesIcon,
    profile: headerIcons.profileIcon,
  };
  const formatPath = pathname.substring(pathname.lastIndexOf("/") + 1).toLowerCase();
  const searchButtonDisable = searchType.length === 0 || searchQuery.length === 0;

  const handleSearch = async () => {
    if (searchType === 'first letter' && searchQuery.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    if (pathname === '/pages/Meals') {
      const data = await getMealsByParams<Meals[]>(searchType, searchQuery);
      console.log(data);
    }
    if (pathname === '/pages/Drinks') {
      const data = await getDrinksByParams<Meals[]>(searchType, searchQuery);
      console.log(data);
    }
  };

  const values = {
    activeSearch,
    setActiveSearch,
    icons,
    formatPath,
    setSearchType,
    setSearchQuery,
    handleSearch,
    searchButtonDisable,
  };

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  )
};

export { SearchProvider, SearchContext };