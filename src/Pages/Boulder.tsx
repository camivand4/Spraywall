import styled from "styled-components";
import Colors from "../config/colors";

export default function Boulder() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(90vh - 5rem);
    flex-direction: column;
  `;

  const StyledImage = styled.img`
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    object-fit: contain; /* Adjust object-fit based on your preference */
  `;

  const ButtonsContainer = styled.div`
    height: 10vh;
    width: 100%;
    background-color: ${Colors.accent};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <Container>
      <StyledImage
        src="https://i.ibb.co/nbfhqKz/IMG-20231213-232859.jpg"
        alt="climbwall"
      />
      <ButtonsContainer>Buttons</ButtonsContainer>
    </Container>
  );
}