import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
  BACKGROUND_COLOR,
  FONT_FAMILY,
  FONT_SIZE_XS,
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_XL,
  FONT_SIZE_XXL,
  FONT_SIZE_XXXL,
  TELEPHONE_XS_SIZE,
  TELEPHONE_SM_SIZE,
  TABLET_MD_SIZE,
  MONITOR_LG_SIZE,
  MONITOR_XL_SIZE,
  GRAY_COLOR,
  FONT_SIZE_XXS,
  TELEPHONE_XXS_SIZE,
} from "./markup";

const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    white: WHITE_COLOR,
    background: BACKGROUND_COLOR,
    gray: GRAY_COLOR,
  },
  fontFamily: FONT_FAMILY,
  fontSizes: {
    xxs: FONT_SIZE_XXS,
    xs: FONT_SIZE_XS,
    sm: FONT_SIZE_SM,
    md: FONT_SIZE_MD,
    lg: FONT_SIZE_LG,
    xl: FONT_SIZE_XL,
    xxl: FONT_SIZE_XXL,
    xxxl: FONT_SIZE_XXXL,
  },
  sizes: {
    xxs: TELEPHONE_XXS_SIZE,
    xs: TELEPHONE_XS_SIZE,
    sm: TELEPHONE_SM_SIZE,
    md: TABLET_MD_SIZE,
    lg: MONITOR_LG_SIZE,
    xl: MONITOR_XL_SIZE,
  },
};

export default theme;
