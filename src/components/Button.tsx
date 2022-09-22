import styled from "styled-components";

import { ButtonProps } from "../types";

const StyledButton = styled.button`
  margin-left: 1rem;
`;

export function Button({ text, onClick, isDisabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {text}
    </StyledButton>
  );
}
