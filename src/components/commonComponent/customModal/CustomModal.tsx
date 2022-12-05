import React, { useEffect, useState } from 'react';
import {
  Button,
  Stack,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  InputBase,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { colors } from '../../../style/Color';
import InputLabel from '@mui/material/InputLabel';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import card_catalogue_sucess_icon from '../../../assets/icons/card_catalogue_sucess_icon.svg';
import card_catalogue_rejecte_icon from '../../../assets/icons/modal_rejected_icon.svg';
import checkedIcon from '../../../assets/icons/check_box_square_icon.svg';
import discard_icon from '../../../assets/icons/Vector1.svg';
import close_icon from '../../../assets/icons/cancel.png';
import loading_icon from '../../../assets/icons/modal-loading.svg';
import reject_icon from '../../../assets/icons/Rejection-icon.svg';
import info_icon from '../../../assets/images/info_icon.svg';
import './CustomModal.scss';

type props = {
  openSuccess?: any;
  handleCloseSuccess?: () => void;
  radioValuOne?: string;
  title?: String;
  successModalTitle?: string;
  rejectedModaltitle?: string;
  successModalMsg?: string;
  rejectedModalMsg?: string;
  pause_content?: string;
  radioValuTwo?: string;
  datepickerLabelStart?: string;
  datepickerLabelEnd?: string;
  scheduledPause_content?: string;
  dateRange_title?: string;
  textarea_title?: string;
  maxLength?: string;
  product_label?: Array<any>;
  btn?: string;
  submit?: string;
  close?: string;
  pauseMethodChecking?: any;
  handleSuccess?: any;
  accessLibraryMsg?: string;
  org_ID?: string;
  org_Name?: string;
  channel_type?: string;
  accessLibraryModaBtn?: string;
  changePasswordTitle?: string;
  changePasswordTitleMsg?: string;
  accessLibraryCopyLinkBtn?: string;
  ProceedBtn?: string;
  resentOTP?: string;
  resentOTPmsg?: string;
  enterNewPassword?: string;
  confirmNewPassword?: string;
  forgotPassword?: string;
  accessLibraryLink?: string;
  yesContinueBtn?: string;
  closeBtn?: string;
  discardModalTitle?: string;
  discardModalMsg?: string;
  duplicateRoleCloseBtn?: string;
  duplicate_role_content?: string;
  existingRoleItem?: Array<string>;
  employeeDetailsRowOne?: any;
  employeeDetailsRowTwo?: any;
  employeeDetailsRowThree?: any;
  radioValueThree?: string;
  radioValueFour?: string;
  LoadingMsg?: string;
  successMsg?: string;
  tableDataLMSRule?: any;
  pauseStatusKey?: string;
  textAreaHeight?: any;
  modalType?: string;
};

function CustomModal({
  openSuccess,
  handleCloseSuccess,
  radioValuOne,
  title,
  successModalTitle,
  rejectedModaltitle,
  successModalMsg,
  rejectedModalMsg,
  pause_content,
  radioValuTwo,
  datepickerLabelStart,
  datepickerLabelEnd,
  scheduledPause_content,
  dateRange_title,
  textarea_title,
  maxLength,
  product_label,
  btn,
  submit,
  close,
  pauseMethodChecking,
  handleSuccess,
  accessLibraryMsg,
  org_ID,
  org_Name,
  channel_type,
  accessLibraryModaBtn,
  accessLibraryCopyLinkBtn,
  changePasswordTitle,
  changePasswordTitleMsg,
  ProceedBtn,
  resentOTP,
  resentOTPmsg,
  enterNewPassword,
  confirmNewPassword,
  forgotPassword,
  accessLibraryLink,
  yesContinueBtn,
  closeBtn,
  discardModalTitle,
  discardModalMsg,
  duplicateRoleCloseBtn,
  duplicate_role_content,
  existingRoleItem,
  employeeDetailsRowOne,
  employeeDetailsRowTwo,
  employeeDetailsRowThree,
  radioValueThree,
  radioValueFour,
  LoadingMsg,
  successMsg,
  tableDataLMSRule,
  pauseStatusKey,
  textAreaHeight,
  modalType,
}: props) {
  const [pauseStatus, setPauseStatus] = useState(pauseStatusKey);
  const [startDatevalue, setStartDateValue] = useState(null);
  const [endDatevalue, setEndDateValue] = useState(null);
  const [existingRole, setexistingRole] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (pauseStatus) {
      pauseMethodChecking(pauseStatus);
    }
  }, [pauseStatus]);

  const pauseValue = (value: any) => {
    setPauseStatus(value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setexistingRole(event.target.value);
  };

  const checkedHHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack className="Modal">
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ maxWidth: 'unset' }}
        fullWidth={
          title == 'Request for Activation' ||
          title == 'Request for Deactivation' ||
          title == 'Add Organisation' ||
          title == 'Duplicate Role' ||
          title == 'Duplicate LMS Rule' ||
          title == 'Employee Details' ||
          title == 'Choose the mode of communication' ||
          LoadingMsg ||
          tableDataLMSRule
            ? true
            : false
        }
        className="custom-modal"
      >
        <Stack
          py={3}
          className={`${
            successModalMsg || discardModalMsg || rejectedModalMsg
              ? 'modal_container1'
              : ProceedBtn == 'Update'
              ? 'create_newpassword'
              : 'request_Activation_modal'
          }`}
          px={title ? 3 : 0}
        >
          {title && (
            <Typography className="modal-title" component="h1">
              {title}
            </Typography>
          )}

          {(successModalTitle || rejectedModaltitle || discardModalMsg) && (
            <Box
              className="success-reject-title"
              component="img"
              src={
                discardModalMsg
                  ? discard_icon
                  : successModalMsg
                  ? card_catalogue_sucess_icon
                  : modalType
                  ? reject_icon
                  : card_catalogue_rejecte_icon
              }
              pb={0}
              width={45}
            ></Box>
          )}

          {duplicateRoleCloseBtn && (
            <Button
              variant="text"
              color="secondary"
              className="duplicateRoleCloseBtn"
              onClick={handleCloseSuccess}
            >
              {duplicateRoleCloseBtn}
            </Button>
          )}

          {duplicate_role_content && (
            <Typography
              className="duplicate_role_content"
              color={'#171717'}
              fontWeight={500}
              sx={{ paddingTop: '14px', fontSize: '12px' }}
            >
              {' '}
              {duplicate_role_content}
            </Typography>
          )}

          {existingRoleItem && (
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">
                Choose existing role for duplication
              </InputLabel>

              <Select
                id="demo-select-small"
                value={existingRole}
                onChange={handleChange}
              >
                {existingRoleItem.map((value: any) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {(employeeDetailsRowOne ||
            employeeDetailsRowTwo ||
            employeeDetailsRowThree) && (
            <Stack className="employee-details-modal">
              {employeeDetailsRowOne && (
                <Box sx={{ marginBottom: '10px' }}>
                  <Grid container spacing={2} mt={1}>
                    {employeeDetailsRowOne.map((item: any) => (
                      <Grid md={4} item>
                        <Typography className="employee-details-key">
                          {item.Key}
                        </Typography>
                        <Typography className="employee-details-value">
                          {item.value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {employeeDetailsRowTwo && (
                <Box
                  sx={{
                    borderTop: '2px solid #E9EAEB',
                    borderBottom: '2px solid #E9EAEB',
                    marginTop: '8px',
                    paddingBottom: '12px',
                  }}
                >
                  <Grid container spacing={2} mt={1}>
                    {employeeDetailsRowTwo.map((item: any) => (
                      <Grid md={4} item>
                        <Typography className="employee-details-key">
                          {item.Key}
                        </Typography>
                        <Typography className="employee-details-value">
                          {item.value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {employeeDetailsRowThree && (
                <Box>
                  <Grid container spacing={2} mt={1}>
                    {employeeDetailsRowThree.map((item: any) => (
                      <Grid md={4} item>
                        <Typography className="employee-details-key">
                          {item.Key}
                        </Typography>
                        <Typography className="employee-details-value">
                          {item.value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Stack>
          )}

          {successModalTitle && (
            <DialogContent className="successs-modal-content">
              <DialogContentText
                id="alert-dialog-slide-description"
                className="successs-modal-title"
                align={'center'}
                sx={{
                  padding: {
                    xs: '0 13px',
                  },
                  marginBottom: '5px',
                }}
              >
                {successModalTitle}
              </DialogContentText>
            </DialogContent>
          )}

          {rejectedModaltitle && (
            <DialogContent className="successs-modal-content">
              <DialogContentText
                id="alert-dialog-slide-description"
                className="successs-modal-title"
                align={'center'}
                sx={{
                  padding: {
                    xs: '0 13px',
                  },
                  marginBottom: '5px',
                }}
              >
                {rejectedModaltitle}
              </DialogContentText>
            </DialogContent>
          )}

          {discardModalTitle && (
            <DialogContent sx={{ paddingTop: '18px', paddingBottom: '5px' }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                align={'center'}
                fontSize={16}
                fontWeight={600}
                color="#1d1d1d"
                sx={{
                  padding: {
                    xs: '0 13px',
                  },
                }}
              >
                {discardModalTitle}
              </DialogContentText>
            </DialogContent>
          )}

          {changePasswordTitle && (
            <Stack
              sx={{
                margin: '50px  60px 25px 60px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{ fontSize: '20px', fontWeight: '500', color: '#151515' }}
              >
                {changePasswordTitle}
              </Typography>
              <Button
                variant="text"
                color="secondary"
                sx={{ fontSize: '14px', textTransform: 'capitalize' }}
                onClick={handleCloseSuccess}
              >
                Close
              </Button>
            </Stack>
          )}

          {changePasswordTitleMsg && (
            <Stack sx={{ margin: '0 60px', textAlign: 'start' }}>
              <Typography fontWeight={700} pb={1} fontSize={11}>
                {changePasswordTitleMsg}
              </Typography>
            </Stack>
          )}

          {enterNewPassword && (
            <Stack sx={{ margin: '0 60px' }}>
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{ fontSize: '12px', color: '#151515' }}
              >
                {enterNewPassword}
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                sx={{ height: '40px', fontSize: '14px' }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />

              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{ marginTop: '20px' }}
              >
                {confirmNewPassword}
              </InputLabel>
              <TextField
                variant="outlined"
                size="small"
                sx={{ height: '40px', fontSize: '14px' }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Typography
                sx={{
                  fontSize: '14px',
                  textAlign: 'end',
                  color: ' #0662B7',
                  fontWeight: '500',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                {forgotPassword}
              </Typography>
            </Stack>
          )}

          {resentOTP && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 60px',
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: '45px', margin: '4px' }}
              ></TextField>
            </Box>
          )}

          {resentOTP && (
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '10px 60px',
              }}
            >
              <Typography sx={{ color: '#D02127', fontSize: '16px' }}>
                02 : 29
              </Typography>
              <Typography sx={{ color: '#82B1DB', fontSize: '16px' }}>
                {resentOTP}
              </Typography>
            </Stack>
          )}
          {ProceedBtn === 'Proceed' && (
            <Stack sx={{ margin: '0 60px' }}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ height: '40px', fontSize: '14px' }}
                value={'Ashwin@yesbank.com'}
              ></TextField>

              <Button
                variant="contained"
                onClick={handleCloseSuccess}
                sx={{
                  // width: '340px',
                  height: '48px',
                  fontSize: '12px',
                  marginTop: '30px',
                  marginBottom: '40px',
                  backgroundColor: `${colors.Modalblue}`,
                  '&:hover': {
                    backgroundColor: `${colors.Modalblue}`,
                  },
                }}
              >
                {ProceedBtn}
              </Button>
            </Stack>
          )}

          {(ProceedBtn === 'Verify' || ProceedBtn === 'Update') && (
            <Stack sx={{ margin: '0 60px' }}>
              <Button
                variant="contained"
                onClick={handleCloseSuccess}
                sx={{
                  // width: '340px',
                  height: '48px',
                  fontSize: '12px',
                  marginTop: '10px',
                  marginBottom: '14px',
                  backgroundColor: `${colors.Modalblue}`,
                  '&:hover': {
                    backgroundColor: `${colors.Modalblue}`,
                  },
                }}
              >
                {ProceedBtn}
              </Button>
              info_icon
            </Stack>
          )}

          {resentOTPmsg && (
            <Stack sx={{ flexDirection: 'row', margin: '0 60px' }}>
              <Box
                component="img"
                color={'#AFAEAF'}
                src={info_icon}
                width={18}
              ></Box>
              <Typography
                sx={{ fontSize: '10px', color: '#AFAEAF', marginLeft: '6px' }}
              >
                {resentOTPmsg}
              </Typography>
            </Stack>
          )}

          {/* {rejectedModaltitle && (
            <DialogContent sx={{ paddingTop: '18px', paddingBottom: '0px' }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                align={'center'}
                fontSize={16}
                fontWeight={600}
                color="#1d1d1d"
                sx={{
                  padding: {
                    xs: '0 13px',
                  },
                  hyphens: 'initial',
                }}
              >
                {rejectedModaltitle}
              </DialogContentText>
            </DialogContent>
          )} */}

          {successModalMsg && (
            <Typography
              fontWeight={400}
              align={'center'}
              pb={0}
              fontSize={12}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '0 70px',
                },
                marginBottom: '10px',
                color: '#656769',
                hyphens: 'initial',
              }}
            >
              {successModalMsg}
            </Typography>
          )}

          {rejectedModalMsg && (
            <Typography
              fontWeight={400}
              align={'center'}
              pb={0}
              fontSize={12}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '0 70px',
                },
                marginBottom: '10px',
                color: '#656769',
                hyphens: 'initial',
              }}
            >
              {rejectedModalMsg}
            </Typography>
          )}

          <Box className="successMsg">
            {successMsg && (
              <Box
                className="successMsg-icon"
                component="img"
                src={card_catalogue_sucess_icon}
                pb={0}
                width={45}
              ></Box>
            )}

            {successMsg && (
              <Box
                className="successicon-closeIcon"
                onClick={handleCloseSuccess}
                component="img"
                src={close_icon}
                width={13}
              ></Box>
            )}

            {successMsg && (
              <Typography
                fontWeight={400}
                align={'center'}
                pb={0}
                fontSize={12}
                sx={{
                  padding: {
                    xs: '0 13px',
                    sm: '0 70px',
                  },
                  marginBottom: '10px',
                  color: '#656769',
                  hyphens: 'initial',
                }}
              >
                {successMsg}
              </Typography>
            )}
          </Box>
          {discardModalMsg && (
            <Typography
              fontWeight={400}
              align={'center'}
              pb={0}
              fontSize={12}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '0 60px',
                },
                hyphens: 'initial',
                color: '#656769',
              }}
            >
              {discardModalMsg}
            </Typography>
          )}

          {LoadingMsg && (
            <>
              <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <Typography align="center" className="loading-msg">
                {LoadingMsg}
              </Typography>
            </>
          )}
          {accessLibraryMsg && (
            <Typography
              align="center"
              sx={{ fontSize: ' 14px', fontWeight: '400', color: '#AFAEAF' }}
            >
              {accessLibraryMsg}
            </Typography>
          )}

          {tableDataLMSRule && (
            <>
              {title == 'Selected DSA' && (
                <Box className="search-container-rejection">
                  <Box className="search-box">
                    <SearchIcon className="search-icon" />
                    <InputBase placeholder="Search" fullWidth={true} />
                  </Box>
                </Box>
              )}

              <Table aria-label="collapsible table" className="lmsRule-table">
                <TableHead className="lmsRule-table-header">
                  <TableRow className="lmsRule-tableRow">
                    <TableCell className="lmsRule-table-head">S.No</TableCell>
                    <TableCell className="lmsRule-table-head">
                      Rejection Type
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="lmsRule-TableBody">
                  {tableDataLMSRule.map((data: any) => {
                    return (
                      <TableRow sx={{ border: 'none' }}>
                        <TableCell className="lmsRule-tableData">
                          {data.sNo}
                        </TableCell>
                        <TableCell className="lmsRule-tableData">
                          {data.typeAndDSA}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </>
          )}

          {org_ID && org_Name && channel_type && (
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: '14px',
                border: '2px solid #F0F2F5',
                padding: '15px 5px',
                margin: '20px 30px',
                fontWeight: '400',
                width: '550px',
              }}
            >
              <Box sx={{ borderRight: '1px solid #151515', padding: '0 18px' }}>
                Org.ID : {org_ID}
              </Box>
              <Box sx={{ borderRight: '1px solid #151515', padding: '0 18px' }}>
                Org.Name : {org_Name}
              </Box>
              <Box sx={{ padding: '0 16px' }}>
                Channel Type : {channel_type}
              </Box>
            </Stack>
          )}

          {/* {rejectedModalMsg && (
            <Typography
              fontWeight={400}
              align={'center'}
              pb={0}
              fontSize={13}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '15px 70px',
                },
                color: '#151515',
              }}
            >
              {rejectedModalMsg}
            </Typography>
          )} */}

          {pause_content && (
            <Typography
              className="pause_content"
              pb={1}
              pt={2}
              fontSize={13}
              color={'#171717'}
              fontWeight={500}
            >
              {' '}
              {pause_content}
            </Typography>
          )}

          {(radioValuOne || radioValuTwo) && (
            <FormControl
              className={`${
                radioValuOne == 'DSA' ? 'modal_form_label' : 'radio-btnlabel'
              }`}
            >
              <Stack pb={1}>
                <RadioGroup
                  color=""
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={pauseStatus ? pauseStatus : radioValuOne}
                  name="radio-buttons-group"
                  onChange={(e) => pauseValue(e.target.value)}
                >
                  <FormControlLabel
                    value={radioValuOne}
                    control={<Radio color="secondary" />}
                    label={radioValuOne}
                  />
                  <FormControlLabel
                    value={radioValuTwo}
                    control={<Radio color="secondary" />}
                    label={radioValuTwo}
                  />

                  {radioValueThree && (
                    <>
                      <FormControlLabel
                        value={radioValueThree}
                        control={<Radio color="secondary" />}
                        label={radioValueThree}
                      />
                      <FormControlLabel
                        value={radioValueFour}
                        control={<Radio color="secondary" />}
                        label={radioValueFour}
                      />
                    </>
                  )}
                </RadioGroup>
              </Stack>
            </FormControl>
          )}

          {pauseStatus === radioValuTwo &&
            datepickerLabelStart &&
            datepickerLabelEnd && (
              <Stack>
                <Typography
                  className="pause_content"
                  pb={1}
                  pt={3}
                  fontSize={13}
                  color={'#171717'}
                  fontWeight={500}
                  style={{ borderTop: `1px solid #36363624` }}
                >
                  {' '}
                  {scheduledPause_content}
                </Typography>

                <Typography
                  className="textarea_title"
                  fontWeight={600}
                  fontSize={12}
                  pt={1}
                  pb={1}
                >
                  {dateRange_title}
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack
                    className="Modal_datepicker"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: '16px',
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid item sm={6} className="datepicker_icon">
                        <DateTimePicker
                          renderInput={(props: any) => (
                            <TextField
                              sx={{ fontSize: 1, fontWeight: 400 }}
                              size="small"
                              {...props}
                              fullWidth
                              inputProps={{
                                ...props.inputProps,
                                placeholder: 'Start Date and time',
                              }}
                              InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                          )}
                          // label={datepickerLabelStart}
                          value={startDatevalue}
                          onChange={(newValue: any) => {
                            setStartDateValue(newValue);
                          }}
                          reduceAnimations={false}
                          components={{
                            OpenPickerIcon: CalendarTodayOutlinedIcon,
                          }}
                        />
                      </Grid>
                      <Grid item sm={6} className="datepicker_icon">
                        <DateTimePicker
                          renderInput={(props: any) => (
                            <TextField
                              sx={{ fontSize: '10px' }}
                              size="small"
                              {...props}
                              fullWidth
                              inputProps={{
                                ...props.inputProps,
                                placeholder: 'End Date and time',
                              }}
                              InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                          )}
                          // label={datepickerLabelEnd}
                          value={endDatevalue}
                          onChange={(newValue: any) => {
                            setEndDateValue(newValue);
                          }}
                          reduceAnimations={typeof navigator !== 'undefined'}
                          components={{
                            OpenPickerIcon: CalendarTodayOutlinedIcon,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                </LocalizationProvider>
              </Stack>
            )}
          {textarea_title && (
            <Stack
              className="modal-textarea"
              style={textAreaHeight && { marginTop: '20px' }}
            >
              <Typography className="textarea_title">
                {textarea_title}
              </Typography>

              <Grid container>
                <Grid container xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    style={{
                      width: 538,
                      border: `1px solid #36363624`,
                      height: `${textAreaHeight ? textAreaHeight : '160px'}`,
                    }}
                  />
                </Grid>
              </Grid>

              <Stack className="textarea-alertMsg-container">
                <Typography className="textarea-alertMsg">
                  {maxLength}
                </Typography>
              </Stack>
            </Stack>
          )}

          {product_label && (
            <Stack
              sx={{
                borderTop: `1px solid #36363624`,
                borderBottom: `1px solid #36363624`,
                marginBottom: '20px',
              }}
              className={'radio-btnlabel'}
            >
              <FormGroup sx={{ paddingTop: '10px' }}>
                <Grid container>
                  {product_label.map((item: any) => {
                    return (
                      <Grid
                        item
                        xs={6}
                        sm={product_label.length > 4 ? 4 : 3}
                        key={item.id}
                      >
                        {' '}
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={checked}
                              checkedIcon={
                                <img src={checkedIcon} alt={checkedIcon} />
                              }
                              onChange={checkedHHandleChange}
                            />
                          }
                          label={item.label}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </FormGroup>
            </Stack>
          )}

          <Stack className="modal_buttons">
            {submit && (
              <Button
                onClick={handleCloseSuccess}
                variant="outlined"
                className="close-button"
              >
                {close}
              </Button>
            )}
            {submit && (
              <Button
                variant="contained"
                className="submit-button"
                onClick={handleSuccess}
              >
                {pauseStatus == 'Remove Surrogate' ? 'Remove' : submit}
              </Button>
            )}
          </Stack>
          {btn && (
            <Box className="success-closeBtn-container">
              <Button
                variant="contained"
                className="success-closeBtn"
                onClick={handleCloseSuccess}
              >
                {btn}
              </Button>
            </Box>
          )}

          {yesContinueBtn && (
            <Stack
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '10px  20px 0 20px',
                justifyContent: 'center',
              }}
            >
              <Stack sx={{ margin: '10px' }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '150px',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    color: ' #0662B7',
                    border: '1px solid  #0662B7',
                  }}
                  onClick={handleCloseSuccess}
                >
                  {closeBtn}
                </Button>
              </Stack>
              <Stack sx={{ margin: '10px' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '160px',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    background: '#0662B7',
                    '&:hover': {
                      backgroundColor: '#0662B7',
                    },
                  }}
                  onClick={handleSuccess}
                >
                  {yesContinueBtn}
                </Button>
              </Stack>
            </Stack>
          )}

          {accessLibraryModaBtn && (
            <Stack
              className="access-library-container"
              sx={{ margin: '0 30px' }}
            >
              <Typography className="access-library-header">
                {accessLibraryModaBtn}
              </Typography>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid sm={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ height: '40px' }}
                    value={accessLibraryLink}
                    inputProps={{
                      style: {
                        fontSize: '14px',
                        padding: '12.5px 14px',
                        color: '#151515',
                        fontWeight: '400',
                      },
                    }}
                  ></TextField>
                </Grid>
                <Grid sm={3}>
                  <Button
                    variant="contained"
                    className="accessLibraryCopyLinkBtn"
                  >
                    {accessLibraryCopyLinkBtn}
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          )}
        </Stack>
      </Dialog>
    </Stack>
  );
}
export default CustomModal;
