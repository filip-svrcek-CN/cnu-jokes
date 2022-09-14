import styled from "styled-components";
import { JokeCardListProps } from "../types";

const StyledJokeCard = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: white;
`;

export function JokeCardList({ jokesToDisplay }: JokeCardListProps) {
  return (
    <div>
      {jokesToDisplay &&
        jokesToDisplay.map(({ id, value }, index) => {
          return (
            <StyledJokeCard key={id}>
              #{index + 1} {value}
            </StyledJokeCard>
          );
        })}
    </div>
  );
}
