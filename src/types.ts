export type FetchedJoke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  value: string;
  url: string;
};

export type UseStateSetJokes = React.Dispatch<
  React.SetStateAction<FetchedJoke[]>
>;

export type CategorySelectProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type CountInputProps = {
  selectedCategory: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  searchResult: FetchedJoke[];
  isSearchActive: boolean;
  handleShowRandom: () => void;
};

export type SearchInputProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowRandom: () => void;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
};
