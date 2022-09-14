import { useState } from "react";

import { JokeCardList } from "../components/JokeCardList";
import { FetchedJoke } from "../types";
import { Controls } from "./Controls";

export function PageContent() {
  const [jokesToDisplay, setJokesToDisplay] = useState<FetchedJoke[]>([]);

  // const handleClick = () => {
  //   getRandomJokes(4).then((res) => {
  //     setJokesToDisplay(res);
  //   });
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>click me</button> */}
      <Controls setJokesToDisplay={setJokesToDisplay} />
      <JokeCardList jokesToDisplay={jokesToDisplay} />
    </div>
  );
}
