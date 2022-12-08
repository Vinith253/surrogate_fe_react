import React, { useState } from 'react';
import './style.scss';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import { Typography, Stack, Box, Grid, Link, FormControl, MenuItem, Select } from '@mui/material';
import {
  approvedCustomerDetailData,
  customerDetailsRiskManagment,
  CustomerReportFilterDropdown,
  referCustomerDetailData,
  rejectedCustomerDetailData,
  rejectedriskMngmtViewData,
  riskDashboardData,
  riskMngmtViewData,
} from '../riskManagement.const';
import EmptyTableView from '../../../components/commonComponent/EmptyTableView';
import ListLMSTable from '../../../components/commonComponent/listLmstable/listlmsTable';
import { useNavigate } from 'react-router-dom';

const toggleOptions = [
  { title: 'All' },
  { title: 'Refer' },
  { title: 'Approved' },
  { title: 'Rejected' },
];

const column1: any = [
  {
    title: '#',
    width: '70px',
    render: (text: string) => {
      return <Stack>{text}</Stack>;
    },
  },
  {
    title: 'Application',
  },
  {
    title: 'Customer Name',
  },
  { title: 'Mobile Number' },
  { title: 'Surrogate Name' },
  { title: 'KYC Status' },
  { title: 'Status' },
  { title: 'View' },
];

const risklistHeaderData: any = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: '70px',
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
  { title: 'Surrogate Name', dataIndex: 'surrogateName', key: 'surrogateName' },
  {
    title: 'Application Date & Time',
    dataIndex: 'dateAndTime',
    key: 'dateAndTime',
  },
];

function CustomerReport() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [dayFilterValue, setDayFilter] = useState('Current Day');
  const navigate = useNavigate();
  const [value, setValue] = React.useState('10');


  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };

  const column2: any = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'more',
      key: 'more',
      headerRender: () => {
        return <text>Actions</text>;
      },
      render: (_: string, row: any, index: number) => {
        var modalTxt = '';
        var userData = {};
        var riskDetailData: any = [];
        if (row.status === 'Rejected') {
          modalTxt = 'Forced Approve';
          userData = { ...rejectedCustomerDetailData };
          riskDetailData = rejectedriskMngmtViewData;
        } else if (row.status === 'Approved') {
          modalTxt = 'Forced Reject';
          userData = { ...approvedCustomerDetailData };
          riskDetailData = riskMngmtViewData;
        } else if (row.status === 'Refer') {
          modalTxt = '';
          userData = { ...referCustomerDetailData };
          riskDetailData = rejectedriskMngmtViewData;
        }
        return (
          <Link
            sx={{ cursor: 'pointer', color: '#0662B7' }}
            onClick={() =>
              navigate('/riskManagement/customerDetails', {
                state: {
                  scoreData: { ...customerDetailsRiskManagment },
                  statusText: row.status,
                  modalText: modalTxt,
                  cashFlowData: { ...userData },
                  riskMngmtViewContent: riskDetailData,
                },
              })
            }
          >
            View
          </Link>
        );
      },
    },
  ];

  return (
    <Stack className="risk-customer-report-list">
      <Stack className="container">
        <Stack className="padding-container">
          <Stack className="underline">
            <Stack>
              <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
                Customer Report
              </Typography>
              <Typography variant="subtitle2" className="sub-label">
                Lorem ipsum dolor sit amet consectetur. Sit.
              </Typography>
            </Stack>
          </Stack>
          <Grid container spacing={2} className="filters-container">
            {CustomerReportFilterDropdown?.map(
              (eachItem: any, index: number) => {
                return (
                  <>
                   {eachItem?.label == "Period" ?
                    <Grid item xs={3} key={index}>
                    <Box mt={1}>
                    <FormControl fullWidth>
                      <Typography className="dropdown-label">
                       {eachItem?.label}
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
                   : 
                  <Grid item xs={3} key={index}>
                    <Typography className="dropdown-label">
                      {eachItem?.label}
                    </Typography>
                    <SelectDropdown options={eachItem?.option} />
                  </Grid> }
                  </>
                );
              }
            )}
          </Grid>
          <Box className="button-container">
            <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
            <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
          </Box>
        </Stack>
      </Stack>

      <Stack className="container">
        <Stack className="padding-container2">
          <Stack className="underline">
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              Application Data
              <Typography className="icons-container">
                <img src={DownloadIcon} alt="" className="icons" />
                <img src={MailIcon} alt="" className="icons" />
              </Typography>
            </Typography>
            <Typography variant="subtitle2" className="sub-label"></Typography>
          </Stack>
        </Stack>

        {isFiltered ? (
          <ListLMSTable
            data={riskDashboardData}
            listColumn={risklistHeaderData}
            statusColumn={column2}
            flag="riskMngmt"
            toggleOptions={toggleOptions}
          />
        ) : (
          <Stack className="padding-container">
            <EmptyTableView
              toggleOptions={toggleOptions}
              headerData={column1}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default CustomerReport;
