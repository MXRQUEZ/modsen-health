import styled from "styled-components";

export const InputWrapper = styled.div<{ ml?: string }>`
  position: relative;
  width: 100%;
  display: flex;
  font-family: inherit;
  z-index: 10;

  @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.md}) {
    margin-bottom: 40px;
  }

  & button {
    align-self: center;
    justify-self: center;
    margin-left: ${({ ml }) => ml || "-175px"};
  }
`;

export const InputIcon = styled.i`
  position: absolute;
  align-self: center;
  color: gray;
  padding: 5px;
  min-width: 50px;
  text-align: center;
  opacity: 0.5;
`;

export const StyledInput = styled.input<{ width?: string }>`
  background-color: white;
  display: block;
  width: ${({ width }) => width || "100%"};
  border-radius: 40px;
  padding: 25px 150px 25px 50px;
  line-height: 118%;
  color: #${({ theme: { colors } }) => colors.secondary};

  &:hover,
  &:focus {
    outline: 1px solid ${({ theme: { colors } }) => colors.primary};
  }

  &::placeholder {
    color: gray;
    opacity: 0.5;
  }
`;
