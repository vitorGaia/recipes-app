import { Dispatch, ReactNode, SetStateAction } from "react";

export type Icons = {
  [key: string]: string;
  meals: string;
  drinks: string;
  donerecipes: string;
  favorites: string;
  profile: string;
}

export type SearchProviderProps = {
  children: ReactNode;
}

export type SearchContextValues = {
  activeSearch: boolean;
  setActiveSearch: Dispatch<SetStateAction<boolean>>;
}