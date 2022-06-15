import { FC } from 'react';
import { StyledContentContainer } from 'styles/styled-global';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderTitleWrapper,
  StyledHeaderTitle,
  StyledHeaderNavMenu,
  StyledMenuList,
  StyledMenuItem,
  StyledHeaderNavAuthMenu,
  StyledRegisterButton,
  StyledMenuNotificationsItem,
} from './styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContentContainer>
        <StyledHeaderContainer>
          <StyledHeaderTitleWrapper>
            <i className="fa-solid fa-wind fa-lg logo" aria-label="logo" />
            <StyledHeaderTitle aria-label="title">Modsen Health</StyledHeaderTitle>
          </StyledHeaderTitleWrapper>
          <StyledHeaderNavMenu>
            <StyledMenuList aria-label="navigation menu">
              <StyledMenuItem aria-label="home page">Home</StyledMenuItem>
              <StyledMenuItem aria-label="services">Services</StyledMenuItem>
              <StyledMenuItem aria-label="clinic">Clinic</StyledMenuItem>
              <StyledMenuItem aria-label="doctors">Doctors</StyledMenuItem>
              <StyledMenuItem aria-label="contact">Contact</StyledMenuItem>
            </StyledMenuList>
          </StyledHeaderNavMenu>
          <StyledHeaderNavAuthMenu>
            <StyledMenuList aria-label="authentication menu">
              <StyledMenuItem aria-label="log in">Log In</StyledMenuItem>
              <li aria-label="register">
                <StyledRegisterButton aria-label="register button">Register</StyledRegisterButton>
              </li>
              <StyledMenuNotificationsItem aria-label="notifications">
                <i className="fa-regular fa-bell fa-lg notification" aria-label="notification" />
              </StyledMenuNotificationsItem>
            </StyledMenuList>
          </StyledHeaderNavAuthMenu>
        </StyledHeaderContainer>
      </StyledContentContainer>
    </StyledHeader>
  );
};

export default Header;
