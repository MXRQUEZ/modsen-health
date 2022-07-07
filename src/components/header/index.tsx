import { FC } from "react";
import { AppContentContainer } from "@/styles/styledApp";
import Navbar from "./Navbar";
import { HeaderStyled, HeaderContainer, TitleWrapper, Title, Logo } from "./styled";

const Header: FC = () => {
  return (
    <HeaderStyled>
      <AppContentContainer>
        <HeaderContainer>
          <TitleWrapper>
            <Logo className="fa-solid fa-wind fa-lg" role="presentation" />
            <Title aria-label="title">Modsen Health</Title>
          </TitleWrapper>
          <Navbar />
        </HeaderContainer>
      </AppContentContainer>
    </HeaderStyled>
  );
};

export default Header;
