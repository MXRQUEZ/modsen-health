import styled from "styled-components";

export const ImagesWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 1250px) {
    display: none;
  }

  & .bottom-arc1 {
    left: -170px;
    top: 800px;
    transform: rotate(10deg);
  }

  & .bottom-arc2 {
    left: -160px;
    top: 700px;
  }

  & .bottom-arc3 {
    left: -120px;
    top: 600px;
  }

  & .bottom-arc4 {
    left: 10px;
    top: 575px;
  }

  & .bottom-arc5 {
    left: 150px;
    top: 550px;
    transform: rotate(-5deg);
  }

  & .bottom-arc6 {
    left: 300px;
    top: 550px;
    transform: rotate(-5deg);
  }

  & .top-arc1 {
    right: -100px;
    top: -100px;
    transform: rotate(180deg);
  }

  & .top-arc2 {
    right: 10px;
    top: 0;
    transform: rotate(180deg);
  }

  & .top-arc3 {
    right: 100px;
    top: 20px;
    transform: rotate(180deg);
  }

  & .top-arc4 {
    right: 250px;
    top: 10px;
    transform: rotate(175deg);
  }

  & .top-arc5 {
    right: 370px;
    transform: rotate(175deg);
  }

  & .top-arc6 {
    right: 480px;
    top: 5px;
    transform: rotate(175deg);
  }
`;

export const ArcImage = styled.img`
  width: 422px;
  height: 373px;
  position: absolute;
  pointer-events: none;
  user-select: none;
  opacity: 0.3;
`;
