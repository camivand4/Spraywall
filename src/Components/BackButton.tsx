import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Colors from '../config/colors';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const DarkBackgroundColor = Colors.background.dark;

const StyledArrowBack = styled(ArrowBackRoundedIcon)`
  color: ${Colors.text.light};
  width: 24px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${DarkBackgroundColor};
  }
`;

const BackButton = () => {
    const navigate = useNavigate();

    return <StyledArrowBack onClick={() => navigate(-1)}/>;
};

export default BackButton;
