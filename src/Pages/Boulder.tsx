import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import Button from "../Components/Button";
import Colors from "../config/colors";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 1rem;
  gap: 0.5rem;
`;

const Image = styled.img`
  max-width: 100vw;
  max-height: 85vh;
  border-radius: 5px;
`;

export default function Boulder() {
  return (
    <ImageContainer>
      <TransformWrapper>
        <TransformComponent>
          <Image src="https://i.ibb.co/0BBrmFJ/realcliumb.jpg" alt="spraywall image" />
        </TransformComponent>
      </TransformWrapper>
      <ButtonContainer>
        <Button width="20vw" backgroundColor={Colors.accent} color={Colors.text.light}>Left</Button>
        <Button width="20vw" backgroundColor={Colors.accent} color={Colors.text.light}>Right</Button>
        <Button width="20vw" backgroundColor={Colors.accent} color={Colors.text.light}>Neutral</Button>
        <Button width="20vw" backgroundColor={Colors.accent} color={Colors.text.light}>Both</Button>

      </ButtonContainer>
    </ImageContainer>
  );
}
