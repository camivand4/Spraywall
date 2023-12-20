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

  padding-top: 2.5rem;
  padding-top: ${(props) => props.paddingTop || "2.5rem"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
`;

const List = ({ children }: Props) => {
  return <ListStyle>{children}</ListStyle>;
};

export default List;
