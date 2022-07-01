import { FC } from "react";
import Header from "./components/header";
import Home from "./components/pages/home";
import GlobalStyles from "./styles/styled-global";
import { StyledAppWrapper } from "./styles/styled-app";
import BackgroundArcs from "./components/background-arcs";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <StyledAppWrapper>
        <BackgroundArcs />
        <Header />
        <Home />
      </StyledAppWrapper>
    </>
  );
};

export default App;
