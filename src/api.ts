import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.chucknorris.io",
});

export const getRandomJoke = async () => api.get("/jokes/random");

export const getRandomJokes = async (count: number) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(api.get("/jokes/random"));
  }
  return Promise.all(result);
  //   return result;
};

export const getCategories = async () => api.get("/jokes/categories");

export const getRandomJokeFromCategory = async (category: string) =>
  api.get(`/jokes/random?category=${category}`);

export const getJokesBySearch = async (query: string) =>
  api.get(`/jokes/search?${query}`);
