import { FC, useState } from "react";
import { Keyframes } from "styled-components";
import { menuUnchecked, menuChecked } from "@animations/burger-menu";
import { NavLink } from "react-router-dom";
import {
  StyledBurger,
  StyledBurgerMenuContainer,
  StyledBurgerNav,
  StyledPagesMenuItem,
  StyledMenuTrigger,
  StyledAuthMenuItem,
} from "./styled";
import StyledButton from "@/styles/styled-button";
import { pages } from "@/constants/pages";

const BurgerMenu: FC = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [animation, setAnimation] = useState<Keyframes>();

  const handleClick = () => {
    setActive((prevState) => !prevState);
    setAnimation(isActive ? menuUnchecked : menuChecked);
  };

  return (
    <StyledBurgerMenuContainer aria-label="burger menu" aria-haspopup>
      <input id="menu-toggle" type="checkbox" aria-hidden onClick={handleClick} />
      <StyledMenuTrigger htmlFor="menu-toggle" aria-label="toggle burger menu" />
      <StyledBurger />
      <StyledBurgerNav animation={animation}>
        <ul className="burger-menu pages" aria-label="pages menu">
          {pages.map(({ name, path, icon }) => (
            <StyledPagesMenuItem key={name}>
              <NavLink to={path}>
                <i className={`${icon} fa-lg`} role="presentation" />
                {name}
              </NavLink>
            </StyledPagesMenuItem>
          ))}
        </ul>
        <ul className="burger-menu auth" aria-label="authorization menu">
          <StyledAuthMenuItem>
            <StyledButton variant="secondary" fontSize="16px" shadowed upperCased>
              Log in
            </StyledButton>
          </StyledAuthMenuItem>
          <StyledAuthMenuItem>
            <StyledButton variant="secondary" fontSize="16px" filled shadowed upperCased>
              Register
            </StyledButton>
          </StyledAuthMenuItem>
        </ul>
      </StyledBurgerNav>
    </StyledBurgerMenuContainer>
  );
};

export default BurgerMenu;
