import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { getJokesBySearch, getRandomJokes } from "../api";
import { CountInputProps } from "../types";

const StyledInput = styled.input`
  width: 3rem;
  margin-left: 1rem;
`;

export function CountInput({
  jokesToDisplay,
  setJokesToDisplay,
  selectedCategory,
  count,
  setCount,
  searchQuery,
  setIsLoading,
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
    } else if (jokesToDisplay.length > newCount) {
      removeJokes(diff);
    }
    setCount(newCount);
  };

  const addJokes = (diff: number, searchQuery: string) => {
    setIsLoading(true);
    setIsDisabled(true);
    if (searchQuery) {
      getJokesBySearch(searchQuery)
        .then((res) => {
          setJokesToDisplay(res.result.splice(0, jokesToDisplay.length + diff));
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
    } else {
      getRandomJokes(diff, jokesToDisplay, selectedCategory)
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
    setJokesToDisplay(jokesToDisplay.splice(0, jokesToDisplay.length + diff));
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
