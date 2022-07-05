import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import GlobalStyles from "@/styles/styled-global";
import { StyledAppWrapper, StyledContentContainer } from "@/styles/styled-app";
import BackgroundArcs from "@/components/background-arcs";

const Layout: FC = () => {
  return (
    <>
      <GlobalStyles />
      <StyledAppWrapper>
        <BackgroundArcs />
        <Header />
        <main>
          <StyledContentContainer>
            <Outlet />
          </StyledContentContainer>
        </main>
      </StyledAppWrapper>
    </>
  );
};

export default Layout;
