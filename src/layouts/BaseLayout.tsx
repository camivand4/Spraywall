import styled from "styled-components";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
  isBoulder: boolean;
};

const BaseLayoutStyle = styled.div`
  padding: 2.5rem 2rem;
`;

const BaseLayout = ({ children }: Props) => {
  const location = useLocation();
  const isBoulder = location.pathname === "/boulder";

  return (
    <>
      {!isBoulder && (
        <Header></Header>
      )}
      <BaseLayoutStyle>{children}</BaseLayoutStyle>

    </>
  );
};

export default BaseLayout;
