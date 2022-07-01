import { FC } from "react";
import { StyledAchievementsSection, StyledAchievementTitle, StyledAchievementDescription } from "./styled";

interface IAchievementsProps {
  achievements: { id: string; title: string; description: string }[];
}

const AchievementsSection: FC<IAchievementsProps> = ({ achievements }) => {
  return (
    <StyledAchievementsSection aria-label="achievements">
      {achievements.map(({ id, title, description }) => (
        <div key={id}>
          <StyledAchievementTitle aria-label="achievement" aria-labelledby={id}>
            {title}
          </StyledAchievementTitle>
          <StyledAchievementDescription id={id} aria-label="achievement description">
            {description}
          </StyledAchievementDescription>
        </div>
      ))}
    </StyledAchievementsSection>
  );
};

export default AchievementsSection;
