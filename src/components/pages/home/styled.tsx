import styled from "styled-components";

export const StyledMain = styled.main`
  flex: auto;
  margin-top: 85px;
`;

export const StyledMainContainer = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: 991.98px) {
    flex-direction: column-reverse;
  }
`;

export const StyledMainArticle = styled.article`
  margin-top: 35px;
  display: flex;
  height: 100%;
  flex: 1 1 40%;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    position: absolute;
    z-index: 10;
  }

  @media only screen and (max-width: 991.98px) {
    position: relative;
    margin-top: 100px;
  }

  @media only screen and (max-width: 767.98px) {
    margin-top: 50px;
  }
`;

export const StyledArticleIdea = styled.h6`
  color: #215ee9;
  font-size: 14px;
  line-height: calc(24 / 14 * 100%);
`;

export const StyledMainProposal = styled.h1`
  color: #215ee9;
  font-size: 65px;
  line-height: 101.8%;
  letter-spacing: -0.01em;
  margin: 20px 0;
`;

export const StyledArticleDescription = styled.p`
  color: #215ee9;
  font-weight: 400;
  font-size: 20px;
  line-height: calc(30 / 20 * 100%);
  opacity: 0.7;
  margin-top: 30px;
  margin-bottom: 50px;

  @media only screen and (max-width: 767.98px) {
    opacity: 1;
  }
`;
