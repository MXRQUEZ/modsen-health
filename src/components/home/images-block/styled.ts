import styled from "styled-components";

export const StyledImagesBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  min-height: 100%;
  flex: 1 1 60%;

  @media only screen and (max-width: 1250px) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSmallBgPicture = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 35%;
  top: 20px;
  z-index: 0;

  & source,
  & img {
    object-fit: cover;
    max-width: 650px;
    max-height: 190px;
  }

  @media only screen and (max-width: 1250px) {
    left: 250px;
  }

  @media only screen and (max-width: 991.98px) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const StyledBigBgPicture = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 15%;
  top: 180px;
  z-index: 0;

  & source,
  & img {
    object-fit: cover;
    max-width: 900px;
    max-height: 800px;
  }

  @media only screen and (max-width: 1250px) {
    left: 0;
  }

  @media only screen and (max-width: 767.98px) {
    left: -20%;
    top: 40px;
  }
`;

export const StyledHeroPicture = styled.picture`
  position: relative;
  z-index: 5;

  & source,
  & img {
    object-fit: cover;
    max-width: 700px;
    max-height: 800px;
    filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
  }

  @media only screen and (max-width: 991.98px) {
    top: 20px;
    align-self: center;
  }
`;
