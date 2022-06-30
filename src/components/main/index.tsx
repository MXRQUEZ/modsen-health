import { FC } from "react";
import heroWebp from "@images/hero.webp";
import heroPng from "@images/hero.png";
import whiteBigWebp from "@images/white-n.webp";
import whiteBigPng from "@images/white-n.png";
import whiteSmallWebp from "@images/white-swearing.webp";
import whiteSmallPng from "@images/white-swearing.png";
import { StyledButton } from "@/styles/styled-button";
import {
  StyledMainAdvertisment,
  StyledMainContainer,
  StyledColumn as StyledImagesBlock,
  StyledDescription,
  StyledEmailInput,
  StyledInputWrapper,
  StyledMain,
  StyledMainArticle,
  StyledNumbersSection,
  StyledParagraph,
  StyledNumbers,
  StyledNumbersDescription,
  StyledHeroPicture,
  StyledBgPicture as StyledBigBgPicture,
  StyledSwearingPicture as StyledSmallBgPicture,
} from "./styled";
import { StyledContentContainer } from "@/styles/styled-global";

const mainNumbers = [
  {
    title: "240",
    description: "Qualified Doctors & Medical Specialists",
  },
  {
    title: "1M+",
    description: "Medical Tests Done For Our Patients",
  },
  {
    title: "145",
    description: "Years of Experience The Medical Field",
  },
];

const Main: FC = () => {
  return (
    <StyledMain>
      <StyledContentContainer>
        <StyledMainContainer>
          <StyledMainArticle>
            <StyledParagraph>Booking of doctor’s appointment</StyledParagraph>
            <StyledMainAdvertisment>Don’t Miss Our Exclusive Patient Special</StyledMainAdvertisment>
            <StyledDescription>
              We want to make sure that everyone has access to natural and effective care. With our special, you’ll
              receive a consultation and a digital posture assesment.
            </StyledDescription>
            <StyledInputWrapper>
              <i className="fa-regular fa-envelope" role="presentation" />
              <StyledEmailInput type="text" name="email" autoComplete="off" placeholder="Enter your email" />
              <StyledButton>Get Started</StyledButton>
            </StyledInputWrapper>
            <StyledNumbersSection>
              {mainNumbers.map(({ title, description }) => (
                <div key={`${title}-${description}`}>
                  <StyledNumbers>{title}</StyledNumbers>
                  <StyledNumbersDescription>{description}</StyledNumbersDescription>
                </div>
              ))}
            </StyledNumbersSection>
          </StyledMainArticle>
          <StyledImagesBlock>
            <StyledHeroPicture role="presentation">
              <source srcSet={heroWebp} type="images/webp" />
              <img src={heroPng} alt="A man with a hurting spine" role="presentation" />
            </StyledHeroPicture>
            <StyledBigBgPicture role="presentation">
              <source srcSet={whiteBigWebp} type="images/webp" />
              <img src={whiteBigPng} alt="background" role="presentation" />
            </StyledBigBgPicture>
            <StyledSmallBgPicture role="presentation">
              <source srcSet={whiteSmallWebp} type="images/webp" />
              <img src={whiteSmallPng} alt="background" role="presentation" />
            </StyledSmallBgPicture>
          </StyledImagesBlock>
        </StyledMainContainer>
      </StyledContentContainer>
    </StyledMain>
  );
};

export default Main;
