import React, { useState } from 'react';
import { Typography, TextField, Checkbox, Radio, Grid } from '@mui/material';
import { Box, Stack } from '@mui/system';
import './style.scss';
import Steppers from '../../../components/commonComponent/Steppers';
import { useNavigate } from 'react-router-dom';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import ActiveStepperIcon from '../../../assets/icons/active_stepper_icon.svg';
import CompletedStepperIcon from '../../../assets/icons/completed_stepper_icon.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import DisabledStepperIcon from '../../../assets/icons/disabled_stepper_icon.svg';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import {
  PersonalDetails,
  EmploymentDetails,
  DropdownFields,
  ChannelDetails,
  RoleDetails,
} from './userCreation.const';
import { FooterButton } from '../../../components/commonComponent/FooterButton/FooterButton';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';

function CreateUser() {
  const [isPersonalDetails, setIsPersonalDetails] = useState(true);
  const [isPermission, setIsPermission] = useState(false);

  console.log('isPermission', isPermission);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const handleSubmitClick = () => {
    // setCreateRoleSelection(true);
  };

  return (
    <Stack className="create-user-main-container">
      <Box className="create-user-container">
        <ScreenHeader
          title="Create User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={true}
        />
        <Stack className="underline"></Stack>
        <Stack className="stepper-container">
          <Box style={{ textAlign: 'center' }}>
            <img src={ActiveStepperIcon} alt="" className="stepper-icons" />
            <Stack className="stepper-label">Personal Details</Stack>
          </Box>
          <Stack className="stepper-line"></Stack>
          <Box style={{ textAlign: 'center' }}>
            <img
              src={DisabledStepperIcon}
              alt=""
              className="stepper-icons"
              onClick={() => setIsPermission(true)}
            />
            <Stack className="stepper-label">Permissions</Stack>
          </Box>
        </Stack>
      </Box>
      {isPermission ? (
        <Stack>permission</Stack>
      ) : (
        <>
          <Stack className="container">
            <HeaderWithInfo
              header="Personal Details"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Grid container spacing={2}>
                {PersonalDetails?.map((eachItem: any, index: number) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <Typography className="each-field-label">
                        {eachItem?.label}
                      </Typography>
                      <TextField />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Employement Details"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Grid container spacing={2}>
                {EmploymentDetails?.map((eachItem: any, index: number) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <Typography className="each-field-label">
                        {eachItem?.label}
                      </Typography>
                      <TextField />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Channel Accessible Details"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Typography className="each-field-label">
                Select Channel
              </Typography>
              <Grid container spacing={2}>
                {ChannelDetails?.map((eachItem: any, index: number) => {
                  return (
                    <Grid item xs={2} key={index} className="checkbox-label">
                      <FormControlLabel
                        control={<Checkbox />}
                        label={eachItem?.label}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Level - State, Zonal, District, Branch"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Grid container spacing={2}>
                {DropdownFields?.map((eachItem: any, index: number) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <Typography className="each-field-label">
                        {eachItem?.label}
                      </Typography>
                      <SelectDropdown options={eachItem?.option} />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Role Details"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Typography className="each-field-label">
                Role Access Type
              </Typography>
              <Grid container spacing={2}>
                {RoleDetails?.map((eachItem: any, index: number) => {
                  return (
                    <Grid item xs={2} key={index} className="checkbox-label">
                      <FormControlLabel
                        control={<Radio />}
                        label={eachItem?.label}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Stack>
        </>
      )}
      <FooterButton
        cancel="Close"
        submit="Submit"
        handleSubmitClick={handleSubmitClick}
        handleCancelClick={goBack}
      />
    </Stack>
  );
}

export default CreateUser;
