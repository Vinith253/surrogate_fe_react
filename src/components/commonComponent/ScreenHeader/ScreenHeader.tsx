import { Box, Typography } from '@mui/material';
import TypographyInfo from '../CustomText/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const ScreenHeader = (props: { title: string ; info: string;showBackButton: boolean; }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Box className="headFull">
      <Box onClick={goBack} className="upperhead">
        {props.showBackButton && <ArrowBackIcon className="headback" />}
        <Typography
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
          color="textPrimary"
        >
          {props.title}
        </Typography>
      </Box>
      <TypographyInfo title={props.info} />
    </Box>
  );
};
