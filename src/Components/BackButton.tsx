// Import necessary modules and components
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'; // Material-UI arrow back icon
import Colors from '../config/colors'; // Import color configurations
import styled from 'styled-components'; // Styled-components for styling
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

// Define a constant for dark background color from the Colors configuration
const DarkBackgroundColor = Colors.background.dark;

// Style the ArrowBackRoundedIcon using styled-components
const StyledArrowBack = styled(ArrowBackRoundedIcon)`
  /* Styling for the arrow back icon */
  color: ${Colors.text.light}; /* Set color based on light text color */
  width: 24px; /* Set width */
  cursor: pointer; /* Set cursor to pointer on hover */
  transition: color 0.3s ease-in-out; /* Smooth transition for color change */

  /* Change color on hover */
  &:hover {
    color: ${DarkBackgroundColor}; /* Change color to dark background color on hover */
  }
`;

// Define the BackButton component
const BackButton = () => {
    const navigate = useNavigate(); // Get the navigate function from React Router

    // Return the styled arrow back icon as a button that navigates back on click
    return <StyledArrowBack onClick={() => navigate(-1)} />;
};

// Export the BackButton component as the default export
export default BackButton;
