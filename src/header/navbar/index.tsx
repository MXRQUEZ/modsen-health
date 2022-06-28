import { FC } from "react";
import {
  StyledHeaderNavbar,
  StyledNavbarMenu,
  StyledMenuItem,
  StyledRegisterButton,
  StyledBurgerMenu,
  StyledCounter,
} from "./styled";

const pageNames = ["Home", "Services", "Clinic", "Doctors", "Contact"];

const Navbar: FC = () => {
  return (
    <StyledHeaderNavbar aria-label="navigation menu">
      <StyledNavbarMenu id="pagesbar" aria-label="pages menu">
        {pageNames.map((name) => (
          <StyledMenuItem aria-label={`${name} page`}>{name}</StyledMenuItem>
        ))}
      </StyledNavbarMenu>
      <StyledNavbarMenu id="authbar" aria-label="authentication menu">
        <StyledMenuItem id="authbar_login" aria-label="log in">
          Log In
        </StyledMenuItem>
        <li id="authbar_register" aria-label="register">
          <StyledRegisterButton aria-label="register button">Register</StyledRegisterButton>
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
