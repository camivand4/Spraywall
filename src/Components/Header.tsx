import styled from "styled-components";

const StyledHeader = styled.div`
  padding-block: 1rem;
  background-color: green;

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