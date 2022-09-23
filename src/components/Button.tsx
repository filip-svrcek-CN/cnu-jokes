import styled from "styled-components";

import { borderRadius, cnRed, ControlsElementStyle } from "../styles";
import { ButtonProps } from "../types";

const StyledButton = styled.button`
  ${ControlsElementStyle};
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  border-style: solid solid solid none;
  cursor: pointer;
  &:hover {
    background-color: ${cnRed};
  }
`;

export function Button({ text, onClick, isDisabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {text}
    </StyledButton>
  );
}
