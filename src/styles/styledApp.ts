import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.background};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MainStyled = styled.main`
  flex: auto;
  margin-top: 85px;
`;

export const AppContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xl}) {
    max-width: 1100px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    max-width: 900px;
    padding: 0 20px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    max-width: none;
    padding: 0 20px;
  }
`;
