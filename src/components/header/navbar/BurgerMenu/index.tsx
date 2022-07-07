import { FC, useState } from "react";
import { Keyframes } from "styled-components";
import { menuUnchecked, menuChecked } from "@animations/burger-menu";
import {
  Burger,
  BurgerMenuContainer,
  BurgerMenuNav,
  PagesMenuItem,
  MenuTriggerLabel,
  AuthMenuItem,
  NavLinkStyled,
  PageIcon,
  NavAuthMenu,
  NavPagesMenu,
  MenuToggleInput,
} from "./styled";
import StyledButton from "@/styles/styledButton";
import { pages } from "@/constants/pages";

const BurgerMenu: FC = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [animation, setAnimation] = useState<Keyframes>();

  const handleChange = () => {
    setActive((prevState) => !prevState);
    setAnimation(isActive ? menuUnchecked : menuChecked);
  };

  return (
    <BurgerMenuContainer aria-label="burger menu" aria-haspopup>
      <MenuToggleInput
        id="menu-toggle"
        className="menu__toggle"
        type="checkbox"
        checked={isActive}
        aria-hidden
        onChange={handleChange}
      />
      <MenuTriggerLabel htmlFor="menu-toggle" className="menu__trigger" aria-label="toggle burger menu" />
      <Burger className="menu__burger" />
      <BurgerMenuNav className="menu__nav" animation={animation}>
        <NavPagesMenu className="nav__menu pages" aria-label="pages menu">
          {pages.map(({ name, path, icon }) => (
            <PagesMenuItem key={name}>
              <NavLinkStyled to={path} onClick={handleChange}>
                <PageIcon className={`${icon} fa-lg`} role="presentation" />
                {name}
              </NavLinkStyled>
            </PagesMenuItem>
          ))}
        </NavPagesMenu>
        <NavAuthMenu className="nav__menu auth" aria-label="authorization menu">
          <AuthMenuItem>
            <StyledButton variant="secondary" fontSize="16px" shadowed upperCased>
              Log in
            </StyledButton>
          </AuthMenuItem>
          <AuthMenuItem>
            <StyledButton variant="secondary" fontSize="16px" filled shadowed upperCased>
              Register
            </StyledButton>
          </AuthMenuItem>
        </NavAuthMenu>
      </BurgerMenuNav>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
