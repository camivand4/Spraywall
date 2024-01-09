import styled from "styled-components";
import Colors from "../config/colors";

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  radius?: string;
  border?: string;
  fontWeight?: string;
};

const Button = styled.button<ButtonProps>`
  border-radius: ${(props) => props.radius || "1rem"};
  border: ${(props) => (props.border ? `solid 2px ${props.border}` : "none")};
  background-color: ${(props) =>
    props.backgroundColor || Colors.background.white};
  color: ${(props) => props.color || null};

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};

  font-size: 1.4rem;
  font-weight: ${(props) => props.fontWeight || null};
  padding: 0.5rem 1rem;
`;

export default Button;
