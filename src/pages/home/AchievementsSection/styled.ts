import styled from "styled-components";

export const SectionStyled = styled.section`
  position: relative;
  margin-top: 20%;
  display: flex;
  justify-content: space-around;
  gap: 60px;

  & > .achievement:nth-child(even) > .achievement__title {
    color: #215ee9;
  }

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Achievement = styled.div`
  color: #333333;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 56px;
  line-height: 118%;
  letter-spacing: -4px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  text-align: center;
  color: black;
  font-weight: 400;
  line-height: 150%;
`;
