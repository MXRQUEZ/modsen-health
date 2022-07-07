import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import GlobalStyles from "@/styles/styledGlobal";
import { AppWrapper, MainStyled, AppContentContainer } from "@/styles/styledApp";
import BackgroundArcs from "@/components/BackgroundArcs";

const Layout: FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <BackgroundArcs />
        <Header />
        <MainStyled>
          <AppContentContainer>
            <Outlet />
          </AppContentContainer>
        </MainStyled>
      </AppWrapper>
    </>
  );
};

export default Layout;
