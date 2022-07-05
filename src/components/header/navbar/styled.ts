import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bellshake from "@/animations/bellshake";

export const StyledHeaderNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  @media only screen and (max-width: 1250px) {
    gap: 10px;
  }

  @media only screen and (max-width: 991.98px) {
    gap: 50px;
  }
`;

export const StyledNavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767.98px) {
    display: none;
  }

  & li {
    text-align: center;
    white-space: nowrap;
    line-height: calc(19 / 16 * 100%);
    position: relative;
    margin-right: 45px;
    cursor: pointer;

    @media only screen and (max-width: 1250px) {
      margin-right: 30px;
    }

    @media only screen and (max-width: 991.98px) {
      margin-right: 20px;
    }

    & .notification-bell {
      position: relative;

      &:hover,
      &:focus {
        animation: ${bellshake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
        backface-visibility: hidden;
        transform-origin: top right;
        filter: brightness(120%);
      }
    }
  }
`;

export const StyledMenuItem = styled.li`
  color: #7d8790;
`;

export const StyledNavLink = styled(NavLink)`
  &.active,
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
  user-select: none;

  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 3;

  &:hover ~ i {
    animation: ${bellshake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    backface-visibility: hidden;
    transform-origin: top right;
    filter: brightness(120%);
  }
`;
