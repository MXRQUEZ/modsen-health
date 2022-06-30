import heroWebp from "@images/hero.webp";
import heroPng from "@images/hero.png";
import whiteBigWebp from "@images/white-n.webp";
import whiteBigPng from "@images/white-n.png";
import whiteSmallWebp from "@images/white-swearing.webp";
import whiteSmallPng from "@images/white-swearing.png";
import { StyledBigBgPicture, StyledHeroPicture, StyledSmallBgPicture } from "../images-block/styled";

export const backgroundImages = [
  {
    id: "heroImage",
    webp: heroWebp,
    png: heroPng,
    styled: <StyledHeroPicture />,
  },
  {
    id: "whiteBigImage",
    webp: whiteBigWebp,
    png: whiteBigPng,
    styled: <StyledBigBgPicture />,
  },
  {
    id: "whiteSmallImage",
    webp: whiteSmallWebp,
    png: whiteSmallPng,
    styled: <StyledSmallBgPicture />,
  },
];
