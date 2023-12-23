// import styled from "styled-components";
// import Colors from "../config/colors";
import {
  TransformWrapper,
  TransformComponent
} from "react-zoom-pan-pinch";

export default function Boulder() {

  return (
    <TransformWrapper>
      <TransformComponent>
        <img
          src="https://i.ibb.co/MDm71F7/IMG-20231104-211634.jpg"
          alt="spraywall image"
          width="100%"
        />
      </TransformComponent>
    </TransformWrapper>
  );
}