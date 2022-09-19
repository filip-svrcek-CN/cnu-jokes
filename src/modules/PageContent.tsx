import { useEffect, useState } from "react";
import { getRandomJokes } from "../api";

import { JokeCardList } from "../components/JokeCardList";
import { FetchedJoke } from "../types";
import { Controls } from "./Controls";

export function PageContent() {
  const [jokesToDisplay, setJokesToDisplay] = useState<FetchedJoke[]>([]);

  return (
    <div>
      <Controls
        setJokesToDisplay={setJokesToDisplay}
        jokesToDisplay={jokesToDisplay}
      />
      <JokeCardList jokesToDisplay={jokesToDisplay} />
    </div>
  );
}
