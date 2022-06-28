import { bellshake } from "animations/bellshake";
import styled from "styled-components";

export const StyledHeaderNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 787.98px) {
    #pagesbar,
    #authbar_login,
    #authbar_register {
      display: none;
    }
  }
`;

export const StyledNavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    text-align: center;
    white-space: nowrap;
    line-height: calc(19 / 14 * 100%);
    position: relative;
    margin-right: 45px;
    cursor: pointer;

    @media only screen and (max-width: 1200px) {
      margin-right: 40px;
    }

    @media only screen and (max-width: 991.98px) {
      margin-right: 30px;
    }

    @media only screen and (max-width: 767.98px) {
      margin-rigth: 25px;
    }

    & .notification_bell {
      position: relative;

      &:hover,
      &:focus {
        animation: ${bellshake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        backface-visibility: hidden;
        transform-origin: top right;
        filter: brightness(120%);
      }
    }
  }
`;

export const StyledRegisterButton = styled.button`
  color: white;
  background-color: #215ee9;
  border-radius: 40px;
  padding: 15px 30px;
  transition: filter 0.3s ease-in 0s;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`;

export const StyledMenuItem = styled.li`
  color: #7d8790;

  &:hover,
  &:focus {
    color: #215ee9;

    &::before {
      content: "";
      position: absolute;
      top: 25px;
      background: #215ee9;
      width: 7px;
      height: 7px;
      border-radius: 100%;
      left: calc(50% - 3px);
    }
  }
`;

export const StyledBurgerMenu = styled.button`
  display: none;

  @media only screen and (max-width: 787.98px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 18px;
    margin-right: 20px;

    & span {
      height: 2px;
      width: 30px;
      background-color: black;
    }

    &::before,
    &::after {
      content: "";
      height: 2px;
      width: 30px;
      background-color: black;
    }
  }
`;

export const StyledCounter = styled.span`
  color: white;
  height: 8px;
  width: 8px;
  padding: 8px;
  background-color: red;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -10px;

  &:hover ~ i {
    animation: ${bellshake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    transform-origin: top right;
    filter: brightness(120%);
  }
`;
