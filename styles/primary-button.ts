import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  color: white;
  height: fit-content;
  background-color: #215ee9;
  border-radius: 40px;
  padding: 15px 30px;
  transition: filter 0.3s ease-in-out 0s;

  &:hover {
    filter: brightness(120%);
  }
`;
