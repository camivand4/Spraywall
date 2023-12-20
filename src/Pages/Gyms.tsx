import List from "../Components/List";
import ListItem from "../Components/ListItem";

import testGyms from "../config/testGyms";

export default function Gyms() {
  return (
    <List>
      {testGyms.map((i) => (
        <ListItem
          sectionLeft={i.image}
          text={i.name}
          to={i.id.toString()}
        ></ListItem>
      ))}
    </List>
  );
}
