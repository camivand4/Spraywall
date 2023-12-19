import ListItem from "../Components/ListItem";
import BaseLayout from "../layouts/BaseLayout";

export default function Gyms() {
  return (
    <BaseLayout>
      {/* <Link to="/gyms/1">Gym1</Link>
      <Link to="/gyms/2">Gym2</Link>
      <Link to="/gyms/3">Gym3</Link> */}
      <ul
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <ListItem
          sectionLeft="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.klimenbergsportfederatie.be%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Ffacebook%2Fpublic%2Fgenerated%2Fimages%2Fclimbing%2FLogo%2520Bleau%2520Full%2520Color-01.png%3Fitok%3D3E6CiGO1&f=1&nofb=1&ipt=76abe20a794292a98d79207fe6c781360c19ecbc6786b4e5aff2fc180f5f8a4e&ipo=images"
          title="Gym1"
          to="/gyms/1"
        />
        <ListItem sectionLeft="7a" title="Gym 2" to="/gyms/2" />
        <ListItem sectionLeft="7a" title="Gym3" to="/gyms/3" />
      </ul>
    </BaseLayout>
  );
}
