import { FC } from "react";
import StyledButton from "@/styles/styled-button";
import { StyledHeaderNavbar, StyledNavbarMenu, StyledCounter, StyledNavLink } from "./styled";
import BurgerMenu from "./burger-menu";
import { pages } from "@/constants/pages";

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar>
      <StyledNavbarMenu aria-label="pages menu">
        {pages.map(({ name, path }) => (
          <li key={name} aria-label={`${name} page`}>
            <StyledNavLink to={path}>{name}</StyledNavLink>
          </li>
        ))}
      </StyledNavbarMenu>
      <StyledNavbarMenu aria-label="authorization menu">
        <li aria-label="log in">
          <StyledNavLink to="/login">Log In</StyledNavLink>
        </li>
        <li aria-label="register">
          <StyledButton aria-label="registration button">Register</StyledButton>
        </li>
        <li aria-label="notifications">
          <StyledCounter aria-label="notification count">2</StyledCounter>
          <i className="fa-regular fa-bell fa-lg notification-bell" role="presentation" />
        </li>
      </StyledNavbarMenu>
      <BurgerMenu />
    </StyledHeaderNavbar>
  );
};

export default Navbar;
