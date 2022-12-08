import { Box, Typography, Stack } from '@mui/material';
import info_icon from '../../../assets/images/info_icon.svg';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import './style.scss';

function HeaderWithInfo(props: {
  header: string;
  info?: string;
  isInfoEnabled: boolean;
  isDownloadEnabled: boolean;
}) {
  return (
    <Stack className="header-with-info-container">
      <Box className="header">
        {props?.header || '--'}
        {/* {props?.isInfoEnabled && (
          <>
            <img src={info_icon} className="info-icon" alt="info_icon" />
            <Stack className="info-label margins">{props?.info ?? '--'}</Stack>
          </>
        )} */}
      </Box>
      {props?.isDownloadEnabled && (
        <Typography className="icons-container">
          <Stack className="each-icon">
            <img src={DownloadIcon} alt="" className="icons" />
          </Stack>
          <Stack className="each-icon">
            <img src={MailIcon} alt="" className="icons" />
          </Stack>
        </Typography>
      )}
      <Typography className="underline"></Typography>
    </Stack>
  );
}

export default HeaderWithInfo;
