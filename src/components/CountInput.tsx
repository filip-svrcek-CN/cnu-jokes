import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getRandomJokes } from "../api";
import { CountInputProps } from "../types";

const StyledInput = styled.input`
  width: 3rem;
`;

export function CountInput({
  jokesToDisplay,
  setJokesToDisplay,
  selectedCategory,
  count,
  setCount,
  searchQuery,
  setIsLoading,
  searchResult,
  isDisabled,
  setIsDisabled,
}: CountInputProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElement.current?.focus();
  }, [isDisabled]);

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value) || 0;
    const diff: number = newCount - count;
    if (diff > 0) {
      addJokes(diff);
    } else if (jokesToDisplay.length > newCount) {
      removeJokes(diff);
    }
    setCount(newCount);
  };

  const addJokes = (diff: number) => {
    setIsLoading(true);
    setIsDisabled(true);
    if (searchQuery && searchResult.length === jokesToDisplay.length) {
      toast.info("There aren't enough jokes for this search.");
      setIsDisabled(false);
      setIsLoading(false);
    } else if (searchQuery) {
      setJokesToDisplay(searchResult.slice(0, jokesToDisplay.length + diff));
      setIsDisabled(false);
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
          setIsDisabled(false);
          setIsLoading(false);
        });
    }
  };

  const removeJokes = (diff: number) => {
    setIsLoading(true);
    setIsDisabled(true);
    setJokesToDisplay(jokesToDisplay.slice(0, jokesToDisplay.length + diff));
    setIsDisabled(false);
    setIsLoading(false);
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
