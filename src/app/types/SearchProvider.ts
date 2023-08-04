import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

export type Icons = {
  [key: string]: string;
  meals: string;
  drinks: string;
  donerecipes: string;
  favorites: string;
  profile: string;
}

export type SearchContextValues = {
  activeSearch: boolean;
  setActiveSearch: Dispatch<SetStateAction<boolean>>;
  icons: Icons;
  formatPath: string;
  setSearchType: Dispatch<SetStateAction<string>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleSearch: MouseEventHandler<HTMLButtonElement>;
  searchButtonDisable: boolean;
  headerRecipes: Recipes;
};

export type Recipes = {
  meals: Meals[];
  drinks: Drinks[];
  length: number;
}

export type Meals = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type Drinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type SearchProviderProps = {
  children: ReactNode;
}