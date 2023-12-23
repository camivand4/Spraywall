import styled from "styled-components";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const BaseLayoutStyle = styled.div<{ isboulder: boolean }>`
  padding: ${({ isboulder }) => (isboulder === true ? '0' : '2.5rem 2rem')};
`;

const BaseLayout = ({ children }: Props) => {
  const location = useLocation();
  const isBoulder = (location.pathname === "/boulder");

  return (
    <>
      {!isBoulder && <Header />}
      <BaseLayoutStyle isboulder={isBoulder}>{children}</BaseLayoutStyle>
    </>
  );
};

export default BaseLayout;
