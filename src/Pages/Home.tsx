import { Link } from "react-router-dom";
import Button from "../Components/Button";

export default function Home() {
  return (
    <>
      <Button>send</Button>
      <br />
      <Link to="profile">Profile</Link>
      <br />
      <Link to="gyms">gyms</Link>
      <br />
      <Link to="gym">gym</Link>
      <br />
      <Link to="auth">auth</Link>
      <br />
      <Link to="boulder">boulder</Link>
    </>
  );
}
