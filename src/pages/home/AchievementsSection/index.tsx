import { FC } from "react";
import { SectionStyled, Title, Description, Achievement } from "./styled";

interface IAchievementsProps {
  achievements: { id: string; title: string; description: string }[];
}

const AchievementsSection: FC<IAchievementsProps> = ({ achievements }) => {
  return (
    <SectionStyled aria-label="achievements">
      {achievements.map(({ id, title, description }) => (
        <Achievement key={id} className="achievement">
          <Title className="achievement__title" aria-label="achievement" aria-labelledby={id}>
            {title}
          </Title>
          <Description id={id} className="achievement__description" aria-label="achievement description">
            {description}
          </Description>
        </Achievement>
      ))}
    </SectionStyled>
  );
};

export default AchievementsSection;
