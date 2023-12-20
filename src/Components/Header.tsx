import styled from "styled-components";
import Colors from "../config/colors";
import BackButton from "./BackButton";
import { Link } from "react-router-dom";

const HiddenBack = styled.div `
  width: 1.2rem;
`;

const StyledHeader = styled.header `
  padding: 1rem 2rem;
  background-color: ${Colors.background.light};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    background: transparent;
    padding: 0 2rem;
    /* Override link styles */
    color: inherit;
    text-decoration: none;
  }

  /* Style the Link component */
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Header() {
    return (
        <StyledHeader>
            <BackButton></BackButton>
            <Link to="/">
                <h1>Header</h1>
            </Link>
            <HiddenBack></HiddenBack>
        </StyledHeader>
    );
}
