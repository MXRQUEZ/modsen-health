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
  border-radius: 40px;
  padding: 25px 150px 25px 50px;
  line-height: calc(19 / 16 * 100%);
  color: #215ee9;

  &:hover,
  &:focus {
    border: 1px solid #215ee9;
  }

  &::placeholder {
    color: gray;
    opacity: 0.5;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

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
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

interface MainNumbersProps {
  primary?: boolean;
}

export const StyledMainNumbers = styled.h3<MainNumbersProps>`
  color: ${({ primary }) => (primary ? "#215ee9" : "#333333")};
  font-size: 56px;
  line-height: calc(66 / 56 * 100%);
  letter-spacing: -4px;
  margin-bottom: 10px;
`;

StyledMainNumbers.defaultProps = {
  primary: false,
};

export const StyledNumbersDescription = styled.p`
  color: black;
  font-weight: 400;
  line-height: calc(24 / 16 * 100%);
`;

export const StyledMainArticle = styled.article`
  margin-top: 35px;
  display: flex;
  flex: 1 1 45%;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const StyledArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex: 1 1 55%;
`;
