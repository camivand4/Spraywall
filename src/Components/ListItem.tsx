// Import necessary modules
import {Link} from "react-router-dom";
import styled from "styled-components";
import Colors from "../config/colors";

// Define the styled component for the list item
const ListItemStyle = styled.li `
  /* Styling for list item */
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  /* Styling for image within the list item */
  img {
    width: 1rem;
    aspect-ratio: 1/1;
  }

  /* Styling for anchor tag within the list item */
  a {
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease; /* Transition effect for color changes */

    /* Flexbox layout for the anchor tag and its children */
    display: flex;
    gap: 2rem;
    padding-block: 1rem;

    /* Styling for the first child within the anchor tag */
    :first-child {
      width: 3rem;
      aspect-ratio: 1/1;
      border-radius: 100%;

      /* Flexbox layout for the first child */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Styling for the first span child within the anchor tag */
    span:first-child {
      background-color: ${Colors.accent}; /* Using color from the Colors configuration */
    }

    /* Styling for the second child within the anchor tag */
    :nth-child(2) {
      margin-block: auto;
    }
    
    /* Hover effect styles */
    &:hover {
      background-color: ${Colors.background.light}; /* Change background color on hover */
      border-radius: 5px;
    }
  }
`;

// Define the type for the props that ListItem component receives
type ListItemProps = {
    sectionLeft: string;
    text: string;
    to: string;
};

// Define the ListItem component that renders a styled list item based on props
const ListItem = ({sectionLeft, text, to} : ListItemProps) => {
    // Check if the sectionLeft includes an image URL
    if (sectionLeft.includes("https://")) {
        return (
            <ListItemStyle>
                {/* Render a Link component with an image and text */}
                <Link to={to}>
                    <img src={sectionLeft}/>
                    <span>{text}</span>
                </Link>
            </ListItemStyle>
        );
    }

    // Render a Link component with two spans containing text
    return (
        <ListItemStyle>
            <Link to={to}>
                <span>{sectionLeft}</span>
                <span>{text}</span>
            </Link>
        </ListItemStyle>
    );
};

// Export the ListItem component as the default export
export default ListItem;
