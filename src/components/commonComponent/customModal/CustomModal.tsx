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
        <Stack py={3} style={{ maxWidth: '450px' }} px={title ? 3 : 0}>
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

          {/* <Stack>
            <Box>Org.ID : #12345 </Box>
            <Box>Org.Name : Ganesh Agency</Box>
            <Box>Channel Type : DSA</Box>
          </Stack> */}

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
            <FormControl style={{ fontSize: '1px' }}>
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
                    <DatePicker
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
                    />

                    <DatePicker
                      className="datePicker_input"
                      label={datepickerLabelEnd}
                      value={endDatevalue}
                      onChange={(newValue: any) => {
                        setEndDateValue(newValue);
                      }}
                      renderInput={(params: any) => (
                        <TextField size="small" {...params} />
                      )}
                    />
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
              >
                {textarea_title}
              </Typography>

              <Grid container>
                <Grid container xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    style={{
                      width: 520,
                      border: `1px solid #36363624`,
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
                  border: `1px solid ${colors.ModallightGrey}`,
                  color: '#363636',
                  fontWeight: '600',
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
                  marginLeft: '35px',
                  textTransform: 'capitalize',
                  backgroundColor: `${colors.Modalblue}`,
                  fontWeight: '600',
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
        </Stack>
      </Dialog>
    </Stack>
  );
}

export default CustomModal;
