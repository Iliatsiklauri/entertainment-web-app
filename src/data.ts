import { createContext } from 'react';

type globalType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const GlobalStates = createContext<globalType | null>(null);
