import styled from "styled-components";

const ProfileHeroStyle = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  span {
    font-size: 2rem;
  }
`;

type Props = {
  name: string;
  src: string;
};

const ProfileHero = ({ name, src }: Props) => {
  return (
    <ProfileHeroStyle>
      <img src={src} />
      <span>{name}</span>
    </ProfileHeroStyle>
  );
};

export default ProfileHero;
