'use client';
import { SearchProvider } from "./SearchProvider";
import { HomeProvider } from "./HomeProvider";
import { SearchProviderProps } from "../types/SearchProvider";

export function Providers({ children }: SearchProviderProps) {
  return (
    <SearchProvider>
      <HomeProvider>
        {children}
      </HomeProvider>
    </SearchProvider>
  );
}