import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getRandomJokes } from "../api";
import { JokeCardList } from "../components/JokeCardList";
import { FetchedJoke } from "../types";
import { LoadingStateContext } from "../utils/LoadingContext";
import { Controls } from "./Controls";

export function PageContent() {
  const [jokesToDisplay, setJokesToDisplay] = useState<FetchedJoke[]>([]);
  const { setIsLoading } = useContext(LoadingStateContext);

  useEffect(() => {
    setIsLoading(true);
    getRandomJokes(1)
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
      />
      <JokeCardList jokesToDisplay={jokesToDisplay} />
    </div>
  );
}
