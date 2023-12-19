import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackButton = styled.div`
  border-radius: 1rem;
  background-color: #557e45;
`;

BackButton.propTypes = {
  className: PropTypes.string.isRequired
};

export default BackButton;