import { useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getRandomJokes } from "../api";
import { borderRadius, ControlsElementStyle, FocusInputStyle } from "../styles";
import { CountInputProps } from "../types";
import { LoadingStateContext } from "../utils/LoadingContext";

const StyledInput = styled.input`
  ${ControlsElementStyle};
  border-radius: ${borderRadius};
  width: 3rem;
  ${FocusInputStyle};
`;

export function CountInput({
  jokesToDisplay,
  setJokesToDisplay,
  selectedCategory,
  count,
  setCount,
  searchQuery,
  searchResult,
  isSearchActive,
}: CountInputProps) {
  const inputElement = useRef<HTMLInputElement>(null);
  const { isLoading, setIsLoading } = useContext(LoadingStateContext);

  useEffect(() => {
    inputElement.current?.focus();
  }, [isLoading]);

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value) || 0;
    const diff: number = newCount - count;
    if (diff > 0) {
      addJokes(diff, newCount);
    } else if (jokesToDisplay.length > newCount) {
      removeJokes(diff);
    }
    setCount(newCount);
  };

  const addJokes = (diff: number, newCount: number) => {
    setIsLoading(true);
    if (searchQuery && searchResult.length < newCount) {
      toast.info("There aren't enough jokes for this search.");
      setIsLoading(false);
    } else if (searchQuery) {
      setJokesToDisplay(searchResult.slice(0, jokesToDisplay.length + diff));
      setIsLoading(false);
    } else {
      getRandomJokes(diff, selectedCategory, jokesToDisplay)
        .then((res) => {
          setJokesToDisplay(jokesToDisplay.concat(res));
        })
        .catch(() => {
          toast.error("There has been an error fetching the jokes!", {
            autoClose: false,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const removeJokes = (diff: number) => {
    setIsLoading(true);
    setJokesToDisplay(jokesToDisplay.slice(0, jokesToDisplay.length + diff));
    setIsLoading(false);
  };

  return (
    <StyledInput
      id="CountInput"
      type="number"
      value={count}
      min="0"
      max={isSearchActive ? searchResult.length : undefined}
      disabled={isLoading}
      ref={inputElement}
      onChange={(event) => {
        handleCountChange(event);
      }}
    />
  );
}
