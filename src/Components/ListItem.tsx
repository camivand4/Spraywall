import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../config/colors";

const ListItemStyle = styled.li`
  display: flex;
  flex-direction: column;

  font-size: 1.4rem;

  img {
    width: 1rem;
    aspect-ratio: 1/1;
  }

  a {
    color: #fff;
    text-decoration: none;

    display: flex;
    gap: 2rem;

    padding-block: 1rem;

    :first-child {
      width: 3rem;
      aspect-ratio: 1/1;

      border-radius: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    span:first-child {
      background-color: ${Colors.accent};
    }

    :nth-child(2) {
      margin-block: auto;
    }
  }
`;

type ListItemProps = {
  sectionLeft: string;
  text: string;
  to: string;
};

const ListItem = ({ sectionLeft, text, to }: ListItemProps) => {
  if (sectionLeft.includes("https://")) {
    return (
      <ListItemStyle>
        <Link to={to}>
          <img src={sectionLeft} />
          <span>{text}</span>
        </Link>
      </ListItemStyle>
    );
  }

  return (
    <ListItemStyle>
      <Link to={to}>
        <span>{sectionLeft}</span>
        <span>{text}</span>
      </Link>
    </ListItemStyle>
  );
};

export default ListItem;
