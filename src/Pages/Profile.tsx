import styled from "styled-components";
import Colors from "../config/colors";
import ProfileHero from "../Components/ProfileHero";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1rem;

  img {
    aspect-ratio: 1/1;
    height: 7rem;
    border-radius: 100%;
    /* background-color: purple; */

    margin-inline: auto;
    margin-bottom: 1rem;
  }

  .stats {
    margin-top: 1rem;

    display: flex;
    gap: 2rem;

    //!TODO: add font-sizes to config file.
    font-size: 1.4rem;

    /* columns: 3;
    column-gap: 2rem;
    column-rule: 0.1rem solid ${Colors.background.light}; */

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default function Profile() {
  return (
    <ProfileStyle>
      <ProfileHero
        src="https://randomuser.me/api/portraits/women/50.jpg"
        name="Cama"
      />

      <div className="stats">
        <div>
          <span>Completed</span>
          <span>15</span>
        </div>
        <div>
          <span>Flashed</span>
          <span>15</span>
        </div>
        <div>
          <span>Created</span>
          <span>0</span>
        </div>
      </div>
    </ProfileStyle>
  );
}
