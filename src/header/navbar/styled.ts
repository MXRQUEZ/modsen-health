import { bellshake } from "animations/bellshake";
import styled from "styled-components";

export const StyledHeaderNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 150px;

  & li {
    text-align: center;
    line-height: calc(19 / 14 * 100%);
    position: relative;
    margin-right: 45px;
    cursor: pointer;

    & .notification_bell {
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
