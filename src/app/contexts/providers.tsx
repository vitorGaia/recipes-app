'use client';
import { ReactNode } from "react";
import { SearchProvider } from "./SearchProvider";

interface SearchProviderProps {
  children: ReactNode;
}

export function Providers({ children }: SearchProviderProps) {
  return (
    <SearchProvider>
      {children}
    </SearchProvider>
  );
}