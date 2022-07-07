import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "@/components/Header";
import GlobalStyles from "@/styles/styledGlobal";
import { AppWrapper, MainStyled, AppContentContainer } from "@/styles/styledApp";
import BackgroundArcs from "@/components/BackgroundArcs";
import theme from "@/constants/theme";

const Layout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Layout;
