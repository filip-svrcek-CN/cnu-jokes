import styled from "styled-components";

import { JokeCardListProps } from "../types";

const StyledJokesContainer = styled.div`
  margin-top: 60px;
`;

const StyledJokeCard = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: white;
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
