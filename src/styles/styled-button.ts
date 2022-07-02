import styled from "styled-components";

interface StyledButtonProps {
  variant?: "primary" | "secondary";
  fontSize?: "14px" | "16px" | "18px";
  filled?: boolean;
  upperCased?: boolean;
  shadowed?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${(props) => props.fontSize};
  text-transform: ${(props) => props.upperCased && "uppercase"};
  letter-spacing: ${(props) => props.upperCased && "1px"};
  white-space: nowrap;
  color: ${({ variant, filled }) => (variant === "primary" || filled ? "white" : "#333333")};
  height: fit-content;
  background-color: ${({ variant, filled }) => (variant === "primary" || filled ? "#215ee9" : "white")};
  border-radius: ${(props) => props.variant === "primary" && "40px"};
  padding: 15px 30px;
  border: ${(props) => props.variant === "secondary" && "2px solid #215ee9"};
  box-shadow: ${(props) => props.shadowed && "inset 0 0 2px #333"};
  transition: filter 0.3s ease-in-out 0s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    box-shadow: inset 1px 1px 10px #333;
  }
`;

StyledButton.defaultProps = {
  variant: "primary",
  fontSize: "14px",
  filled: false,
  upperCased: false,
  shadowed: false,
};

export default StyledButton;
