import React, { useEffect, useState } from 'react';
import '../../../style/Style.scss';
import { Button, Stack, Typography } from '@mui/material';
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
import calender_icon from '../../../assets/icons/calendar_icon.png';
import AccessibleIcon from '@mui/icons-material/Accessible';

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
}: props) {
  // const classess = useStyles();

  const [pauseStatus, setPauseStatus] = useState(normalPause);
  const [startDatevalue, setStartDateValue] = useState(null);
  const [endDatevalue, setEndDateValue] = useState(null);

  useEffect(() => {
    if (pauseStatus) {
      pauseMethodChecking(pauseStatus);
    }
  }, [pauseStatus]);

  const pauseValue = (value: any) => {
    setPauseStatus(value);
  };

  return (
    <Stack className="App">
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack
          py={3}
          className={`${successModalMsg ? 'modal_container1' : ''}`}
          px={title ? 3 : 0}
        >
          {title && (
            <Typography
              className="modal_title"
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

          {(successModalTitle || rejectedModaltitle) && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
              component="img"
              src={
                successModalTitle
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
              sx={{ position: 'absolute', right: '10px' }}
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
                }}
              >
                {successModalTitle}
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
                sx={{ height: '40px', width: '340px', fontSize: '14px' }}
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
                sx={{ height: '40px', width: '340px', fontSize: '14px' }}
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
                sx={{ height: '40px', width: '340px', fontSize: '14px' }}
                value={'Ashwin@yesbank.com'}
              ></TextField>
              {/* )} */}

              <Button
                variant="contained"
                onClick={handleCloseSuccess}
                style={{
                  width: '340px',
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
                  width: '340px',
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
              {successModalMsg}
            </Typography>
          )}

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
              }}
            >
              <Box
                sx={{ borderRight: '1px solid #151515', paddingRight: '10px' }}
              >
                Org.ID : {org_ID}
              </Box>
              <Box sx={{ borderRight: '1px solid #151515', padding: '0 10px' }}>
                Org.Name : {org_Name}
              </Box>
              <Box sx={{ paddingLeft: '10px' }}>
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

          <Typography
            className="pause_content"
            pb={1}
            pt={2}
            fontSize={12}
            color={'#171717'}
            fontWeight={500}
          >
            {' '}
            {pause_content}
          </Typography>

          {(normalPause || SchedulePause) && (
            <FormControl
              style={{ fontSize: '1px' }}
              className="modal_form_label"
            >
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
                  fontSize={12}
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
                    {/* <DatePicker
                      className="datePicker_input"
                      toolbarPlaceholder="dd"
                      label={datepickerLabelStart}
                      value={startDatevalue}
                      onChange={(newValue: any) => {
                        setStartDateValue(newValue);
                      }}
                      renderInput={(params: any) => (
                        <TextField size="small" {...params} />
                      )}
                    /> */}

                    <Grid container spacing={3}>
                      <Grid item sm={6}>
                        <DateTimePicker
                          renderInput={(props: any) => (
                            <TextField size="small" {...props} fullWidth />
                          )}
                          label={datepickerLabelStart}
                          value={startDatevalue}
                          onChange={(newValue: any) => {
                            setStartDateValue(newValue);
                          }}
                          reduceAnimations={false}
                          // components={{ OpenPickerIcon: AccessibleIcon }}
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <DateTimePicker
                          renderInput={(props: any) => (
                            <TextField size="small" {...props} fullWidth />
                          )}
                          label={datepickerLabelEnd}
                          value={endDatevalue}
                          onChange={(newValue: any) => {
                            setEndDateValue(newValue);
                          }}
                          reduceAnimations={typeof navigator !== 'undefined'}
                        />
                      </Grid>
                    </Grid>

                    {/* <DatePicker
                      className="datePicker_input"
                      label={datepickerLabelEnd}
                      value={endDatevalue}
                      onChange={(newValue: any) => {
                        setEndDateValue(newValue);
                      }}
                      renderInput={(params: any) => (
                        <TextField size="small" {...params} />
                      )}
                    /> */}
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
                            <Checkbox checked={item.defaultChecked == true} />
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
                  fontSize: '11px',
                  textTransform: 'capitalize',
                  border: `1px solid #0662B7`,
                  color: '#0662B7',
                  fontWeight: '500',
                }}
              >
                {close}
              </Button>
            )}
            {submit && (
              <Button
                variant="contained"
                sx={{
                  fontSize: '11px',
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

          {accessLibraryModaBtn && (
            <Stack sx={{ margin: '0 30px' }}>
              <Typography sx={{ color: '#151515', fontSize: ' 12px' }}>
                {accessLibraryModaBtn}
              </Typography>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid sm={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ height: '40px' }}
                    value={
                      'https://www.yesbank.com/content/bbp/repositories/7...'
                    }
                  ></TextField>
                </Grid>
                <Grid sm={4}>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: '30px',
                      padding: '8px 25px',
                      background: '#0662B7',
                      fontSize: '14px',
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
