import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from "@/constants/markup";

interface StyledButtonProps {
  variant?: "primary" | "secondary";
  fontSize?: "12px" | "16px" | "18px" | "24px" | "56px";
  filled?: boolean;
  upperCased?: boolean;
  shadowed?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${(props) => props.fontSize};
  line-height: 118%;
  font-weight: 700;
  text-transform: ${(props) => props.upperCased && "uppercase"};
  letter-spacing: ${(props) => props.upperCased && "1px"};
  white-space: nowrap;
  color: ${({ variant, filled }) => (variant === "primary" || filled ? `${WHITE_COLOR}` : `${PRIMARY_COLOR}`)};
  height: fit-content;
  background-color: ${({ variant, filled }) =>
    variant === "primary" || filled ? `${PRIMARY_COLOR}` : `${WHITE_COLOR}`};
  border-radius: ${(props) => props.variant === "primary" && "40px"};
  padding: 15px 40px;
  border: ${(props) => props.variant === "secondary" && `2px solid ${PRIMARY_COLOR}`};
  box-shadow: ${(props) => props.shadowed && `inset 0 0 2px ${SECONDARY_COLOR}`};
  transition: filter 0.3s ease-in-out 0s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    box-shadow: inset 1px 1px 10px #333;
  }

  /* @media only screen and (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
    font-size: smaller;
    padding: 15px 30px;
  } */
`;

StyledButton.defaultProps = {
  variant: "primary",
  fontSize: "16px",
  filled: false,
  upperCased: false,
  shadowed: false,
};

export default StyledButton;
