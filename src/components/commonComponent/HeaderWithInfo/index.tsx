import { Box, Typography, Stack } from '@mui/material';
import TypographyInfo from '../CustomText/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function HeaderWithInfo(props: {
  title: string;
  info: string;
  showBackButton: boolean;
}) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box className="header-with-info-container">
      <Box className="main-header">
        {props.showBackButton && (
          <ArrowBackIcon onClick={goBack} className="go-back-icon" />
        )}
        <Typography>{props.title}</Typography>
      </Box>
      <TypographyInfo title={props.info} />
    </Box>
  );
}

export default HeaderWithInfo;
