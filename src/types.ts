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

export type ControlsProps = {
  jokesToDisplay: FetchedJoke[];
  setJokesToDisplay: UseStateSetJokes;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type JokeCardListProps = {
  jokesToDisplay: FetchedJoke[];
};

export type CategorySelectProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type CountInputProps = {
  jokesToDisplay: FetchedJoke[];
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  selectedCategory: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchResult: FetchedJoke[];
};

export type SearchInputProps = {
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
};
