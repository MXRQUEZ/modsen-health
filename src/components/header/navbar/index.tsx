import { FC } from "react";
import { StyledButton } from "@/styles/styled-button";
import { StyledHeaderNavbar, StyledNavbarMenu, StyledMenuItem, StyledCounter, StyledBurgerMenu } from "./styled";
import { pages } from "@/components/constants/pages";

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar aria-label="navigation menu">
      <StyledNavbarMenu aria-label="pages menu">
        {pages.map(({ name }) => (
          <StyledMenuItem key={name} aria-label={`${name} page`}>
            {name}
          </StyledMenuItem>
        ))}
      </StyledNavbarMenu>
      <StyledNavbarMenu aria-label="authentication menu">
        <StyledMenuItem aria-label="log in">Log In</StyledMenuItem>
        <li aria-label="register">
          <StyledButton aria-label="registration button">Register</StyledButton>
        </li>
        <StyledMenuItem aria-label="notifications">
          <StyledCounter aria-label="notification count">2</StyledCounter>
          <i className="fa-regular fa-bell fa-lg notification_bell" role="presentation" />
        </StyledMenuItem>
      </StyledNavbarMenu>
      <StyledBurgerMenu aria-label="burger menu">
        <span />
      </StyledBurgerMenu>
    </StyledHeaderNavbar>
  );
};

export default Navbar;
