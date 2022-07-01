import styled from "styled-components";

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
  z-index: 10;

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
