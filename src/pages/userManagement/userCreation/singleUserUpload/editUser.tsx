import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  Grid,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import HeaderWithInfo from '../../../../components/commonComponent/HeaderWithInfo';
import FirstActiveStepperIcon from '../../../../assets/icons/first_stepper_icon.svg';
import SecondActiveStepperIcon from '../../../../assets/icons/second_active_stepper.svg';
import SecondDisabledStepperIcon from '../../../../assets/icons/second_disabled_stepper.svg';
import CompletedStepperIcon from '../../../../assets/icons/completed_stepper_icon.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import SelectDropdown from '../../../../components/commonComponent/CheckboxSelectDropdown';
import SuccessModal from '../../../../components/commonComponent/customModal/CustomModal';
import {
  PersonalDetails,
  EmploymentDetails,
  DropdownFields,
  ChannelDetails,
  RoleDetails,
  RoleAccessFrom,
  ReviewerApproverAllocation,
  PermissionsList,
  ReviewerApproverList,
} from './../userCreation.const';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AccordianLayover } from '../../../../components/commonComponent/CustomAccordian/Accordian';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import ReviewerApproverTable from '../../../../components/commonComponent/ReviewerApproverTable';

function EditUser() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('DD/MM/YYYY'));
  const [isPermission, setIsPermission] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isAdminReviewApproved, setIsAdminReviewApproved] = useState(false);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleSubmitClick = () => {
    isPermission ? setIsUserCreated(true) : setIsPermission(true);
  };

  const handleSubmit = () => {
    setIsUserCreated(false);
    navigate('/userManagement/userCreation');
  };

  const changeReviewerApproverOptions = (event: any) => {
    if (event.target.value === 'yes,I') {
      setIsAdminReviewApproved(true);
    } else {
      setIsAdminReviewApproved(false);
    }
  };

  return (
    <Stack className="create-user-main-container">
      <Box className="create-user-container">
        <ScreenHeader
          title="Edit User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={true}
        />
        <Stack className="underline"></Stack>
        <Stack className="stepper-container">
          <Stack className="steppers">
            <img
              src={isPermission ? CompletedStepperIcon : FirstActiveStepperIcon}
              alt=""
              className="stepper-icons"
            />
            <Stack
              className={
                isPermission ? 'enabled-stepper-line' : 'disabled-stepper-line'
              }
            ></Stack>
            <img
              src={
                isPermission
                  ? SecondActiveStepperIcon
                  : SecondDisabledStepperIcon
              }
              alt=""
              className="stepper-icons"
            />
          </Stack>

          <Stack className="steppers-label-container">
            <Stack className="stepper-label enabled">Personal Details</Stack>
            <Stack
              className={
                isPermission
                  ? 'stepper-label enabled'
                  : 'stepper-label disabled'
              }
            >
              Permissions
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {isPermission ? (
        <>
          <Stack className="container">
            <HeaderWithInfo
              header="Permission allocation"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Typography className="each-field-label">
                Copy Role Access from
              </Typography>
              <Grid container spacing={2}>
                <RadioGroup
                  defaultValue="rolePresets"
                  name="radio-buttons-group"
                  className="radio-group-container"
                >
                  {RoleAccessFrom?.map((eachItem: any, index: number) => {
                    return (
                      <Grid item xs={3} key={index} className="checkbox-label">
                        <FormControlLabel
                          value={eachItem?.value}
                          control={<Radio color="secondary" />}
                          label={eachItem?.label}
                        />
                      </Grid>
                    );
                  })}
                </RadioGroup>
              </Grid>
              <Stack className="form-container">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography className="each-field-label">
                      Select User Role
                    </Typography>
                    <SelectDropdown options={[]} />
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Permission"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <AccordianLayover data={PermissionsList} isViewPage={false} />
          </Stack>
          <Stack className="container">
            <HeaderWithInfo
              header="Reviewer & Approver allocation"
              isInfoEnabled={true}
              info="From here, you can add the user’s personal details"
              isDownloadEnabled={false}
            />
            <Stack className="form-container">
              <Typography className="each-field-label">
                Reviewer & Approver allocation
              </Typography>
              <Grid container spacing={2}>
                <RadioGroup
                  name="radio-buttons-group"
                  className="radio-group-container"
                  onChange={changeReviewerApproverOptions}
                >
                  {ReviewerApproverAllocation?.map(
                    (eachItem: any, index: number) => {
                      return (
                        <Grid
                          item
                          xs={3}
                          key={index}
                          className="checkbox-label"
                        >
                          <FormControlLabel
                            value={eachItem?.value}
                            control={<Radio color="secondary" />}
                            label={eachItem?.label}
                          />
                        </Grid>
                      );
                    }
                  )}
                </RadioGroup>
              </Grid>
              {isAdminReviewApproved && (
                <Stack>
                  <ReviewerApproverTable
                    data={ReviewerApproverList}
                    mode="create"
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </>
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
                      <TextField placeholder={eachItem?.placeHolder} />
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
                      {eachItem?.label === 'Date of Joining' ? (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          {/* <TypographySubTitle title="Year of inc./ in Business Since" /> */}
                          <DatePicker
                            disableFuture
                            // label="Responsive"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={value}
                            onChange={(newValue) => {
                              // setValue(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                size="small"
                                {...params}
                                fullWidth
                                placeholder={eachItem?.placeHolder}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      ) : (
                        <TextField placeholder={eachItem?.placeHolder} />
                      )}
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
                <RadioGroup
                  defaultValue="initiator"
                  name="radio-buttons-group"
                  className="radio-group-container"
                >
                  {RoleDetails?.map((eachItem: any, index: number) => {
                    return (
                      <Grid item xs={2} key={index} className="checkbox-label">
                        <FormControlLabel
                          value={eachItem?.value}
                          control={<Radio color="secondary" />}
                          label={eachItem?.label}
                        />
                      </Grid>
                    );
                  })}
                </RadioGroup>
              </Grid>
            </Stack>
          </Stack>
        </>
      )}
      <FooterButton
        cancel="Close"
        submit="Submit"
        saveAsDraft="Save as draft"
        handleSubmitClick={handleSubmitClick}
        handleCancelClick={goBack}
        // handleSaveasDraftClick={handleSaveasDraftClick}
      />
      {isUserCreated && (
        <SuccessModal
          openSuccess={isUserCreated}
          handleCloseSuccess={handleSubmit}
          successModalTitle={'User Edited Successfully'}
          successModalMsg={
            'Your request for editing user is successfully sent to the Reviewer.'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
}

export default EditUser;
