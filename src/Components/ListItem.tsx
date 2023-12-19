import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../config/colors";

const ListItemStyle = styled.li`
  display: flex;
  flex-direction: column;

  padding-block: 0.5rem;
  padding-inline: 1rem;

  font-size: 1.2rem;

  img {
    width: 1rem;
    aspect-ratio: 1/1;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  div {
    :first-child {
      width: 2rem;
      aspect-ratio: 1/1;

      background-color: ${Colors.accent};
      border-radius: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    :nth-child(2) {
      margin-block: auto;
    }
  }
`;

type ListItemProps = {
  sectionLeft: string;
  title: string;
  to: string;
};

const ListItem = ({ sectionLeft, title, to }: ListItemProps) => {
  if (sectionLeft.includes("https://")) {
    return (
      <ListItemStyle>
        <Link to={to}>
          <div>
            <img src={sectionLeft} />
            <span>{title}</span>
          </div>
        </Link>
      </ListItemStyle>
    );
  }

  return (
    <ListItemStyle>
      <Link to={to}>
        <div>
          <span>{sectionLeft}</span>
          <span>{title}</span>
        </div>
      </Link>
    </ListItemStyle>
  );
};

export default ListItem;
