import styled, { createGlobalStyle } from "styled-components";

export const StyledAppWrapper = styled.div`
  min-height: 100vh;
  background-color: #ebf1ff;
  overflow: hidden;
`;

export const StyledContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (max-width: 1500px) {
    max-width: 1100px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 900px;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 800px;
  }

  @media only screen and (max-width: 991.98px) {
    max-width: 750px;
  }

  @media only screen and (max-width: 767.98px) {
    max-width: none;
  }
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

  a,
  a:visited,
  a:hover {
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
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    -ms-text-size-adjust: 100%;
	  -moz-text-size-adjust: 100%;
	  -webkit-text-size-adjust: 100%;
  }

  i {
    color: #215ee9;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear{
    display: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
