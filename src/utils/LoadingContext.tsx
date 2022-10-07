import React, { useState } from "react";

export const LoadingStateContext = React.createContext<any>(null);

type Children = { children: JSX.Element };

export function LoadingStateProvider({ children }: Children) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingStateContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingStateContext.Provider>
  );
}
