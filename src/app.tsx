import { FC } from 'react';
import { GlobalStyle, StyledAppWrapper } from 'styles/styled-global';
import Header from './header';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledAppWrapper>
        <Header />
      </StyledAppWrapper>
    </>
  );
};

export default App;
