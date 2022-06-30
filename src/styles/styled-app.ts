import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  min-height: 100vh;
  background-color: #ebf1ff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    max-width: 1100px;
  }

  @media only screen and (max-width: 1250px) {
    max-width: 900px;
    padding: 0 20px;
  }

  @media only screen and (max-width: 991.98px) {
    max-width: none;
  }
`;
