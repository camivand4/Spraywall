// Import necessary modules and components
import styled from "styled-components"; // Styled-components for styling
import Colors from "../config/colors"; // Import color configurations
import BackButton from "./BackButton"; // Import BackButton component
import { Link, useLocation } from "react-router-dom"; // React Router components for navigation

// Define a styled component to create a hidden back button
const HiddenBack = styled.div`
  width: 1.2rem; /* Set width for the hidden back button */
`;

// Define interface for StyledHeaderProps with isHomePage boolean property
interface StyledHeaderProps {
  isHomePage: boolean;
}

// Style the header using styled-components based on the isHomePage prop
const StyledHeader = styled.header<StyledHeaderProps>`
  /* Styling for the header */
  padding: 1rem 2rem; /* Set padding */
  background-color: ${Colors.background.light}; /* Set background color from colors configuration */
  display: flex; /* Set flex display */
  justify-content: ${({ isHomePage }) =>
    isHomePage ? "center" : "space-between"}; /* Adjust content alignment based on isHomePage */

  /* Styling for h1 tag within header */
  h1 {
    font-size: 1.5rem; /* Set font size */
    background: transparent; /* Transparent background */
    padding: 0 2rem; /* Set padding */
    color: inherit; /* Inherit text color */
    text-decoration: none; /* Remove text decoration */
  }

  /* Styling for anchor tag within header */
  a {
    color: inherit; /* Inherit text color */
    text-decoration: none; /* Remove text decoration */
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
  const isHomePage = location.pathname === "/"; // Check if it's the home page

  return (
    <StyledHeader isHomePage={isHomePage}>
      {!isHomePage && <BackButton />} {/* Render BackButton if not on home page */}
      <Link to="/"> {/* Link to home */}
        <h1>{pageTitle}</h1>
      </Link>
      {!isHomePage && <HiddenBack />} {/* Render HiddenBack if not on home page */}
    </StyledHeader>
  );
}
