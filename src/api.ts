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
  displayedJokes: FetchedJoke[],
  category?: string
) => {
  let array: FetchedJoke[] = [];
  const tryLimit = 10;
  let tries = 0;
  if (category) {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random?category=${category}`);
      if (
        array
          .concat(displayedJokes)
          .find(({ id }) => id === response.data.id) === undefined
      ) {
        array.push(response.data);
        tries = 0;
      } else if (tries >= tryLimit) {
        toast.info("There aren't enough jokes in this category.");
        break;
      } else {
        i--;
        tries++;
      }
    }
  } else {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random`);
      if (
        array
          .concat(displayedJokes)
          .find(({ id }) => id === response.data.id) === undefined
      ) {
        array.push(response.data);
        tries = 0;
      } else if (tries >= tryLimit) {
        toast("There aren't enough jokes in this category.");
        break;
      } else {
        i--;
        tries++;
      }
    }
  }
  return array;
};

export const getJokesBySearch = async (query: string) => {
  const response = await api.get(`/jokes/search?query=${query}`);
  return response.data;
};
