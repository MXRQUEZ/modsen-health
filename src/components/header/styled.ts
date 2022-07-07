import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    position: fixed;
    background-color: white;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    min-height: 75px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
    min-height: 65px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 15;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    margin-right: 40px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    margin-right: 20px;
  }
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary};
  white-space: nowrap;
  margin-left: 10px;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    display: none;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    display: block;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
    display: none;
  }
`;

export const Logo = styled.i``;
