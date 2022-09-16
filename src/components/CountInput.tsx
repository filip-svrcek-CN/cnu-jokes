import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getRandomJokes } from "../api";
import { CountInputProps } from "../types";

const StyledInput = styled.input``;

export function CountInput({
  setCount,
  count,
  setJokesToDisplay,
  jokesToDisplay,
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
      addJokes(diff);
    } else {
      removeJokes(diff);
    }
    setCount(newCount);
  };

  const addJokes = async (diff: number) => {
    document.getElementById("root")?.focus();
    setIsDisabled(true);
    getRandomJokes(diff).then((res) => {
      setJokesToDisplay(jokesToDisplay.concat(res));
      setIsDisabled(false);
    });
  };

  const removeJokes = (diff: number) => {
    setJokesToDisplay(jokesToDisplay.splice(0, jokesToDisplay.length + diff));
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
