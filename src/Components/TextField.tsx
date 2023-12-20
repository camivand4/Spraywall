import styled from "styled-components";
import Colors from "../config/colors";

const TextField = styled.input`
  border-radius: 1.5rem;
  background-color: ${Colors.background.light};
  color: ${Colors.text.light};
  height: 3rem;
  width: 100%;

  padding-inline: 2rem;
  border: 0;
  font-size: 1.2rem;
`;

export default TextField;