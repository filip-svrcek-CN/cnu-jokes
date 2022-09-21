import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getRandomJokes } from "../api";
import { JokeCardList } from "../components/JokeCardList";
import { FetchedJoke } from "../types";
import { Controls } from "./Controls";

export function PageContent() {
  const [jokesToDisplay, setJokesToDisplay] = useState<FetchedJoke[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRandomJokes(1, jokesToDisplay)
      .then((res) => {
        setJokesToDisplay(res);
      })
      .catch(() => {
        toast.error("There has been an error fetching the jokes!", {
          autoClose: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Controls
        jokesToDisplay={jokesToDisplay}
        setJokesToDisplay={setJokesToDisplay}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <JokeCardList jokesToDisplay={jokesToDisplay} />
    </div>
  );
}
