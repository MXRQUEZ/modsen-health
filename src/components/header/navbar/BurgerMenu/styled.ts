import { NavLink } from "react-router-dom";
import styled, { Keyframes } from "styled-components";

export const MenuToggleInput = styled.input``;

export const MenuTriggerLabel = styled.label`
  position: absolute;
  cursor: pointer;
  z-index: 15;
  height: 25px;
  width: 30px;
  background: none;
`;

export const Burger = styled.span`
  &,
  &::before,
  &::after {
    position: absolute;
    background: ${({ theme: { colors } }) => colors.secondary};
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

export const BurgerMenuNav = styled.nav<{ animation?: Keyframes }>`
  position: fixed;
  top: 75px;
  right: 0px;
  background-color: ${({ theme: { colors } }) => colors.background};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  animation: ${(props) => props.animation} 0.3s ease both;
  border-top: 1px solid #333333;
  visibility: hidden;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
    top: 65px;
  }

  & > .nav__menu {
    margin-top: 20px;
    display: none;
  }
`;

export const NavPagesMenu = styled.ul``;

export const NavAuthMenu = styled.ul`
  margin-top: 20px;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
    flex-direction: column;
  }
`;

export const AuthMenuItem = styled.li`
  width: 100%;
  & button {
    min-width: 100%;
  }
`;

export const PagesMenuItem = styled.li`
  position: relative;
  z-index: 10;
  font-weight: 700;
  line-height: 1.8;
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.gray};
  padding: 20px 0;
  letter-spacing: 1px;

  &.active,
  &:focus {
    color: ${({ theme: { colors } }) => colors.primary};
    background-color: ${({ theme: { colors } }) => colors.background};
    transition: all 0.5s ease-in-out;
  }
`;

export const PageIcon = styled.i`
  width: 10%;
  margin-right: 20px;
  justify-self: center;
  align-self: center;
  border-right: 1px solid ${({ theme: { colors } }) => colors.secondary};
  margin-left: 20px;
  padding: 20px 10px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
    width: 13%;
    margin-left: 10px;
    padding: 20px 10px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xxs}) {
    width: 13%;
    margin-left: 5px;
    padding: 20px 0;
  }
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 25px;

    & .menu__trigger,
    & .menu__burger {
      top: 0;
      right: 0;
    }

    & .menu__toggle {
      &[type="checkbox"]:not(:checked),
      &[type="checkbox"]:checked {
        display: none;
      }

      &:checked + .menu__trigger {
        & + .menu__burger {
          top: 10px;
          transform: rotate(360deg);
          transition: transform 0.3s ease;

          &::before {
            width: 20px;
            top: -2px;
            left: 18px;
            transform: rotate(45deg) translateX(-5px);
            transition: transform 0.3s ease;
          }

          &::after {
            width: 20px;
            top: 2px;
            left: 18px;
            transform: rotate(-45deg) translateX(-5px);
            transition: transform 0.3s ease;
          }

          & + .menu__nav {
            & > .pages {
              display: block;
            }

            & > .auth {
              display: flex;
            }
          }
        }
      }
    }
  }
`;
