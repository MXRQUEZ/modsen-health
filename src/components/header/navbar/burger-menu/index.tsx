import { FC } from "react";
import { pages } from "@/components/constants/pages";
import { StyledBurger, StyledBurgerMenuContainer, StyledBurgerNav, StyledMenuItem, StyledMenuTrigger } from "./styled";

const BurgerMenu: FC = () => {
  return (
    <StyledBurgerMenuContainer aria-label="burger menu" aria-details="toggles navigation menu" aria-haspopup>
      <input id="menu-toggle" type="checkbox" aria-hidden />
      <StyledMenuTrigger htmlFor="menu-toggle" aria-label="toggle burger menu" />
      <StyledBurger role="presentation" />
      <StyledBurgerNav>
        <ul className="burger-menu" aria-label="pages menu">
          {pages.map(({ name, path, icon }) => (
            <StyledMenuItem key={name}>
              <a href={path}>
                <i className={`${icon} fa-lg`} role="presentation" />
                {name}
              </a>
            </StyledMenuItem>
          ))}
        </ul>
      </StyledBurgerNav>
    </StyledBurgerMenuContainer>
  );
};

export default BurgerMenu;
