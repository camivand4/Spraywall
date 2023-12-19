import Header from "../Components/Header";

type Props = {
  children: JSX.Element;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default BaseLayout;
