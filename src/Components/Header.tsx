import styled from "styled-components"; 
import Colors from "../config/colors"; 
import BackButton from "./BackButton"; 
import { Link, useLocation } from "react-router-dom"; 

const HiddenBack = styled.div`
  width: 1.2rem; 
`;

// Define interface for StyledHeaderProps with ishomepage boolean property
interface StyledHeaderProps {
  ishomepage?: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  padding: 1rem 2rem;
  background-color: ${Colors.background.light}; 
  display: flex; 
  justify-content: ${( ishomepage ) =>
    ishomepage ? "center" : "space-between"};

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

// Function to get the page title based on the current pathname
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
    case "/auth":
      return "Auth";
    case "/boulder":
      return "Boulder";
    default:
      return "Page Not Found";
  }
};

// Define the Header component
export default function Header() {
  const location = useLocation(); // Get the current location using useLocation hook
  const pageTitle = getPageTitle(location.pathname); // Get the page title based on pathname
  const ishomepage = location.pathname === "/"; // Check if it's the home page

  return (
    <StyledHeader ishomepage={ishomepage}>
      {!ishomepage && <BackButton />} {/* Render BackButton if not on home page */}
      <Link to="/"> {/* Link to home */}
        <h1>{pageTitle}</h1>
      </Link>
      {!ishomepage && <HiddenBack />} {/* Render HiddenBack if not on home page */}
    </StyledHeader>
  );
}
