import React, { useState } from "react";

import { FetchedJoke } from "../types";

export const GlobalStatesContext = React.createContext<any>(null);

type Children = { children: JSX.Element };

export function GlobalStatesContextProvider({ children }: Children) {
  const [isLoading, setIsLoading] = useState(false);
  const [jokesToDisplay, setJokesToDisplay] = useState<FetchedJoke[]>([]);

  return (
    <GlobalStatesContext.Provider
      value={{ isLoading, setIsLoading, jokesToDisplay, setJokesToDisplay }}
    >
      {children}
    </GlobalStatesContext.Provider>
  );
}
