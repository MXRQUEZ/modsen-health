import { FC } from "react";
import { Outlet } from "react-router-dom";
import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import Header from "@/components/Header";
import GlobalStyles from "@/styles/styledGlobal";
import { AppWrapper, MainStyled, AppContentContainer } from "@/styles/styledApp";
import BackgroundArcs from "@/components/BackgroundArcs";
import theme from "@/constants/theme";

const muiTheme = createTheme();

const Layout: FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ScThemeProvider theme={theme}>
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
        </ScThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
