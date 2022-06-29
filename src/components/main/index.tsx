import { FC } from "react";
import { StyledPrimaryButton } from "styles/primary-button";
import { StyledContentContainer } from "styles/styled-global";
import {
  StyledAdvertisment,
  StyledArticleWrapper,
  StyledColumn,
  StyledDescription,
  StyledEmailInput,
  StyledInputWrapper,
  StyledMain,
  StyledMainArticle,
  StyledMainNumbers,
  StyledNumbersDescription,
  StyledNumbersSection,
  StyledParagraph,
} from "./styled";

const Main: FC = () => {
  return (
    <StyledMain>
      <StyledContentContainer>
        <StyledArticleWrapper>
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
              <StyledPrimaryButton>Get Started</StyledPrimaryButton>
            </StyledInputWrapper>
            <StyledNumbersSection>
              <div>
                <StyledMainNumbers>240</StyledMainNumbers>
                <StyledNumbersDescription>Qualified Doctors & Medical Specialists</StyledNumbersDescription>
              </div>
              <div>
                <StyledMainNumbers primary>1M+</StyledMainNumbers>
                <StyledNumbersDescription>Medical Tests Done For Our Patients</StyledNumbersDescription>
              </div>
              <div>
                <StyledMainNumbers>145</StyledMainNumbers>
                <StyledNumbersDescription>Years of Experience The Medical Field</StyledNumbersDescription>
              </div>
            </StyledNumbersSection>
          </StyledMainArticle>
          <StyledColumn>Column</StyledColumn>
        </StyledArticleWrapper>
      </StyledContentContainer>
    </StyledMain>
  );
};

export default Main;
