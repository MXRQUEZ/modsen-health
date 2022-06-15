import { bellshake } from 'animations/bellshake';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  min-height: 85px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`;

export const StyledHeaderTitle = styled.h6`
  margin-left: 10px;
`;

export const StyledHeaderNavMenu = styled.nav`
  margin: 0 0 0 300px;
`;

export const StyledHeaderNavAuthMenu = styled.nav`
  margin: 0 0 0 150px;
`;

export const StyledMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    margin-right: 45px;
    cursor: pointer;
  }
`;

export const StyledRegisterButton = styled.button`
  color: white;
  background-color: #215ee9;
  border-radius: 40px;
  padding: 15px 30px;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`;

export const StyledMenuNotificationsItem = styled.li`
  &:hover,
  &:focus {
    animation: ${bellshake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    transform-origin: top right;
    filter: brightness(120%);
  }
`;

export const StyledMenuItem = styled.li`
  color: #7d8790;
  text-align: center;
  line-height: calc(19 / 14 * 100%);
  position: relative;

  &:hover,
  &:focus {
    color: #215ee9;

    &::before {
      content: '';
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
