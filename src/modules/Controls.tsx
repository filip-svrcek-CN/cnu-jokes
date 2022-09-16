import { useState } from "react";
import styled from "styled-components";
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

  return (
    <StyledControls>
      <Col></Col>
      <Col>
        <CountInput
          setCount={setCount}
          count={count}
          setJokesToDisplay={setJokesToDisplay}
          jokesToDisplay={jokesToDisplay}
        />
      </Col>
      <Col></Col>
    </StyledControls>
  );
}
