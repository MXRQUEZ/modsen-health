import { FC, useState } from "react";
import { Keyframes } from "styled-components";
import { menuUnchecked, menuChecked } from "@animations/burger-menu";
import { pages } from "@/constants/pages";
import {
  StyledBurger,
  StyledBurgerMenuContainer,
  StyledBurgerNav,
  StyledPagesMenuItem,
  StyledMenuTrigger,
  StyledAuthMenuItem,
} from "./styled";
import StyledButton from "@/styles/styled-button";

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
              <a href={path}>
                <i className={`${icon} fa-lg`} role="presentation" />
                {name}
              </a>
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
