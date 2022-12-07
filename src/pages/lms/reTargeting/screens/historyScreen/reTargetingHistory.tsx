import React, { useState } from 'react';
import '../../screens/reTargetingScreen/style.scss';
import {
  Typography,
  Stack,
  Box,
  Grid,
  Button,
  FormControl,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import ChooseCategoryToViewData from '../../../../../components/commonComponent/ChooseCategoryToViewData';
import download_icon from '../../../../../assets/icons/download_icon.svg';
import mail_icon from '../../../../../assets/icons/mail_icon.svg';
import { state_label } from '../../../../sales/dashboard/dashboard.const';
import MoreFilterModal from '../../../../../components/commonComponent/customModal/MoreFilterModal';
import ListLMSTable from '../../../../../components/commonComponent/listLmstable/listlmsTable';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';
import { reTargetingDropdownFields } from '../reTargetingScreen/reTargeting.const';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import './style.scss';
export const retargetingData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Approved',
    view: 'View',
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
    view: 'View',
    // more: <MoreVertIcon />,
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Dropped',
    view: 'View',
    // more: <MoreVertIcon />,
  },
];

function ReTargetingHistory() {
  const navigate = useNavigate();
  const [isFiltered, setIsFiltered] = useState(false);
  const [dayFilterValue, setDayFilter] = useState<string>('Current Day');
  const [openModel, setOpenModel] = useState(false);
  const [communicationModel, setCommunicationModel] = useState(false);
  const [successModel, setSuccesModel] = useState(false);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());
  const [value, setValue] = React.useState('10');
  const handleCloseSuccess = () => {
    setOpenModel(false);
    setCommunicationModel(false);
    setSuccesModel(false);
  };

  const reTargetingModel = () => {
    setCommunicationModel(false);
    setSuccesModel(true);
  };

  const day_filter_label = [
    {
      id: 1,
      label: 'Current Day',
      // onclick: () => {
      //   setDayFilter('Current Day');
      // },
    },
    {
      id: 2,
      label: 'Current Week',
      // onclick: () => {
      //   setDayFilter('Current Week');
      // },
    },
    {
      id: 3,
      label: 'Current Month',
      // onclick: () => {
      //   setDayFilter('Current Month');
      // },
    },
    {
      id: 4,
      label: 'Current Quarter',
      // onclick: () => {
      //   setDayFilter('Current Quarter');
      // },
    },
    {
      id: 5,
      label: 'Current Year',
      // onclick: () => {
      //   setDayFilter('Current Year');
      // },
    },
    {
      id: 6,
      label: 'Custom Period',
      // onclick: () => {
      //   setDayFilter('Custom Period');
      // },
    },
  ];

  const surrogates_label = [
    {
      id: 1,
      label: 'Payroll',
      // onclick: (() => {setDayFilter("Current Day");})
    },
    {
      id: 2,
      label: 'Card on Card',
      // onclick: (() => {setDayFilter("Current Week");})
    },
    {
      id: 3,
      label: 'CIBIL',
      // onclick: (() => {setDayFilter("Current Month");})
    },
    {
      id: 4,
      label: 'AQB',
      // onclick: (() => {setDayFilter("Current Quarter");})
    },
    {
      id: 5,
      label: 'RC',
      // onclick: (() => {setDayFilter("Current Year");})
    },
  ];
  const channels_label = [
    {
      id: 1,
      label: 'Bank',
    },
    {
      id: 2,
      label: 'DSA',
    },
    {
      id: 3,
      label: 'Fintech Partners',
    },
  ];

  const column1: any = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '80px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'Application#',
      dataIndex: 'application',
      key: 'application',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    { title: 'Mobile Number', dataIndex: 'mobileNumber', key: 'mobileNumber' },
    { title: 'CIBIL', dataIndex: 'cibil', key: 'cibil' },
    { title: 'Income', dataIndex: 'income', key: 'income' },
  ];
  const column2: any = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'View',
      dataIndex: 'view',
      key: 'view',
      render: (text: string) => {
        return (
          <Stack
            sx={{ color: '#0662B7', cursor: 'pointer' }}
            onClick={() => navigate('/lms/retargeting/reTargetingDetails')}
          >
            {text}
          </Stack>
        );
      },
    },
  ];
  const product_label = [
    {
      id: 1,
      label: 'SMS',
      defaultChecked: false,
    },
    {
      id: 2,
      label: 'Whatsapp',
      defaultChecked: false,
    },
    {
      id: 3,
      label: 'Mail',
      defaultChecked: false,
    },
    {
      id: 4,
      label: 'Call',
      defaultChecked: false,
    },
  ];

  const toggleOptions = [
    { title: 'All' },
    { title: 'Approved' },
    { title: 'In-Progress' },
    { title: 'Rejected' },
    { title: 'Dropped' },
  ];
  const handleChangeDate = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };
  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };
  return (
    <Stack className="retargetingMainContainer">
      <Stack className="retargetingcontainer">
        <Grid container spacing={2} className="retargeting-filters-container">
          {reTargetingDropdownFields?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="retargeting-dropdown-label">
                  {eachItem?.label}
                </Typography>

                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={2} className="retargeting-filters-container">
          <Grid item xs={3}>
            <Box sx={{ minWidth: 220 }}>
              <FormControl fullWidth>
                <Typography className="retargetingDropDownText">
                  Period
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  onChange={handleChange}
                  sx={{
                    '& legend': { display: 'none' },
                    '& fieldset': { top: 0 },
                  }}
                  style={{ height: 46 }}
                >
                  <MenuItem value={10}>Current Day</MenuItem>
                  <MenuItem value={20}>Current Week</MenuItem>
                  <MenuItem value={30}>Current Month</MenuItem>
                  <MenuItem value={40}>Current Quarter</MenuItem>
                  <MenuItem value={50}>Current Year</MenuItem>
                  <MenuItem value={60}>Custom Period</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Stack>
            <Stack
              sx={{
                width: '180px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginTop: '50px',
              }}
            >
              <Stack
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                <MoreFilterModal
                  product_label={product_label}
                  day_filter_label={day_filter_label}
                  dayFilterValue={dayFilterValue}
                  submit={'Apply'}
                  close={'Reset'}
                  policies_label={channels_label}
                  surrogates_label={surrogates_label}
                  state_label={state_label}
                  // zonal_label={zonal_label}
                  flag="reTargeting"
                />
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Box className="retargeting-button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>

      {isFiltered ? (
        <Stack sx={{ marginBottom: '30px' }}>
          <Stack
            className="retargetingOrgDetails"
            sx={{
              padding: '0 30px',
            }}
          >
            <Stack className="retargetingOrgDetailsHeaderTable">
              <Stack>
                <Typography>Organisation Details</Typography>
              </Stack>
              <Stack>
                <Box>
                  <Button sx={{ margin: '0' }}>
                    <img
                      src={download_icon}
                      alt="download_icon"
                      width="60%"
                      height="60%"
                    />
                  </Button>
                  <Button sx={{ margin: '0' }}>
                    <img
                      src={mail_icon}
                      alt="mail_icon"
                      width="60%"
                      height="60%"
                    />
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <ListLMSTable
            data={retargetingData}
            listColumn={column1}
            statusColumn={column2}
            flag="retargeting-history"
            label={product_label}
            toggleOptions={toggleOptions}
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
      {openModel && (
        <CustomModal
          openSuccess={openModel}
          handleCloseSuccess={handleCloseSuccess}
          // successModalTitle={'Activation Organisation'}
          // successModalMsg={
          //   'Your request for Activating Org is successfully sent to the Reviewer.'
          // }
          // btn={' Close'}
          LoadingMsg={'Loading selected application(s) for Re-Targeting'}
        />
      )}
      {communicationModel && (
        <CustomModal
          openSuccess={communicationModel}
          handleCloseSuccess={handleCloseSuccess}
          title={'Choose the mode of communication'}
          close={'Cancel'}
          submit={'Re-Target'}
          product_label={product_label}
          handleSuccess={reTargetingModel}
        />
      )}
      {successModel && (
        <CustomModal
          openSuccess={successModel}
          handleCloseSuccess={handleCloseSuccess}
          successMsg={
            'Selected applications are being processed. They will be notified of eligible customers to resume or process.'
          }
        />
      )}
    </Stack>
  );
}

export default ReTargetingHistory;
