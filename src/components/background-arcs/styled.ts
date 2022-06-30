import styled from "styled-components";

export const StyledBgImagesWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 1250px) {
    display: none;
  }

  & > img {
    position: absolute;
    opacity: 0.3;
  }

  & .bottom__arc1 {
    left: -170px;
    top: 800px;
    transform: rotate(10deg);
  }

  & .bottom__arc2 {
    left: -160px;
    top: 700px;
  }

  & .bottom__arc3 {
    left: -120px;
    top: 600px;
  }

  & .bottom__arc4 {
    left: 10px;
    top: 575px;
  }

  & .bottom__arc5 {
    left: 150px;
    top: 550px;
    transform: rotate(-5deg);
  }

  & .bottom__arc6 {
    left: 300px;
    top: 550px;
    transform: rotate(-5deg);
  }
`;