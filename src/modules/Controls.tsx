import styled from "styled-components";

import { Button } from "../components/Button";
import { UseStateSetJokes } from "../types";
import { InputButton } from "./InputButton";

type ControlsProps = {
  setJokesToDisplay: UseStateSetJokes;
};

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

export function Controls({ setJokesToDisplay }: ControlsProps) {
  return (
    <StyledControls>
      <Col>
        <Button
          text={"ANOTHER ONE!"}
          // fetchData={() => getRandomJokes(1)}
          setJokesToDisplay={setJokesToDisplay}
        />
      </Col>
      <Col>
        <InputButton
          text={"...MORE!"}
          // fetchData={getRandomJokes}
          setJokesToDisplay={setJokesToDisplay}
        />
      </Col>
    </StyledControls>
  );
}
