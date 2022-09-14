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

export type ButtonProps = {
  text: string;
  setJokesToDisplay: UseStateSetJokes;
  inputValue?: number;
};

export type InputButtonProps = ButtonProps;

export type JokeCardListProps = {
  jokesToDisplay: FetchedJoke[];
};

export type InputProps = {
  setInputValue: React.Dispatch<React.SetStateAction<number | undefined>>;
};
