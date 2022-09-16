import axios from "axios";

import { FetchedJoke } from "./types";

const api = axios.create({
  baseURL: "https://api.chucknorris.io",
});

export const getRandomJokes = async (count: number) => {
  let array: FetchedJoke[] = [];
  for (let i = 0; i < count; i++) {
    await api.get("jokes/random").then((res) => {
      array.push(res.data);
    });
  }
  return array;
};

export const getCategories = async () => api.get("/jokes/categories");

export const getRandomJokeFromCategory = async (category: string) =>
  await api.get(`/jokes/random?category=${category}`);

export const getJokesBySearch = async (query: string) =>
  await api.get(`/jokes/search?${query}`);

export const updateJokesArray = (
  array: Promise<FetchedJoke>[],
  joke: Promise<FetchedJoke>
) => {
  array.push(joke);
};
