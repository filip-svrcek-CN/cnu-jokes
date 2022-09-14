import styled from "styled-components";
import { getRandomJokes } from "../api";
import { ButtonProps } from "../types";

const StyledButton = styled.button`
  margin: 0.5em;
`;

export function Button({ text, setJokesToDisplay, inputValue }: ButtonProps) {
  const handleClick = async () => {
    const jokes = await getRandomJokes(inputValue || 1);
    setJokesToDisplay(jokes);
  };
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
}
