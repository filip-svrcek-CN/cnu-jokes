import axios from "axios";

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
  if (category) {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random?category=${category}`);
      array.concat(displayedJokes).find(({ id }) => id === response.data.id) ===
      undefined
        ? array.push(response.data)
        : i--;
    }
  } else {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random`);
      array.concat(displayedJokes).find(({ id }) => id === response.data.id) ===
      undefined
        ? array.push(response.data)
        : i--;
    }
  }
  return array;
};

export const getJokesBySearch = async (query: string) => {
  const response = await api.get(`/jokes/search?query=${query}`);
  return response.data;
};
