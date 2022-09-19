import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomJokes } from "../api";
import { CategorySelect } from "../components/CategorySelect";
import { CountInput } from "../components/CountInput";

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
  width: 33%;
`;

export function Controls({ setJokesToDisplay, jokesToDisplay }: ControlsProps) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getRandomJokes(count, selectedCategory).then((res) =>
      setJokesToDisplay(res)
    );
  }, [selectedCategory]);

  return (
    <StyledControls>
      <Col>
        <CategorySelect setSelectedCategory={setSelectedCategory} />
      </Col>
      <Col>
        <CountInput
          setCount={setCount}
          count={count}
          setJokesToDisplay={setJokesToDisplay}
          jokesToDisplay={jokesToDisplay}
          selectedCategory={selectedCategory}
        />
      </Col>
      <Col></Col>
    </StyledControls>
  );
}
