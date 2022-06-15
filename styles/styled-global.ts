import styled, { createGlobalStyle } from 'styled-components';

export const StyledAppWrapper = styled.div`
  min-height: 100%;
  background-color: #ebf1ff;
  overflow: hidden;
`;

export const StyledContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  html,
  body {
    height: 100%;
    line-height: 1;
    font-size: 16px;
    color: #333333;
    font-family: 'Roboto';
    font-weight: 700;
  }

  i {
    color: #215ee9;
  }
`;
