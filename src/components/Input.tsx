import styled from "styled-components";
import { InputProps } from "../types";

const StyledInput = styled.input``;

export function Input({ setInputValue }: InputProps) {
  return (
    <StyledInput
      type="number"
      onChange={(event) => {
        setInputValue(parseInt(event.target.value));
      }}
    />
  );
}
