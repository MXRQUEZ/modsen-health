import { keyframes } from "styled-components";

export const menuChecked = keyframes`
  0% {
    visibility: visible;
    width: 0;
    height: 0;
    border-top-left-radius: 15%;
    border-bottom-left-radius: 70%;
    border-bottom-right-radius: 30%;
  }
  100% {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export const menuNotChecked = keyframes`
  0% {
    width: 100vw;
    height: 100vh;
    border-top-left-radius: 15%;
    border-bottom-left-radius: 70%;
    border-bottom-right-radius: 30%;
  }
  100% {
    width: 0;
    height: 0;
    border-radius: 0;
    visibility: hidden;
  }
`;
