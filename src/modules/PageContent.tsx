import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import { getRandomJokes } from "../api";
import { JokeCardList } from "../components/JokeCardList";
import { GlobalStatesContext } from "../utils/GlobalStatesContext";
import { Controls } from "./Controls";

export function PageContent() {
  const { setIsLoading, setJokesToDisplay } = useContext(GlobalStatesContext);

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
      <Controls />
      <JokeCardList />
    </div>
  );
}
