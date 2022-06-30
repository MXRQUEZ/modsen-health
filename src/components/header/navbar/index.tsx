import { FC } from "react";
import { StyledButton } from "@/styles/styled-button";
import { StyledHeaderNavbar, StyledNavbarMenu, StyledMenuItem, StyledCounter, StyledBurgerMenu } from "./styled";

const pageNames = ["Home", "Services", "Clinic", "Doctors", "Contact"];

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar aria-label="navigation menu">
      <StyledNavbarMenu aria-label="pages menu">
        {pageNames.map((name) => (
          <StyledMenuItem key={name} aria-label={`${name} page`}>
            {name}
          </StyledMenuItem>
        ))}
      </StyledNavbarMenu>
      <StyledNavbarMenu aria-label="authentication menu">
        <StyledMenuItem aria-label="log in">Log In</StyledMenuItem>
        <li aria-label="register">
          <StyledButton aria-label="register button">Register</StyledButton>
        </li>
        <StyledMenuItem aria-label="notifications">
          <StyledCounter>2</StyledCounter>
          <i className="fa-regular fa-bell fa-lg notification_bell" aria-label="notification" />
        </StyledMenuItem>
      </StyledNavbarMenu>
      <StyledBurgerMenu>
        <span />
      </StyledBurgerMenu>
    </StyledHeaderNavbar>
  );
};

export default Navbar;
