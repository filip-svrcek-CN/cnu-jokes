import styled from "styled-components";

import { ButtonProps } from "../types";

const StyledButton = styled.button``;

export function Button({ text, onClick, isDisabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {text}
    </StyledButton>
  );
}
