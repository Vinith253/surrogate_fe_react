import React, { useEffect, useState } from 'react';
import '../../../style/Style.scss';
import { Button, Icon, Stack, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { colors } from '../../../style/Color';
import card_catalogue_sucess_icon from '../../../assets/icons/card_catalogue_sucess_icon.svg';
import card_catalogue_rejecte_icon from '../../../assets/icons/modal_rejected_icon.svg';
import info_icon from '../../../assets/images/info_icon.svg';
import InputLabel from '@mui/material/InputLabel';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import discard_icon from '../../../assets/icons/Vector1.svg';

import { SvgIcon } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import checkedIcon from '../../../assets/icons/check_box_square_icon.svg';
import { borderBottom } from '@mui/system';

type props = {
  openSuccess?: any;
  handleCloseSuccess?: () => void;
  normalPause?: string;
  title?: String;
  successModalTitle?: string;
  rejectedModaltitle?: string;
  successModalMsg?: string;
  rejectedModalMsg?: string;
  pause_content?: string;
  SchedulePause?: string;
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
  accessLibraryCloseBtn?: string;
  changePasswordTitle?: string;
  changePasswordTitleMsg?: string;
  ProceedBtn?: string;
  resentOTP?: string;
  resentOTPmsg?: string;
  enterNewPassword?: string;
  confirmNewPassword?: string;
  forgotPassword?: string;
  yesContinueBtn?: string;
  closeBtn?: string;
  discardModalTitle?: string;
  discardModalMsg?: string;
};

function CustomModal({
  openSuccess,
  handleCloseSuccess,
  normalPause,
  title,
  successModalTitle,
  rejectedModaltitle,
  successModalMsg,
  rejectedModalMsg,
  pause_content,
  SchedulePause,
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
  accessLibraryCloseBtn,
  changePasswordTitle,
  changePasswordTitleMsg,
  ProceedBtn,
  resentOTP,
  resentOTPmsg,
  enterNewPassword,
  confirmNewPassword,
  forgotPassword,
  yesContinueBtn,
  closeBtn,
  discardModalTitle,
  discardModalMsg,
}: props) {
  // const classess = useStyles();

  const [pauseStatus, setPauseStatus] = useState(normalPause);
  const [startDatevalue, setStartDateValue] = useState(null);
  const [endDatevalue, setEndDateValue] = useState(null);

  function DateIcon(props: any) {
    return (
      <SvgIcon {...props}>
        <path d="../../../assets/icons/calendar_icon.png" />
      </SvgIcon>
    );
  }

  useEffect(() => {
    if (pauseStatus) {
      pauseMethodChecking(pauseStatus);
    }
  }, [pauseStatus]);

  const pauseValue = (value: any) => {
    setPauseStatus(value);
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
          title == 'Add Organisation'
            ? true
            : false
        }
      >
        <Stack
          py={3}
          className={`${
            successModalMsg || discardModalMsg
              ? 'modal_container1'
              : ProceedBtn == 'Update'
              ? 'create_newpassword'
              : 'request_Activation_modal'
          }`}
          px={title ? 3 : 0}
        >
          {title && (
            <Typography
              component="h1"
              pt={0}
              pb={2}
              borderBottom="1px solid #36363624"
              fontSize={13}
              fontWeight={600}
              color="#555759"
            >
              {title}
            </Typography>
          )}

          {(successModalTitle || rejectedModaltitle || discardModalMsg) && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                paddingBottom: '10px',
              }}
              component="img"
              src={
                discardModalMsg
                  ? discard_icon
                  : successModalTitle
                  ? card_catalogue_sucess_icon
                  : card_catalogue_rejecte_icon
              }
              pb={0}
              width={45}
            ></Box>
          )}

          {accessLibraryCloseBtn && (
            <Button
              variant="text"
              color="secondary"
              sx={{
                position: 'absolute',
                right: '10px',
                textTransform: 'capitalize',
              }}
              onClick={handleCloseSuccess}
            >
              {accessLibraryCloseBtn}
            </Button>
          )}

          {successModalTitle && (
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
                  marginBottom: '5px',
                }}
              >
                {successModalTitle}
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
              {/* {ProceedBtn === 'Proceed' && ( */}
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ height: '40px', fontSize: '14px' }}
                value={'Ashwin@yesbank.com'}
              ></TextField>
              {/* )} */}

              <Button
                variant="contained"
                onClick={handleCloseSuccess}
                style={{
                  // width: '340px',
                  height: '48px',
                  fontSize: '12px',
                  marginTop: '30px',
                  marginBottom: '40px',
                  backgroundColor: `${colors.Modalblue}`,
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
                style={{
                  // width: '340px',
                  height: '48px',
                  fontSize: '12px',
                  marginTop: '10px',
                  marginBottom: '14px',
                  backgroundColor: `${colors.Modalblue}`,
                }}
              >
                {ProceedBtn}
              </Button>
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

          {rejectedModaltitle && (
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
                {rejectedModaltitle}
              </DialogContentText>
            </DialogContent>
          )}

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
              }}
            >
              {successModalMsg}
            </Typography>
          )}

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
                color: '#656769',
              }}
            >
              {discardModalMsg}
            </Typography>
          )}

          {/* {discardModalMsg && (
            <Typography
              fontWeight={700}
              align={'center'}
              pb={0}
              fontSize={12}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '0 70px',
                },
              }}
            >
              {discardModalMsg}
            </Typography>
          )} */}

          {accessLibraryMsg && (
            <Typography
              align="center"
              sx={{ fontSize: ' 14px', fontWeight: '400', color: '#AFAEAF' }}
            >
              {accessLibraryMsg}
            </Typography>
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

          {rejectedModalMsg && (
            <Typography
              fontWeight={700}
              align={'center'}
              pb={0}
              fontSize={13}
              sx={{
                padding: {
                  xs: '0 13px',
                  sm: '0 70px',
                },
              }}
            >
              {rejectedModalMsg}
            </Typography>
          )}

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

          {(normalPause || SchedulePause) && (
            <FormControl className={`${normalPause ? 'modal_form_label' : ''}`}>
              <Stack pb={1}>
                <RadioGroup
                  color=""
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={pauseStatus ? pauseStatus : normalPause}
                  name="radio-buttons-group"
                  onChange={(e) => pauseValue(e.target.value)}
                >
                  <FormControlLabel
                    style={{ fontSize: '1px' }}
                    value={normalPause}
                    control={<Radio color="secondary" />}
                    label={normalPause}
                  />
                  <FormControlLabel
                    value={SchedulePause}
                    control={<Radio color="secondary" />}
                    label={SchedulePause}
                  />
                </RadioGroup>
              </Stack>
            </FormControl>
          )}

          {pauseStatus === SchedulePause &&
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
                              size="small"
                              {...props}
                              fullWidth
                              inputProps={{
                                ...props.inputProps,
                                placeholder: 'Start Date and time',
                              }}
                            />
                          )}
                          label={datepickerLabelStart}
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
                              size="small"
                              {...props}
                              fullWidth
                              inputProps={{
                                ...props.inputProps,
                                placeholder: 'End Date and time',
                              }}
                            />
                          )}
                          label={datepickerLabelEnd}
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
            <Stack>
              <Typography
                className="textarea_title"
                fontWeight={600}
                fontSize={12}
                sx={{ marginTop: '5px', marginBottom: '5px' }}
              >
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
                      height: '160px',
                    }}
                  />
                </Grid>
              </Grid>

              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  marginTop: '5px',
                }}
              >
                <Typography
                  className="textarea"
                  sx={{ float: 'right', fontSize: '8px', color: '#b6b7b7' }}
                  pb={2}
                >
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
            >
              <FormGroup sx={{ paddingTop: '10px' }}>
                <Grid container>
                  {product_label.map((item: any) => {
                    return (
                      <Grid item xs={6} sm={4} key={item.id}>
                        {' '}
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={item.defaultChecked}
                              checkedIcon={
                                <img src={checkedIcon} alt={checkedIcon} />
                              }
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

          <Stack
            className="modal_buttons"
            sx={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {submit && (
              <Button
                onClick={handleCloseSuccess}
                variant="outlined"
                sx={{
                  fontSize: '13px',
                  textTransform: 'capitalize',
                  border: `1px solid #0662B7`,
                  color: '#0662B7',
                  fontWeight: '500',
                  padding: '5px 21px',
                }}
              >
                {close}
              </Button>
            )}
            {submit && (
              <Button
                variant="contained"
                sx={{
                  fontSize: '13px',
                  marginLeft: '30px',
                  textTransform: 'capitalize',
                  backgroundColor: `${colors.Modalblue}`,
                  fontWeight: '500',
                  padding: '6px 20px',
                }}
                onClick={handleSuccess}
              >
                {submit}{' '}
              </Button>
            )}
          </Stack>
          {btn && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              pb={0}
              px={4}
            >
              <Button
                variant="contained"
                onClick={handleCloseSuccess}
                style={{
                  width: '30em',
                  height: '3em',
                  fontSize: '12px',
                  backgroundColor: `${colors.Modalblue}`,
                }}
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
                  }}
                >
                  {yesContinueBtn}
                </Button>
              </Stack>
            </Stack>
          )}

          {accessLibraryModaBtn && (
            <Stack sx={{ margin: '0 30px' }}>
              <Typography
                sx={{
                  color: '#151515',
                  fontSize: ' 12px',
                  fontWeight: '600',
                  marginBottom: '4px',
                }}
              >
                {accessLibraryModaBtn}
              </Typography>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid sm={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ height: '40px' }}
                    value={
                      'https://www.yesbank.com/content/bbp/repositories/7...'
                    }
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
                    sx={{
                      marginLeft: '30px',
                      padding: '11px 20px',
                      background: '#0662B7',
                      fontSize: '13px',
                      textTransform: 'capitalize',
                    }}
                  >
                    Copy Link
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
