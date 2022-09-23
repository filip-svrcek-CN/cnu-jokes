import { css } from "styled-components";

export const breakPoint = "770px";
export const cnRed = "#ed1848";
export const inputGray = "#3b3b3b";
export const borderRadius = "10px";

export const ControlsElementStyle = css`
  font-size: 1rem;
  border: solid;
  background-color: ${inputGray};
  text-align: center;
  padding: 0.3rem;
`;

export const FocusInputStyle = css`
  &:focus {
    outline: none;
    border-color: ${cnRed};
  }
`;
