import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../../../style/Color';
import profile_icon from '../../../assets/icons/profile_icon.svg';
import '../style/loginStyle.scss';
export const Profile = () => {
  return (
    <Stack className="container" sx={{ backgroundColor: colors.bgGrey }}>
      <Box
        className="headerContainer"
        sx={{
          backgroundColor: colors.white,
        }}
      >
        <Stack>
          <img src={profile_icon} alt="Profile" />
        </Stack>
        <Stack className="headerContent">
          <Typography className="userName">Ashwin Kumar</Typography>
          <Typography
            className="userRole"
            sx={{ color: colors.textGreyHeader }}
          >
            Surrogate Manager, Employee ID : 231456789021
          </Typography>
        </Stack>
      </Box>
      <Stack></Stack>
    </Stack>
  );
};
