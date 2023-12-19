import BlockPage from "../Components/BlockPage";
import TextField from "../Components/TextField";
import Header from '../Components/Header';

export default function Profile() {
  return (
    <>
      <Header></Header>
      <BlockPage>
        <TextField placeholder="test" />
      </BlockPage>
    </>
  )
}
