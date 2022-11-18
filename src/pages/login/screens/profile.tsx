import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { colors } from '../../../style/Color';
import profile_icon from '../../../assets/icons/profile_icon.svg';
import '../style/loginStyle.scss';
import DetailsCard from '../../sales/salesReport/detailsCard';
import '../../sales/salesReport/style.scss';
import passwordShow from '../../../assets/icons/passwordView.svg';
export const personalDetails = {
  title: 'Profile Details',
  icon: true,
  note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
  details: [
    {
      label: 'Name',
      value: 'Ashwin Kumar',
    },
    {
      label: 'Employee ID',
      value: '231456789021',
    },
    {
      label: 'Designation',
      value: 'Surrogate Manager',
    },
    {
      label: 'User Role',
      value: 'Manager',
    },
    {
      label: 'Reporting Head',
      value: 'Jack',
    },
    {
      label: 'Channel',
      value: 'DSA',
    },
    {
      label: 'Role Access Type',
      value: 'Initiator',
    },
    {
      label: 'Date Of Joining',
      value: '10/05/2020',
    },
    {
      label: 'State',
      value: 'Tamil Nadu',
    },
    {
      label: 'Zone',
      value: 'South Zone',
    },
    {
      label: 'District',
      value: 'Thirchy',
    },
    {
      label: 'Branch',
      value: 'Thirchy',
    },
  ],
};
export const contactDetails = {
  title: 'Contact Details',
  icon: true,
  note: 'Lorem ipusm dolor sit amet, consectetur adipiscing elit. Euismod nulla cursus nascetur velit nisl sed',
  details: [
    {
      label: 'Email Id',
      value: 'Ashwin@abc.com',
    },
    {
      label: 'Mobile No',
      value: '9876543210',
    },
  ],
};

export const Profile = () => {
  const passWord = 'Apple@123';
  const [show, setShow] = useState(false);
  return (
    <Stack className="container" sx={{ backgroundColor: colors.bgGrey }}>
      <Stack>
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
        <Stack
          sx={{ backgroundColor: colors.white, margin: '30px 0' }}
          className="profile-details-container"
        >
          <DetailsCard data={personalDetails} gridColumn={2} />
        </Stack>
        <Stack
          sx={{ backgroundColor: colors.white }}
          className="profile-details-container"
        >
          <DetailsCard data={contactDetails} gridColumn={2} />
        </Stack>
        <Stack
          sx={{
            backgroundColor: colors.white,
            margin: '30px 0',
          }}
        >
          <Stack className="accountHeader">
            <Stack className="header">Account Details</Stack>
            <Stack className="underline"></Stack>

            <Stack className="each-info">
              <Stack className="info-label">Password</Stack>

              <Stack className="passwordStyle">
                <Stack className="passwordDetailsStyle">
                  <Stack className="info-value">
                    <Typography>{passWord}</Typography>
                  </Stack>
                  <Stack>
                    <IconButton sx={{ padding: '0', marginLeft: '20px' }}>
                      <img src={passwordShow} alt="password" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack>
                  <Button
                    className="changePassword"
                    variant="text"
                    size="small"
                    sx={{ color: '#0662B7' }}
                  >
                    Change Password
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
