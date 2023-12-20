import styled from "styled-components";
import Header from "../Components/Header";

type Props = {
  children: JSX.Element;
};

const BaseLayoutStyle = styled.div`
  padding: 2.5rem 2rem;
`;

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <BaseLayoutStyle>{children}</BaseLayoutStyle>
    </>
  );
};

export default BaseLayout;
