import styled from "styled-components";

type Props = {
  children: JSX.Element[];
};

type ListStyleProps = {
  paddingTop?: string;
  paddingBottom?: string;
};

const ListStyle = styled.ul<ListStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
`;

const List = ({ children }: Props) => {
  return <ListStyle>{children}</ListStyle>;
};

export default List;
