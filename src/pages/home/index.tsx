import { FC } from "react";
import {
  StyledMainProposal,
  StyledMainContainer,
  StyledArticleDescription,
  StyledMainArticle,
  StyledArticleIdea,
} from "@/pages/home/styled";
import AchievementsSection from "./achievements-section";
import ImagesBlock from "./images-block";
import achievements from "./constants/achievements";
import EmailInput from "./email-input";

const Home: FC = () => {
  return (
    <StyledMainContainer>
      <StyledMainArticle>
        <StyledArticleIdea>Booking of doctor’s appointment</StyledArticleIdea>
        <StyledMainProposal id="proposal" aria-labelledby="proposal-description">
          Don’t Miss Our Exclusive Patient Special
        </StyledMainProposal>
        <StyledArticleDescription id="proposal-description">
          We want to make sure that everyone has access to natural and effective care. With our special, you’ll receive
          a consultation and a digital posture assesment.
        </StyledArticleDescription>
        <EmailInput />
        <AchievementsSection achievements={achievements} />
      </StyledMainArticle>
      <ImagesBlock />
    </StyledMainContainer>
  );
};

export default Home;
