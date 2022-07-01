import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
  a:hover,
  a:focus, 
  a:active {
    text-decoration: none;
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

  input:focus,
  input:hover {
    border: none;
    outline: none;
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

export default GlobalStyles;
