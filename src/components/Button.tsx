import { useContext } from "react";
import styled from "styled-components";

import { borderRadius, cnRed, ControlsElementStyle } from "../styles";
import { ButtonProps } from "../types";
import { LoadingStateContext } from "../utils/LoadingContext";

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
  const { isLoading } = useContext(LoadingStateContext);

  return (
    <StyledButton onClick={onClick} disabled={isLoading}>
      {text}
    </StyledButton>
  );
}
