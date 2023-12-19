import styled from 'styled-components';

interface BlockPageProps {
  ypadding?: string;
  xpadding?: string;
}

const BlockPage = styled.div<BlockPageProps>`
  padding: ${(props) => props.ypadding || '2.5rem'} ${(props) => props.xpadding || '2rem'};
`;

export default BlockPage;
