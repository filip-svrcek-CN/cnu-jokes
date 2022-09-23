import axios from "axios";
import { toast } from "react-toastify";

import { FetchedJoke } from "./types";

const api = axios.create({
  baseURL: "https://api.chucknorris.io",
});

export const getCategories = async () => {
  const response = await api.get("/jokes/categories");
  return response.data;
};

export const getRandomJokes = async (
  count: number,
  category?: string,
  displayedJokes?: FetchedJoke[]
) => {
  let array: FetchedJoke[] = [];
  const tryLimit = 30;
  let tries = 0;

  const url = category ? `/jokes/random?category=${category}` : `/jokes/random`;

  for (let i = 0; i < count; i++) {
    const response = await api.get(url);

    if (
      !displayedJokes &&
      array.find(({ id }) => id === response.data.id) === undefined
    ) {
      array.push(response.data);
    } else if (
      displayedJokes &&
      array.concat(displayedJokes).find(({ id }) => id === response.data.id) ===
        undefined
    ) {
      array.push(response.data);
      tries = 0;
    } else if (tries >= tryLimit) {
      toast.info("There might not be enough unique jokes in this category.");
      break;
    } else {
      i--;
      tries++;
    }
  }
  return array;
};

export const getJokesBySearch = async (query: string) => {
  const response = await api.get(`/jokes/search?query=${query}`);
  return response.data;
};
