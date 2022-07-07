import { FC } from "react";
import { Title, PageContainer, Description, ArticleStyled, Proposal } from "@/pages/home/styled";
import AchievementsSection from "./AchievementsSection";
import ImagesBlock from "./ImagesBlock";
import achievements from "./constants/achievements";
import Input from "./Input";

const Home: FC = () => {
  return (
    <PageContainer>
      <ArticleStyled>
        <Proposal>Booking of doctor’s appointment</Proposal>
        <Title id="home-title" aria-labelledby="home-title-description">
          Don’t Miss Our Exclusive Patient Special
        </Title>
        <Description id="home-title-description">
          We want to make sure that everyone has access to natural and effective care. With our special, you’ll receive
          a consultation and a digital posture assesment.
        </Description>
        <Input type="email" name="email" autoComplete="off" placeholder="Enter your email" />
        <AchievementsSection achievements={achievements} />
      </ArticleStyled>
      <ImagesBlock />
    </PageContainer>
  );
};

export default Home;
