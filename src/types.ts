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
  setJokesToDisplay: UseStateSetJokes;
  jokesToDisplay: FetchedJoke[];
};

export type JokeCardListProps = {
  jokesToDisplay: FetchedJoke[];
};

export type CategorySelectProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  jokesToDisplay: FetchedJoke[];
  count: number;
};

export type CountInputProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  jokesToDisplay: FetchedJoke[];
  selectedCategory: string;
  searchQuery: string;
};

export type SearchInputProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
};
