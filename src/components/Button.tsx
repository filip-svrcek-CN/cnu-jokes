import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLElement>, value?: number) => void;
};

const StyledButton = styled.button`
  margin: 0.5em;
`;

export function Button({ text, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}
