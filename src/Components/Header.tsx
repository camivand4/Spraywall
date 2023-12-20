import styled from "styled-components";
import Colors from "../config/colors";
import BackButton from "./BackButton";
import { Link, useLocation } from "react-router-dom";

const HiddenBack = styled.div`
  width: 1.2rem;
`;

interface StyledHeaderProps {
  isHomePage: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>` 
  padding: 1rem 2rem;
  background-color: ${Colors.background.light};
  display: flex;
  justify-content: ${({ isHomePage }) => (isHomePage ? "center" : "space-between")};
  align-items: center;

  h1 {
    font-size: 1.5rem;
    background: transparent;
    padding: 0 2rem;
    color: inherit;
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/profile":
      return "Profile";
    case "/gyms":
      return "Gyms";
    case "/gym":
      return "Gym";
    default:
      return "Page Not Found";
  }
};


export default function Header() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <StyledHeader isHomePage={isHomePage}>
      {!isHomePage && <BackButton />}
      <Link to="/">
        <h1>{pageTitle}</h1>
      </Link>
      {!isHomePage && <HiddenBack />}
    </StyledHeader>
  );
}
