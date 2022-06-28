import styled, { createGlobalStyle } from "styled-components";

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
    -moz-box-sizing: border-box;
	  -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:focus, a:active{
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
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
    width: 100%;
    height: 100%;
    line-height: 1;
    font-size: 16px;
    color: #333333;
    font-family: 'Roboto';
    font-weight: 700;
    -ms-text-size-adjust: 100%;
	  -moz-text-size-adjust: 100%;
	  -webkit-text-size-adjust: 100%;
  }

  i {
    color: #215ee9;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
