import styled from "styled-components";
import cnImage from "../assets/cn.png";

const StyledHeader = styled.header`
  font-size: 6rem;
`;

const StyledHorizontalLine = styled.hr`
  margin: 0px 0px 3rem 0px;
`;

const StyledImg = styled.img`
  height: 6rem;
`;

export function Header() {
  return (
    <StyledHeader>
      CN(U) JOKES <StyledImg src={cnImage} alt="CN" />
      <StyledHorizontalLine />
    </StyledHeader>
  );
}
