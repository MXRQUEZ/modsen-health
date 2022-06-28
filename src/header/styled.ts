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
  min-height: 85px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`;

export const StyledHeaderTitle = styled.h6`
  margin-left: 10px;
`;
