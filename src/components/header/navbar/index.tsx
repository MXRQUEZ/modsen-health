import { FC } from "react";
import StyledButton from "@/styles/styled-button";
import { StyledHeaderNavbar, StyledNavbarMenu, StyledMenuItem, StyledCounter, StyledNavLink } from "./styled";
import BurgerMenu from "./burger-menu";
import { pages } from "@/constants/pages";

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar>
      <StyledNavbarMenu aria-label="pages menu">
        {pages.map(({ name, path }) => (
          <StyledMenuItem key={name} aria-label={`${name} page`}>
            <StyledNavLink to={path}>{name}</StyledNavLink>
          </StyledMenuItem>
        ))}
      </StyledNavbarMenu>
      <StyledNavbarMenu aria-label="authorization menu">
        <StyledMenuItem aria-label="log in">Log In</StyledMenuItem>
        <li aria-label="register">
          <StyledButton aria-label="registration button">Register</StyledButton>
        </li>
        <StyledMenuItem aria-label="notifications">
          <StyledCounter aria-label="notification count">2</StyledCounter>
          <i className="fa-regular fa-bell fa-lg notification-bell" role="presentation" />
        </StyledMenuItem>
      </StyledNavbarMenu>
      <BurgerMenu />
    </StyledHeaderNavbar>
  );
};

export default Navbar;
