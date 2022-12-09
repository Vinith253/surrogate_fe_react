import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import './index.scss';
import moment from 'moment';

const FromToField = (props: any) => {
  return (
    <Box>
      <Typography>{props.title}</Typography>
      <TextField value={props.value} size="small" style={{ width: '180px' }} />
    </Box>
  );
};

const DateRangePopUp = () => {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [startDateValue, setStartDateValue] = useState<any>();

  const handleStartDate = (value: any) => {
    console.log(value, 'date');
    setStartDate(moment(new Date(value)).format('DD-MM-YYYY h:mm a'));
    // setStartDateValue(moment(new Date(value)).format('DD-MM-YYYY'));
  };
  const handleEndDate = (value: any) => {
    setEndDate(moment(new Date(value)).format('DD-MM-YYYY'));
  };

  return (
    <Box className="date-range-popup">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          open={startDateOpen}
          value={startDate}
          onOpen={() => setStartDateOpen(true)}
          onClose={() => setStartDateOpen(false)}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          disableOpenPicker={true}
          renderInput={(params) => (
            <TextField {...params} onClick={(e) => setStartDateOpen(true)} />
          )}
        /> */}
        <Box className="field-container">
          <FromToField value={startDate} title={'From'} />
          <FromToField value={endDate} title={'To'} />
        </Box>

        <StaticDateTimePicker
          displayStaticWrapperAs="desktop"
          // ampmInClock={true}
          // openTo="year"
          value={startDate}
          onChange={(newValue: any) => {
            handleStartDate(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />

        {/* <StaticDateTimePicker
          displayStaticWrapperAs="desktop"
          // openTo="year"
          value={endDate}
          onChange={(newValue: any) => {
            handleEndDate(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        /> */}
        {/* <DatePicker
          open={endDateOpen}
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          onOpen={() => setEndDateOpen(true)}
          onClose={() => setEndDateOpen(false)}
          renderInput={(params) => (
            <TextField {...params} onClick={(e) => setEndDateOpen(true)} />
          )}
          disableOpenPicker={true}
        /> */}
      </LocalizationProvider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: ' 16px',
          padding: ' 10px 32px 22px',
          // marginTop: '20px',
          backgroundColor: 'white',
          width: '100%',
        }}
      >
        <Button
          color="secondary"
          variant="outlined"
          sx={{ textTransform: 'none' }}
        >
          Cancel
        </Button>

        <Button
          color="secondary"
          variant="contained"
          sx={{ textTransform: 'none' }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default DateRangePopUp;
