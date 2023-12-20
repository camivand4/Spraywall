import styled from "styled-components";

// Define the type for the Props that the List component receives
type Props = {
    children: JSX.Element[];
};

// Define additional style-related props for the ListStyle component
type ListStyleProps = {
    paddingTop?: string;
    paddingBottom?: string;
};

// Create a styled component 'ListStyle' using styled-components library
const ListStyle = styled.ul < ListStyleProps > `
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Apply padding styles based on provided or default values */
  padding-top: ${ (props) => props.paddingTop || "0"};
  padding-bottom: ${ (props) => props.paddingBottom || "0"};
`;

// Define the List component, which receives children as props and renders
// ListStyle
const List = ({children} : Props) => {
    return <ListStyle>{children}</ListStyle>;
};

// Export the List component as the default export
export default List;
