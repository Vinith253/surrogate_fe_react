import React, { useState } from 'react';
import './style.scss';
import DownloadIcon from '../../../assets/icons/download_icon.svg';
import MailIcon from '../../../assets/icons/mail_icon.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import { Typography, Stack, Box, Grid, Link } from '@mui/material';
import {
  approvedCustomerDetailData,
  customerDetailsRiskManagment,
  CustomerReportFilterDropdown,
  referCustomerDetailData,
  rejectedCustomerDetailData,
  riskDashboardData,
} from '../riskManagement.const';
import EmptyTableView from '../../../components/commonComponent/EmptyTableView';
import ListLMSTable from '../../../components/commonComponent/listLmstable/listlmsTable';
import { useNavigate } from 'react-router-dom';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';

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
        var userData={}
        if (row.status === 'Rejected') {
          modalTxt = 'Forced Approve';
          userData = {...rejectedCustomerDetailData}
        } else if (row.status === 'Approved') {
          modalTxt = 'Forced Reject';
          userData = {...approvedCustomerDetailData}
        } else if (row.status === 'Refer') {
          modalTxt = '';
          userData = {...referCustomerDetailData}
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
          {CustomerReportFilterDropdown?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="dropdown-label">
                  {eachItem?.label}
                </Typography>
                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>
        <Box className="button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>

      <Stack className="container">
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
       
        {isFiltered ? (
          <ListLMSTable
            data={riskDashboardData}
            listColumn={risklistHeaderData}
            statusColumn={column2}
            flag="riskMngmt"
            toggleOptions={toggleOptions}
          />
        ) : (
          <EmptyTableView toggleOptions={toggleOptions} headerData={column1} />
        )}
      </Stack>
    </Stack>
  );
}

export default CustomerReport;
