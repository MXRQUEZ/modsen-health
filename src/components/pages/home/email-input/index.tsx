import { FC } from "react";
import { StyledButton } from "@/styles/styled-button";
import { StyledInputWrapper, StyledEmailInput } from "./styled";

const EmailInput: FC = () => {
  return (
    <StyledInputWrapper>
      <i className="fa-regular fa-envelope" role="presentation" />
      <StyledEmailInput type="text" name="email" autoComplete="off" aria-label="email" placeholder="Enter your email" />
      <StyledButton aria-label="send email" aria-details="you will be notified about new updates">
        Get Started
      </StyledButton>
    </StyledInputWrapper>
  );
};

export default EmailInput;
