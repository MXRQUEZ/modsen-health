import { menuNotChecked, menuChecked } from "@animations/burger-menu";
import styled from "styled-components";

export const StyledMenuTrigger = styled.label`
  position: absolute;
  cursor: pointer;
  z-index: 15;
  height: 25px;
  width: 30px;
  background: none;
`;

export const StyledBurger = styled.span`
  &,
  &::before,
  &::after {
    position: absolute;
    background: #333333;
    width: 30px;
    height: 4px;
    opacity: 0.95;
  }

  &::before {
    content: "";
    top: 10px;
  }

  &::after {
    content: "";
    top: 20px;
  }
`;

export const StyledBurgerNav = styled.nav`
  position: fixed;
  top: 75px;
  right: 0px;
  background-color: #ebf1ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  animation: ${menuNotChecked} 0.3s ease both;
  border-top: 1px solid #333333;

  @media only screen and (max-width: 479.98px) {
    top: 65px;
  }

  & .burger-menu {
    margin: 45px 0 30px 0;
    display: none;
  }
`;

export const StyledMenuItem = styled.li`
  position: relative;
  text-align: center;
  z-index: 10;
  margin-top: 10px;
  font-weight: 700;
  line-height: 1.8;
  width: 100%;

  & a {
    display: inline-block;
    color: #215ee9;
    padding: 20px 60px;

    &:focus {
      display: block;
      background-color: #ebf1ff;
      filter: brightness(120%);
      transition: all 0.5s ease-in-out;
    }

    & i {
      margin-right: 10px;
    }
  }
`;

export const StyledBurgerMenuContainer = styled.div`
  display: none;

  @media only screen and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 25px;

    & #menu-toggle + label,
    & #menu-toggle + label + span {
      top: 0;
      right: 0;
    }

    & #menu-toggle:checked + label + span {
      top: 10px;
      transform: rotate(360deg);
      transition: transform 0.3s ease;
    }

    & #menu-toggle:checked + label + span::before {
      width: 20px;
      top: -2px;
      left: 18px;
      transform: rotate(45deg) translateX(-5px);
      transition: transform 0.3s ease;
    }

    & #menu-toggle:checked + label + span::after {
      width: 20px;
      top: 2px;
      left: 18px;
      transform: rotate(-45deg) translateX(-5px);
      transition: transform 0.3s ease;
    }

    & #menu-toggle:checked + label + span + nav > ul {
      display: block;
    }

    & #menu-toggle:checked + label + span + nav {
      animation: ${menuChecked} 0.5s ease both;
    }

    & #menu-toggle[type="checkbox"]:not(:checked),
    & #menu-toggle[type="checkbox"]:checked {
      display: none;
    }
  }
`;
