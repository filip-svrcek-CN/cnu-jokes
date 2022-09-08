import styled from "styled-components";
import { getRandomJoke } from "../api";
import { getRandomJokes } from "../api";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

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

export function Controls() {
  return (
    <StyledControls>
      <Col>
        <Button text={"ANOTHER ONE!"} onClick={getRandomJoke} />
      </Col>
      <Col>
        <Input />
        <Button text={"...MORE!"} onClick={() => getRandomJokes(5)} />
      </Col>
    </StyledControls>
  );
}
