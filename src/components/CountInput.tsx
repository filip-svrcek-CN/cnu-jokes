import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { getJokesBySearch, getRandomJokes } from "../api";
import { CountInputProps } from "../types";

const StyledInput = styled.input`
  width: 3rem;
  margin-left: 1rem;
`;

export function CountInput({
  setCount,
  count,
  setJokesToDisplay,
  jokesToDisplay,
  selectedCategory,
  searchQuery,
}: CountInputProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElement.current?.focus();
  }, [isDisabled]);

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value) || 0;
    const diff: number = newCount - count;
    if (diff > 0) {
      addJokes(diff, searchQuery);
    } else {
      removeJokes(diff);
    }
    setCount(newCount);
  };

  const addJokes = (diff: number, searchQuery: string) => {
    setIsDisabled(true);
    if (searchQuery) {
      getJokesBySearch(searchQuery).then((res) => {
        setJokesToDisplay(res.result.splice(0, jokesToDisplay.length + diff));
        setIsDisabled(false);
      });
    } else {
      getRandomJokes(diff, jokesToDisplay, selectedCategory).then((res) => {
        setJokesToDisplay(jokesToDisplay.concat(res));
        setIsDisabled(false);
      });
    }
  };

  const removeJokes = (diff: number) => {
    setIsDisabled(false);
    setJokesToDisplay(jokesToDisplay.splice(0, jokesToDisplay.length + diff));
    setIsDisabled(false);
  };

  return (
    <StyledInput
      id="CountInput"
      type="number"
      value={count}
      min="0"
      disabled={isDisabled}
      ref={inputElement}
      onChange={(event) => {
        handleCountChange(event);
      }}
    />
  );
}
