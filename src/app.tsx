import { FC } from "react";
import arc from "@images/arc.svg";
import Header from "./components/header";
import Main from "./components/main";
import { GlobalStyles, StyledAppWrapper, StyledBgImagesWrapper } from "./styles/styled-global";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <StyledAppWrapper>
        <StyledBgImagesWrapper>
          <img className="arc1" src={arc} alt="background arc" role="presentation" />
          <img className="arc2" src={arc} alt="background arc" role="presentation" />
          <img className="arc3" src={arc} alt="background arc" role="presentation" />
          <img className="arc4" src={arc} alt="background arc" role="presentation" />
          <img className="arc5" src={arc} alt="background arc" role="presentation" />
          <img className="arc6" src={arc} alt="background arc" role="presentation" />
          <img className="arc7" src={arc} alt="background arc" role="presentation" />
          <img className="arc8" src={arc} alt="background arc" role="presentation" />
        </StyledBgImagesWrapper>
        <Header />
        <Main />
      </StyledAppWrapper>
    </>
  );
};

export default App;
