import { FC } from "react";
import {
  StyledMainProposal,
  StyledMainContainer,
  StyledArticleDescription,
  StyledMain,
  StyledMainArticle,
  StyledArticleIdea,
} from "@/pages/home/styled";
import AchievementsSection from "./achievements-section";
import ImagesBlock from "./images-block";
import achievements from "./constants/achievements";
import EmailInput from "./email-input";
import { StyledContentContainer } from "@styles/styled-app";

const Home: FC = () => {
  return (
    <StyledMain>
      <StyledContentContainer>
        <StyledMainContainer>
          <StyledMainArticle>
            <StyledArticleIdea>Booking of doctor’s appointment</StyledArticleIdea>
            <StyledMainProposal id="proposal" aria-labelledby="proposal-description">
              Don’t Miss Our Exclusive Patient Special
            </StyledMainProposal>
            <StyledArticleDescription id="proposal-description">
              We want to make sure that everyone has access to natural and effective care. With our special, you’ll
              receive a consultation and a digital posture assesment.
            </StyledArticleDescription>
            <EmailInput />
            <AchievementsSection achievements={achievements} />
          </StyledMainArticle>
          <ImagesBlock />
        </StyledMainContainer>
      </StyledContentContainer>
    </StyledMain>
  );
};

export default Home;
