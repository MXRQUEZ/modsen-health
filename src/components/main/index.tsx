import { FC } from "react";
import heroWebp from "@images/hero.webp";
import heroPng from "@images/hero.png";
import whiteNWebp from "@images/white-n.webp";
import whiteNPng from "@images/white-n.png";
import whiteSwearingWebp from "@images/white-swearing.webp";
import whiteSwearingPng from "@images/white-swearing.png";
import { StyledButton } from "@/styles/styled-button";
import {
  StyledAdvertisment,
  StyledMainContainer,
  StyledColumn,
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
  StyledBgPicture,
  StyledSwearingPicture,
} from "./styled";
import { StyledContentContainer } from "@/styles/styled-global";

const numbers = ["240", "1M+", "145"];
const descriptions = [
  "Qualified Doctors & Medical Specialists",
  "Medical Tests Done For Our Patients",
  "Years of Experience The Medical Field",
];

const Main: FC = () => {
  return (
    <StyledMain>
      <StyledContentContainer>
        <StyledMainContainer>
          <StyledMainArticle>
            <StyledParagraph>Booking of doctor’s appointment</StyledParagraph>
            <StyledAdvertisment>Don’t Miss Our Exclusive Patient Special</StyledAdvertisment>
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
              <ul className="numbers__list">
                {numbers.map((number) => (
                  <li key={number}>
                    <StyledNumbers>{number}</StyledNumbers>
                  </li>
                ))}
              </ul>
              <ul>
                {descriptions.map((description) => (
                  <li key={description}>
                    <StyledNumbersDescription>{description}</StyledNumbersDescription>
                  </li>
                ))}
              </ul>
            </StyledNumbersSection>
          </StyledMainArticle>
          <StyledColumn>
            <StyledHeroPicture role="presentation">
              <source srcSet={heroWebp} type="images/webp" />
              <img src={heroPng} alt="A man with a hurting spine" />
            </StyledHeroPicture>
            <StyledBgPicture role="presentation">
              <source srcSet={whiteNWebp} type="images/webp" />
              <img src={whiteNPng} alt="background" />
            </StyledBgPicture>
            <StyledSwearingPicture role="presentation">
              <source srcSet={whiteSwearingWebp} type="images/webp" />
              <img src={whiteSwearingPng} alt="background" />
            </StyledSwearingPicture>
          </StyledColumn>
        </StyledMainContainer>
      </StyledContentContainer>
    </StyledMain>
  );
};

export default Main;
