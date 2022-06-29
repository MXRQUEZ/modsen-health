import { FC } from "react";
import { GlobalStyles, StyledAppWrapper } from "styles/styled-global";
import Header from "./components/header/navbar";
import Main from "./components/main";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <StyledAppWrapper>
        <Header />
        <Main />
      </StyledAppWrapper>
    </>
  );
};

export default App;
