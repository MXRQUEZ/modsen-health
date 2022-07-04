import { FC } from "react";
import { StyledContentContainer } from "@/styles/styled-app";
import Navbar from "./navbar";
import { StyledHeader, StyledHeaderContainer, StyledHeaderTitleWrapper, StyledHeaderTitle } from "./styled";

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContentContainer>
        <StyledHeaderContainer>
          <StyledHeaderTitleWrapper>
            <i className="fa-solid fa-wind fa-lg logo" role="presentation" />
            <StyledHeaderTitle aria-label="title">Modsen Health</StyledHeaderTitle>
          </StyledHeaderTitleWrapper>
          <Navbar />
        </StyledHeaderContainer>
      </StyledContentContainer>
    </StyledHeader>
  );
};

export default Header;
