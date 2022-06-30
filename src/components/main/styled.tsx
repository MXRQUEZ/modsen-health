import styled from "styled-components";

export const StyledMain = styled.main`
  flex: auto;
  margin-top: 85px;
`;

export const StyledParagraph = styled.p`
  color: #215ee9;
  font-size: 14px;
  line-height: calc(24 / 14 * 100%);
`;

export const StyledAdvertisment = styled.h1`
  color: #215ee9;
  font-size: 65px;
  line-height: 101.8%;
  letter-spacing: -0.01em;
  margin: 20px 0;
`;

export const StyledDescription = styled.p`
  color: #215ee9;
  font-weight: 400;
  font-size: 20px;
  line-height: calc(30 / 20 * 100%);
  opacity: 0.7;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const StyledEmailInput = styled.input`
  background-color: white;
  display: block;
  width: 100%;
  border-radius: 40px;
  padding: 25px 150px 25px 50px;
  line-height: calc(19 / 16 * 100%);
  color: #333333;

  &:hover,
  &:focus {
    outline: 1px solid #215ee9;
  }

  &::placeholder {
    color: gray;
    opacity: 0.5;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  @media only screen and (max-width: 991.98px) {
    margin-bottom: 40px;
  }

  & i {
    position: absolute;
    align-self: center;
    color: gray;
    padding: 5px;
    min-width: 50px;
    text-align: center;
    opacity: 0.5;
  }

  & button {
    align-self: center;
    justify-self: center;
    margin-left: -140px;
  }
`;

export const StyledNumbersSection = styled.section`
  position: relative;
  margin-top: 20%;

  & > ul {
    color: #333333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 60px;
  }

  .numbers__list li:nth-child(even) {
    color: #215ee9;
  }

  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const StyledNumbers = styled.h3`
  font-size: 56px;
  line-height: calc(66 / 56 * 100%);
  letter-spacing: -4px;
  margin-bottom: 10px;
`;

export const StyledNumbersDescription = styled.p`
  text-align: center;
  color: black;
  font-weight: 400;
  line-height: calc(24 / 16 * 100%);
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

export const StyledMainContainer = styled.div`
  position: relative;
  display: flex;

  @media only screen and (max-width: 991.98px) {
    flex-direction: column-reverse;
  }
`;

export const StyledColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  min-height: 100%;
  flex: 1 1 60%;

  @media only screen and (max-width: 1250px) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSwearingPicture = styled.picture`
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

export const StyledBgPicture = styled.picture`
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
  top: 0;

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
