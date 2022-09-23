import styled from "styled-components";

import { JokeCardListProps } from "../types";

const StyledJokesContainer = styled.div``;

const StyledJokeCard = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: Helvetica;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

export function JokeCardList({ jokesToDisplay }: JokeCardListProps) {
  return (
    <StyledJokesContainer>
      {jokesToDisplay &&
        jokesToDisplay.map(({ id, value }, index) => {
          return (
            <StyledJokeCard key={id}>
              #{index + 1} {value}
            </StyledJokeCard>
          );
        })}
    </StyledJokesContainer>
  );
}
