import { FC } from "react";
import { StyledContentContainer } from "@/styles/styled-global";
import Navbar from "./navbar";
import { StyledHeader, StyledHeaderContainer, StyledHeaderTitleWrapper, StyledHeaderTitle } from "./styled";

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContentContainer>
        <StyledHeaderContainer>
          <StyledHeaderTitleWrapper>
            <i className="fa-solid fa-wind fa-lg logo" aria-label="logo" />
            <StyledHeaderTitle aria-label="title">Modsen Health</StyledHeaderTitle>
          </StyledHeaderTitleWrapper>
          <Navbar />
        </StyledHeaderContainer>
      </StyledContentContainer>
    </StyledHeader>
  );
};

export default Header;
