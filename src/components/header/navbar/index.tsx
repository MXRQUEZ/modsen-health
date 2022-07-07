import { FC } from "react";
import StyledButton from "@/styles/styledButton";
import BurgerMenu from "./BurgerMenu";
import { pages } from "@/constants/pages";
import {
  HeaderNavbar,
  NavbarMenu,
  NavLinkStyled,
  Counter,
  NotificationIcon,
  MenuItem,
  NotificationButton,
} from "./styled";

const Navbar: FC = () => {
  return (
    <HeaderNavbar>
      <NavbarMenu aria-label="pages menu">
        {pages.map(({ name, path }) => (
          <MenuItem key={name} aria-label={`${name} page`}>
            <NavLinkStyled to={path}>{name}</NavLinkStyled>
          </MenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenu aria-label="authorization menu">
        <MenuItem aria-label="log in">
          <NavLinkStyled to="/login">Log In</NavLinkStyled>
        </MenuItem>
        <MenuItem aria-label="register">
          <StyledButton aria-label="registration button">Register</StyledButton>
        </MenuItem>
        <MenuItem aria-label="notifications">
          <NotificationButton aria-haspopup aria-label="notifications button">
            <Counter aria-label="notification count">2</Counter>
            <NotificationIcon className="fa-regular fa-bell fa-lg notification-bell" role="presentation" />
          </NotificationButton>
        </MenuItem>
      </NavbarMenu>
      <BurgerMenu />
    </HeaderNavbar>
  );
};

export default Navbar;
