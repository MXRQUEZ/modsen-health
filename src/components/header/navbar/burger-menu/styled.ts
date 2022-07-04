import styled, { Keyframes } from "styled-components";

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

export const StyledBurgerNav = styled.nav<{ animation?: Keyframes }>`
  position: fixed;
  top: 75px;
  right: 0px;
  background-color: #ebf1ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  animation: ${(props) => props.animation} 0.3s ease both;
  border-top: 1px solid #333333;
  visibility: hidden;

  @media only screen and (max-width: 479.98px) {
    top: 65px;
  }

  & .burger-menu {
    margin-top: 20px;
    display: none;
  }

  & .auth {
    margin-top: 20px;
    flex-direction: row;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 479.98px) {
      flex-direction: column;
    }
  }
`;

export const StyledAuthMenuItem = styled.li`
  width: 100%;
  & button {
    min-width: 100%;
  }
`;

export const StyledPagesMenuItem = styled.li`
  position: relative;
  z-index: 10;
  font-weight: 700;
  line-height: 1.8;
  width: 100%;
  border-bottom: 1px solid #333;

  & > a {
    display: flex;
    align-items: center;
    width: 100%;
    color: #333;
    padding: 20px 0;
    letter-spacing: 1px;

    &:focus {
      color: #215ee9;
      background-color: #ebf1ff;
      filter: brightness(120%);
      transition: all 0.5s ease-in-out;
    }

    & > i {
      width: 10%;
      margin-right: 20px;
      justify-self: center;
      align-self: center;
      border-right: 1px solid #333;
      margin-left: 20px;
      padding: 20px 10px;

      @media only screen and (max-width: 479.98px) {
        width: 13%;
        margin-left: 10px;
        padding: 20px 10px;
      }

      @media only screen and (max-width: 279.98px) {
        width: 13%;
        margin-left: 5px;
        padding: 20px 0;
      }
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

    & #menu-toggle {
      &[type="checkbox"]:not(:checked),
      &[type="checkbox"]:checked {
        display: none;
      }

      & + label,
      & + label + span {
        top: 0;
        right: 0;
      }

      &:checked + label {
        & + span {
          top: 10px;
          transform: rotate(360deg);
          transition: transform 0.3s ease;

          & + nav {
            & > .pages {
              display: block;
            }

            & > .auth {
              display: flex;
            }
          }
        }

        & + span::before {
          width: 20px;
          top: -2px;
          left: 18px;
          transform: rotate(45deg) translateX(-5px);
          transition: transform 0.3s ease;
        }

        & + span::after {
          width: 20px;
          top: 2px;
          left: 18px;
          transform: rotate(-45deg) translateX(-5px);
          transition: transform 0.3s ease;
        }
      }
    }
  }
`;
