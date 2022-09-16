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

export type CountInputProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setJokesToDisplay: React.Dispatch<React.SetStateAction<FetchedJoke[]>>;
  jokesToDisplay: FetchedJoke[];
};
