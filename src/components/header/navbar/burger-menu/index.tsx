import { FC } from "react";
import { pages } from "@/components/constants/pages";
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
  return (
    <StyledBurgerMenuContainer aria-label="burger menu" aria-haspopup>
      <input id="menu-toggle" type="checkbox" aria-hidden />
      <StyledMenuTrigger htmlFor="menu-toggle" aria-label="toggle burger menu" />
      <StyledBurger />
      <StyledBurgerNav>
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
