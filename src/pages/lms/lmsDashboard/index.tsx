import { Typography, Button, Grid, Stack, Box, Link } from "@mui/material";
import CheckBoxPopOver from "../../../components/commonComponent/CheckBoxPopOver/SingleLabel";
import MoreFilterModal from "../../../components/commonComponent/customModal/MoreFilterModal";
import DateTimePopOver from "../../../components/commonComponent/DateTimePopOver";
import { product_label, state_label } from "../../sales/dashboard/dashboard.const";
import { ReactComponent as Reset } from '../../../assets/icons/reset.svg';
import { useState } from "react";
import './style.scss'; 
import Rejected from '../../../assets/icons/rejected_icon.svg';
import Dropped from '../../../assets/icons/dropped_icon.svg';
import ApprovedIcon from '../../../assets/icons/approved_icon.svg';
import InProgress from '../../../assets/icons/in_progress_icon.svg';
import RejectedIcon from '../../../assets/icons/rejectedApplication.svg';
import RetargetedInitiate from '../../../assets/icons/retargetedaInitiate.svg';
import RetargetedFailed from '../../../assets/icons/retargetedFailed.svg';
import RetargetedRate from '../../../assets/icons/retargetedRate.svg';

import DashboardCard from "../../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard";
import LMSDashboardCard from "../../../components/commonComponent/CommonCard/LMSDashboardCard";
import ReactApexChart from "react-apexcharts";
import ListLMSTable from "../../../components/commonComponent/listLmstable/listlmsTable";
import download_icon from '../../../assets/icons/download_icon.svg';
import mail_icon from '../../../assets/icons/mail_icon.svg';
import { useNavigate } from "react-router-dom";
import HeaderWithInfo from "../../../components/commonComponent/HeaderWithInfo";
import MoreFilterRightModal from "../../../components/commonComponent/customModal/MoreFilterRightModal";


export const lmsDashboardData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
    more: 'View',
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
    more: 'View',
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Dropped',
    more: 'View',
  },
];

const donutGraphSeries :any = 
[12, 3, 14, 8, 17, 20, 6, 13];

const donutGraphSeries2 :any = 
[20, 13, 17, 4, 3, 12, 13, 6];


const donutGraphOptions: {} = {
  series: [12, 3, 14, 8, 17, 20, 6, 13],
  labels: ["Office Pincode", "Resident Pincode", "C4C-Card Rejection", "HRMS Not Listed","DPD","KYC Rejection","Low Income","Low Salary"],
  colors: ["#E697FF", "#F18F96","#999B9C", "#8BCD9A","#63ABFD","#F8B481","#F5DE99","#A08BDA"],
  chart: {
      type: 'donut',
  },
  // legend: {
  //   show: true,
  //   position: 'bottom',
  //   horizontalAlign: 'center',
  //   offsetX: 30,
  //   // offsetY:50,
    
  // },
  responsive: [{
      // breakpoint: 480,
      options: {
          // chart: {
          //     width: 300,
          // },
          // legend: {
          //     position: 'bottom',
          // }
      },
  }],
  plotOptions: {
    pie: {
      dataLabels: {
        offset: 50,
      },
      donut: {
        
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Rejected',
            color: '#999B9C',
            // formatter: function (w) {
            //   return w.globals.seriesTotals.reduce((a, b) => {
            //     return a + b
            //   }, 0)
            // }
          }
        }
      }
    }
  }
};

const donutGraphOptions2: {} = {
  series: [20, 13, 17, 4, 3, 12, 13, 6],
  labels: ["Initial Verification", "Surrogare Selection", "HRMS - Input", "Employment Details","HRMS - Fetching Data","C4C - Eligible","C4C - Verification","Card Selection"],
  colors: [ "#8BCD9A","#F8B481","#63ABFD","#F18F96","#E697FF", "#F5DE99","#A08BDA","#999B9C",],
  chart: {
      type: 'donut',
  },
  // legend: {
  //   show: true,
  //   position: 'bottom',
  //   horizontalAlign: 'center',
  //   offsetX: 30,
    
  // },
  responsive: [{
      // breakpoint: 480,
      options: {
          // chart: {
          //     width: 300,
          // },
          // legend: {
          //     position: 'bottom',
          // }
      },
  }],
  plotOptions: {
    pie: {
      dataLabels: {
        offset: 50,
      },
      donut: {
        
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Rejected',
            color: '#999B9C',
          }
        }
      }
    }
  }
};



export default function LMSDashboard() {

  const [dayFilterValue, setDayFilter] = useState<string>('Current Day');
  const navigate = useNavigate();

  const day_filter_label = [
    {
      id: 1,
      label: 'Current Day',
      onclick: () => {
        setDayFilter('Current Day');
      },
    },
    {
      id: 2,
      label: 'Current Week',
      onclick: () => {
        setDayFilter('Current Week');
      },
    },
    {
      id: 3,
      label: 'Current Month',
      onclick: () => {
        setDayFilter('Current Month');
      },
    },
    {
      id: 4,
      label: 'Current Quarter',
      onclick: () => {
        setDayFilter('Current Quarter');
      },
    },
    {
      id: 5,
      label: 'Current Year',
      onclick: () => {
        setDayFilter('Current Year');
      },
    },
    {
      id: 6,
      label: 'Custom Period',
      onclick: () => {
        setDayFilter('Custom Period');
      },
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

  const dashboardVal = [
    {
      index: 1,
      title: 'Rejected Application(s)',
      value: 3500,
      more: true,
      image: Rejected,
      boxstyles: 'rejected-icon-box',
    },
    {
      index: 2,
      title: 'Dropped Application(s)',
      value: 3500,
      more: true,
      image: Dropped,
      boxstyles: 'dropped-icon-box',
    },
  ];

  const channelUserData = [
    {
      index: 1,
      title: 'Rejected Application',
      value: 3500,
      more: false,
      image: RejectedIcon,
      viewAll: false,
    },
    {
      index: 2,
      title: 'Re-Target Initiated',
      value: 3500,
      more: false,
      image: RetargetedInitiate,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
    },
    {
      index: 3,
      title: 'Re-Target - Failed',
      value: 3500,
      more: false,
      image: RetargetedFailed,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
    },
    {
      index: 4,
      title: 'Re-Target - Approval Rate (%)',
      value: '95.09%',
      more: false,
      image: RetargetedRate,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
    },
    {
      index: 5,
      title: 'Re-Target - In Progress',
      value: 3500,
      more: true,
      image: InProgress,
      viewAll: false,
      boxstyles: "progress-icon-box",
    },
    {
      index: 6,
      title: 'Re-Target - Approved',
      value: 3500,
      more: true,
      image: ApprovedIcon,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
      boxstyles: "approval-icon-box",
    },
    {
      index: 7,
      title: 'Re-Target - Dropped',
      value: 3500,
      more: true,
      image: Dropped,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
      boxstyles: "dropped-icon-box",
    },
    {
      index: 8,
      title: 'Re-Target - Rejected #',
      value: 3500,
      more: true,
      image: Rejected,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
      boxstyles: "rejected-icon-box",
    },
  ];

  const column1: any = [
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
      title: 'Actions',
      dataIndex: 'more',
      key: 'more',
      headerRender: () => {
        return <text>Actions</text>;
      },
      render: (_: string, row: any, index: number) => {
        return <Link
        sx={{ cursor: 'pointer', color: '#0662B7' }}
        onClick={() => navigate('/lms/retargeting/reTargetingDetails')}
      >
        View
      </Link>
      },
    },
  ];

  const toggleOptions = [
    { title: 'All' },
    { title: 'Rejected' },
    { title: 'Dropped' },
  ];


  return (
    <>
    <div className="lms-dashboard-container">
      <>
        <div className="filter-header">
          <div className="filter-data">
            <Typography
              sx={{
                fontSize: '1.1vw',
                marginRight: '24px',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              Overview
            </Typography>
            <DateTimePopOver
              day_filter_label={day_filter_label}
              dayFilterValue={dayFilterValue}
            />
            <CheckBoxPopOver
                surrogates_label={channels_label}
                displayText={'All Channels'}
                showSearch={true}
                submit={'Select'}
                close={'Reset'}
              />
            <CheckBoxPopOver
              surrogates_label={surrogates_label}
              displayText={'All Surrogates'}
              showSearch={true}
              submit={'Select'}
              close={'Reset'}
            />
            <MoreFilterRightModal
              product_label={product_label}
              day_filter_label={day_filter_label}
              dayFilterValue={dayFilterValue}
              submit={'Select'}
              close={'Reset'}
              policies_label={channels_label}
              surrogates_label={surrogates_label}
              state_label={state_label}
              flag="main-dashboard"
            />
          </div>
          <div className="reset-data">
            <Button
              startIcon={<Reset />}
              sx={{
                fontSize: '0.9vw',
                marginRight: '10px',
                color: '#0662B7',
                backgroundColor: '#EEF7FF',
                textTransform: 'none',
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="divider-line" />
        <div className="horizontal-cards">
          <Grid container spacing={2}>
            {dashboardVal?.map((value) => (
              <Grid xs={6} item>
              <DashboardCard
                title={value.title}
                value={value.value}
                more={value.more}
                image={value.image}
                boxStyles={value.boxstyles}
                navPath="/sales/salesReport"
              />
              </Grid>
            ))}
            </Grid>
          </div>
          <div className="report-cards">
            <div className="graph-card">
            <div className="graph-div">
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                  <text className="overview-text">Rejected data </text>
                  <Stack>
                <Box>
                  <Button>
                    <img
                      src={download_icon}
                      alt="download_icon"
                      width="24px"
                      height="24px"
                    />
                  </Button>
                  <Button>
                    <img
                      src={mail_icon}
                      alt="mail_icon"
                      width="24px"
                      height="24px"
                    />
                  </Button>
                </Box>
              </Stack>
                </div>
                <div className="line-div"/>
                <div className="donut-chart-div" id="chart">
                  <ReactApexChart
                    options={donutGraphOptions}
                    series={donutGraphSeries}
                    type="donut"
                    height={220}
                  />
                </div>
                </div>
            </div>

            <div className="graph-card">
            <div className="graph-div">
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                  <text className="overview-text">Dropped data </text>
                  <Stack>
                <Box>
                  <Button>
                    <img
                      src={download_icon}
                      alt="download_icon"
                      width="24px"
                      height="24px"
                    />
                  </Button>
                  <Button>
                    <img
                      src={mail_icon}
                      alt="mail_icon"
                      width="24px"
                      height="24px"
                    />
                  </Button>
                </Box>
              </Stack>
                </div>
                <div className="line-div"/>
                <div className="donut-chart-div" id="chart">
                  <ReactApexChart
                    options={donutGraphOptions2}
                    series={donutGraphSeries2}
                    type="donut"
                    height={220}
                  />
                </div>
                </div>
            </div>

           
          </div>
        </>
        </div>
        <div className="diff-area" />
        <div className="lms-dashboard-container">
          <div className="heading-text">
            <Typography sx={{ color: 'black', fontSize: '16px' }}>
            Re-target Insights
            </Typography>
          </div>
          <div className="divider-line" />
          <div className="horizontal-cards2">
            <Grid container spacing={2}>
            {channelUserData.map((value) => (
              <Grid xs={3} item>
              <LMSDashboardCard
                title={value.title}
                value={value.value}
                more={value.more}
                image={value.image}
                viewAll={value.viewAll}
                navPath="/lms/retargeting"
                lastPeriodValue={value.lastPeriodValue}
                lastYearValue={value.lastYearValue}
                boxStyles={value.boxstyles}
              />
              </Grid>
            ))}
            </Grid>
          </div>
        </div>
        <div className="diff-area" />
        <Stack sx={{ backgroundColor: 'white',margin: '30px 0px'}}>
          <Stack sx={{padding: '20px 30px 0px 30px'}}>
        <HeaderWithInfo
          header="Rejected and Dropped Applications"
          isInfoEnabled={false}
          info=""
          isDownloadEnabled={false}
        /></Stack>
          <ListLMSTable
            data={lmsDashboardData}
            listColumn={column1}
            statusColumn={column2}
            flag="lmsdashboard"
            label={product_label}
            toggleOptions={toggleOptions}
          />
        </Stack>
        </>
  );
}
