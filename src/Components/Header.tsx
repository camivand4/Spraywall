import styled from "styled-components";
import Colors from "../config/colors";

const StyledHeader = styled.div`
  padding-block: 1rem;
  background-color: ${Colors.background.light};

  h1 {
    font-size: 3rem;
    background: transparent;
    padding: 0 2rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}