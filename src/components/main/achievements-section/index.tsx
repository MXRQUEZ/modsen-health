import { FC } from "react";
import { StyledAchievementsSection, StyledAchievementTitle, StyledAchievementDescription } from "./styled";

interface IAchievementsProps {
  achievements: { title: string; description: string }[];
}

const AchievementsSection: FC<IAchievementsProps> = ({ achievements }) => {
  return (
    <StyledAchievementsSection aria-label="our achievements">
      {achievements.map(({ title, description }) => (
        <div key={`${title}-${description}`}>
          <StyledAchievementTitle aria-label="achievement">{title}</StyledAchievementTitle>
          <StyledAchievementDescription aria-label="achievement description">
            {description}
          </StyledAchievementDescription>
        </div>
      ))}
    </StyledAchievementsSection>
  );
};

export default AchievementsSection;
