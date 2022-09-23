import styled, { keyframes } from "styled-components";

import { cnRed } from "../styles";

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${cnRed};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  animation: ${spin} 1s linear infinite;
`;

export function Spinner() {
  return <StyledSpinner className="loader" />;
}
