import styled from "styled-components";

type ButtonProps = { text: string; onClick?: () => void };

const StyledButton = styled.button`
  margin: 0.5em;
`;

export function Button({ text, onClick }: ButtonProps) {
  return (
    <StyledButton className="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
}
