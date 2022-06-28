import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85px;
`;

export const StyledHeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }

  @media only screen and (max-width: 1200px) {
    margin-right: 40px;
  }
`;

export const StyledHeaderTitle = styled.span`
  white-space: nowrap;
  margin-left: 10px;
`;
