import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    flex-direction: column-reverse;
  }
`;

export const ArticleStyled = styled.article`
  margin-top: 35px;
  display: flex;
  height: 100%;
  flex: 1 1 40%;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    position: absolute;
    z-index: 10;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    position: relative;
    margin-top: 100px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    margin-top: 50px;
  }
`;

export const Proposal = styled.h6`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  line-height: 171%;
`;

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
  line-height: 118%;
  letter-spacing: -0.01em;
  margin: 20px 0;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  line-height: 150%;
  opacity: 0.7;
  margin-top: 30px;
  margin-bottom: 50px;

  @media only screen and (max-width: 767.98px) {
    opacity: 1;
  }
`;
