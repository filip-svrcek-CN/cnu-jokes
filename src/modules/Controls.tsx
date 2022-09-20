import { useEffect, useState } from "react";
import styled from "styled-components";

import { getRandomJokes } from "../api";
import { Button } from "../components/Button";
import { CategorySelect } from "../components/CategorySelect";
import { CountInput } from "../components/CountInput";
import { SearchInput } from "../components/SearchInput";
import { ControlsProps } from "../types";

const StyledControls = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Col = styled.div`
  width: 50%;
`;

export function Controls({ setJokesToDisplay, jokesToDisplay }: ControlsProps) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (selectedCategory !== "") {
      handleShowRandom();
    }
  }, [selectedCategory]);

  const handleShowRandom = () => {
    getRandomJokes(count, jokesToDisplay, selectedCategory).then((res) => {
      setSearchQuery("");
      setJokesToDisplay(res);
    });
  };

  return (
    <StyledControls>
      <Col>
        <CategorySelect
          jokesToDisplay={jokesToDisplay}
          setJokesToDisplay={setJokesToDisplay}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          count={count}
          setSearchQuery={setSearchQuery}
        />
        <CountInput
          jokesToDisplay={jokesToDisplay}
          setJokesToDisplay={setJokesToDisplay}
          selectedCategory={selectedCategory}
          count={count}
          setCount={setCount}
          searchQuery={searchQuery}
        />
        <Button text="New set of random jokes!" onClick={handleShowRandom} />
      </Col>
      <Col>
        <SearchInput
          setJokesToDisplay={setJokesToDisplay}
          setSelectedCategory={setSelectedCategory}
          setCount={setCount}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Col>
    </StyledControls>
  );
}
