import { Typography, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import TypographyInfo from '../../../components/commonComponent/CustomText/Info';
import './style.scss';
import AddIcon from '@mui/icons-material/Add';
import Steppers from '../../../components/commonComponent/Steppers';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import React from 'react';

function CreateUser() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const steps = ['Personal Details', 'Permissions'];

  return (
    <Stack>
      <Box className="create-user-container">
        <ScreenHeader
          title="Create User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={true}
        />
        <Stack className="underline"></Stack>
        {/* <Steppers steps={steps} /> */}
      </Box>
    </Stack>
  );
}

export default CreateUser;
