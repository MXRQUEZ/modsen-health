import styled from "styled-components";

export const StyledAchievementsSection = styled.section`
  position: relative;
  margin-top: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 60px;

  & > div {
    color: #333333;
    text-align: center;
  }

  & > div:nth-child(even) > h3 {
    color: #215ee9;
  }

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const StyledAchievementTitle = styled.h3`
  font-size: 56px;
  line-height: calc(66 / 56 * 100%);
  letter-spacing: -4px;
  margin-bottom: 10px;
`;

export const StyledAchievementDescription = styled.p`
  text-align: center;
  color: black;
  font-weight: 400;
  line-height: calc(24 / 16 * 100%);
`;
