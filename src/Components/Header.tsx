import styled from "styled-components";
import Colors from "../config/colors";

const HiddenText = styled.div`
  color: ${Colors.background.light};
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
      <div>test</div>
      
      <h1>Header</h1>
      <HiddenText>test</HiddenText>
    </StyledHeader>
  );
}
