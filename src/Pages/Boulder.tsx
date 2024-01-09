import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 95vh;
`;

export default function Boulder() {
  return (
    <ImageContainer>
      <TransformWrapper>
        <TransformComponent>
          <Image src="https://i.ibb.co/0BBrmFJ/realcliumb.jpg" alt="spraywall image" />
        </TransformComponent>
      </TransformWrapper>
    </ImageContainer>
  );
}
