import heroWebp from "@images/hero.webp";
import heroPng from "@images/hero.png";
import whiteBigWebp from "@images/white-n.webp";
import whiteBigPng from "@images/white-n.png";
import whiteSmallWebp from "@images/white-swearing.webp";
import whiteSmallPng from "@images/white-swearing.png";
import { StyledHeroPicture, StyledBigBgPicture, StyledSmallBgPicture } from "../images-block/styled";

export const backgroundImages = [
  {
    id: "heroImage",
    webp: heroWebp,
    png: heroPng,
    styled: <StyledHeroPicture />,
    alt: "A man with a hurting spine",
  },
  {
    id: "whiteBigImage",
    webp: whiteBigWebp,
    png: whiteBigPng,
    styled: <StyledBigBgPicture />,
    alt: "White background image",
  },
  {
    id: "whiteSmallImage",
    webp: whiteSmallWebp,
    png: whiteSmallPng,
    styled: <StyledSmallBgPicture />,
    alt: "White background image",
  },
];
