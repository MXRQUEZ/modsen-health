import { FC } from "react";
import { GlobalStyles, StyledAppWrapper } from "styles/styled-global";
import Header from "./header";
import Main from "./main";

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
