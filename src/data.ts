import { createContext } from 'react';

type globalType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export type propsType = {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    tending: {
      large: string;
      small: string;
    };
  };
  title: string;
  year: number;
};
export const GlobalStates = createContext<globalType | null>(null);
