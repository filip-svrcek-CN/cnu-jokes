import styled from "styled-components";

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
        <Button text={"ANOTHER ONE!"} />
      </Col>
      <Col>
        <Input />
        <Button text={"...MORE!"} />
      </Col>
    </StyledControls>
  );
}
