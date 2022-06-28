import { FC } from "react";
import { StyledHeaderNavbar, StyledNavbarMenu, StyledMenuItem, StyledRegisterButton } from "./styled";

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar aria-label="navigation menu">
      <StyledNavbarMenu aria-label="pages menu">
        <StyledMenuItem aria-label="home page">Home</StyledMenuItem>
        <StyledMenuItem aria-label="services">Services</StyledMenuItem>
        <StyledMenuItem aria-label="clinic">Clinic</StyledMenuItem>
        <StyledMenuItem aria-label="doctors">Doctors</StyledMenuItem>
        <StyledMenuItem aria-label="contact">Contact</StyledMenuItem>
      </StyledNavbarMenu>
      <StyledNavbarMenu aria-label="authentication menu">
        <StyledMenuItem aria-label="log in">Log In</StyledMenuItem>
        <li aria-label="register">
          <StyledRegisterButton aria-label="register button">Register</StyledRegisterButton>
        </li>
        <StyledMenuItem aria-label="notifications">
          <i className="fa-regular fa-bell fa-lg notification_bell" aria-label="notification" />
        </StyledMenuItem>
      </StyledNavbarMenu>
    </StyledHeaderNavbar>
  );
};

export default Navbar;
