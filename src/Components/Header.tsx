import styled from "styled-components";
import Colors from "../config/colors";
import BackButton from "./BackButton";

const HiddenBack = styled.div`
  width: 1.2rem;
`;

const StyledHeader = styled.div`
  padding: 1rem 2rem;
  background-color: ${Colors.background.light};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    background: transparent;
    padding: 0 2rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <BackButton></BackButton>
      
      <h1>Header</h1>
      <HiddenBack></HiddenBack>
    </StyledHeader>
  );
}
