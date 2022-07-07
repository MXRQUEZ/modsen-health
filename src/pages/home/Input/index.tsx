import { FC } from "react";
import StyledButton from "@/styles/styledButton";
import { InputIcon, InputWrapper, StyledInput } from "./styled";

interface InputProps {
  type: "email" | "text" | "password";
  name?: string;
  autoComplete?: "off";
  placeholder?: string;
}

const Input: FC<InputProps> = ({ type, name, autoComplete, placeholder }) => {
  return (
    <InputWrapper>
      <InputIcon className="fa-regular fa-envelope" role="presentation" />
      <StyledInput type={type} name={name} autoComplete={autoComplete} placeholder={placeholder} />
      <StyledButton>Get Started</StyledButton>
    </InputWrapper>
  );
};

Input.defaultProps = {
  name: undefined,
  autoComplete: undefined,
  placeholder: "",
};

export default Input;
