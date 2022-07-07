import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bellshake from "@/animations/bellshake";

export const HeaderNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xl}) {
    gap: 20px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    gap: 10px;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  position: relative;
  line-height: 118%;
  margin-right: 45px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    margin-right: 30px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    margin-right: 20px;
  }
`;

export const NotificationIcon = styled.i`
  position: relative;

  &:hover,
  &:focus {
    animation: ${bellshake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    backface-visibility: hidden;
    transform-origin: top right;
    filter: brightness(120%);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.gray};

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.primary};

    &::before {
      content: "";
      position: absolute;
      top: 25px;
      background: ${({ theme: { colors } }) => colors.primary};
      width: 7px;
      height: 7px;
      border-radius: 100%;
      left: calc(50% - 3px);
    }
  }

  &:visited {
    color: none;
    text-decoration: none;
    outline: none;
  }
`;

export const NotificationButton = styled.button`
  position: relative;
  font-size: inherit;
`;

export const Counter = styled.span`
  color: white;
  height: 8px;
  width: 8px;
  padding: 8px;
  background-color: red;
  border-radius: 50%;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxs};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 3;

  &:hover ~ .notification-bell {
    animation: ${bellshake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    backface-visibility: hidden;
    transform-origin: top right;
    filter: brightness(120%);
  }
`;
