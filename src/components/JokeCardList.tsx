import { useContext } from "react";
import styled from "styled-components";

import { GlobalStatesContext } from "../utils/GlobalStatesContext";

const StyledJokesContainer = styled.div``;

const StyledJokeCard = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: Helvetica;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

type Joke = { id: string; value: string };

export function JokeCardList() {
  const { jokesToDisplay } = useContext(GlobalStatesContext);
  return (
    <StyledJokesContainer>
      {jokesToDisplay &&
        jokesToDisplay.map(({ id, value }: Joke, index: number) => {
          return (
            <StyledJokeCard key={id}>
              #{index + 1} {value}
            </StyledJokeCard>
          );
        })}
    </StyledJokesContainer>
  );
}
