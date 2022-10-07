import { useContext } from "react";
import styled from "styled-components";

import { borderRadius, cnRed, ControlsElementStyle } from "../styles";
import { ButtonProps } from "../types";
import { GlobalStatesContext } from "../utils/GlobalStatesContext";

const StyledButton = styled.button`
  ${ControlsElementStyle};
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  border-style: solid solid solid none;
  cursor: pointer;
  &:hover {
    background-color: ${cnRed};
  }
`;

export function Button({ text, onClick }: ButtonProps) {
  const { isLoading } = useContext(GlobalStatesContext);

  return (
    <StyledButton onClick={onClick} disabled={isLoading}>
      {text}
    </StyledButton>
  );
}
