import heroWebp from "@images/hero.webp";
import heroPng from "@images/hero.png";
import whiteBigWebp from "@images/white-n.webp";
import whiteBigPng from "@images/white-n.png";
import whiteSmallWebp from "@images/white-swearing.webp";
import whiteSmallPng from "@images/white-swearing.png";
import { HeroPicture, BigBgPicture, SmallBgPicture } from "../ImagesBlock/styled";

export const backgroundImages = [
  {
    id: "heroImage",
    webp: heroWebp,
    png: heroPng,
    styled: <HeroPicture />,
    alt: "A man with a hurting spine",
  },
  {
    id: "whiteBigImage",
    webp: whiteBigWebp,
    png: whiteBigPng,
    styled: <BigBgPicture />,
    alt: "White background image",
  },
  {
    id: "whiteSmallImage",
    webp: whiteSmallWebp,
    png: whiteSmallPng,
    styled: <SmallBgPicture />,
    alt: "White background image",
  },
];
