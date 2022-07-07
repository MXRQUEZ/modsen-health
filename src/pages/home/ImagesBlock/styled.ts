import styled from "styled-components";

export const ImagesWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  min-height: 100%;
  flex: 1 1 60%;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    justify-content: center;
    align-items: center;
  }
`;

export const SourceStyled = styled.source`
  pointer-events: none;
  user-select: none;
`;

export const ImageStyled = styled.img`
  pointer-events: none;
  user-select: none;
`;

export const SmallBgPicture = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 35%;
  top: 20px;
  z-index: 0;

  & .images__source,
  & .images__img {
    object-fit: cover;
    max-width: 650px;
    max-height: 190px;
  }

  @media only screen and (${({ theme: { sizes } }) => sizes.lg}) {
    left: 250px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    display: none;
  }
`;

export const BigBgPicture = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 15%;
  top: 180px;
  z-index: 0;

  & .images__source,
  & .images__img {
    object-fit: cover;
    max-width: 900px;
    max-height: 800px;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    left: 0;
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    left: -20%;
    top: 40px;
  }
`;

export const HeroPicture = styled.picture`
  position: relative;
  height: 100%;
  width: 650px;
  z-index: 5;

  & .images__source,
  & .images__img {
    object-fit: cover;
    max-width: 700px;
    max-height: 800px;
    filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
  }

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    top: 20px;
    align-self: center;
  }
`;
