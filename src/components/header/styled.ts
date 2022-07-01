import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;

  @media only screen and (max-width: 767.98px) {
    position: fixed;
    background-color: white;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85px;

  @media only screen and (max-width: 767.98px) {
    min-height: 75px;
  }

  @media only screen and (max-width: 479.98px) {
    min-height: 65px;
  }
`;

export const StyledHeaderTitleWrapper = styled.div`
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

  @media only screen and (max-width: 1250px) {
    margin-right: 40px;
  }

  @media only screen and (max-width: 991.98px) {
    margin-right: 20px;
  }
`;

export const StyledHeaderTitle = styled.span`
  color: #333333;
  white-space: nowrap;
  margin-left: 10px;

  @media only screen and (max-width: 991.98px) {
    display: none;
  }

  @media only screen and (max-width: 767.98px) {
    display: block;
  }

  @media only screen and (max-width: 479.98px) {
    display: none;
  }
`;
