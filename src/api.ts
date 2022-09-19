import axios from "axios";

import { FetchedJoke } from "./types";

const api = axios.create({
  baseURL: "https://api.chucknorris.io",
});

export const getCategories = async () => {
  const response = await api.get("/jokes/categories");
  return response.data;
};

export const getRandomJokes = async (count: number, category?: string) => {
  let array: FetchedJoke[] = [];
  if (category) {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random?category=${category}`);
      array.push(response.data);
    }
  } else {
    for (let i = 0; i < count; i++) {
      const response = await api.get(`/jokes/random`);
      array.push(response.data);
    }
  }

  return array;
};

export const getJokesBySearch = async (query: string) => {
  const response = await api.get(`/jokes/search?${query}`);
  return response.data;
};
