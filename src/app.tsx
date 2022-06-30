import { FC } from "react";
import Header from "./components/header";
import Main from "./components/main";
import { GlobalStyles, StyledAppWrapper } from "./styles/styled-global";

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
