import { Typography, Button, Grid } from "@mui/material";
import CheckBoxPopOver from "../../../components/commonComponent/CheckBoxPopOver/SingleLabel";
import MoreFilterModal from "../../../components/commonComponent/customModal/MoreFilterModal";
import DateTimePopOver from "../../../components/commonComponent/DateTimePopOver";
import { product_label, state_label, zonal_label } from "../../sales/dashboard/dashboard.const";
import { ReactComponent as Reset } from '../../../assets/icons/reset.svg';
import { useState } from "react";
import './style.scss'; 
import Rejected from '../../../assets/icons/rejected_icon.svg';
import Dropped from '../../../assets/icons/dropped_icon.svg';
import FintechIcon from '../../../assets/icons/fintech-partner-icon.svg';
import dsaIcon from '../../../assets/icons/totaldsa_icon.svg';
import unionIcon from '../../../assets/icons/Union.svg';
import ApprovedIcon from '../../../assets/icons/approved_icon.svg';
import InProgress from '../../../assets/icons/in_progress_icon.svg';

import DashboardCard from "../../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard";
import LMSDashboardCard from "../../../components/commonComponent/CommonCard/LMSDashboardCard";
import ReactApexChart from "react-apexcharts";

const donutGraphSeries :any = 
[12, 3, 14, 8, 17, 20, 6, 13];


const donutGraphOptions: {} = {
  series: [12, 3, 14, 8, 17, 20, 6, 13],
  labels: ["Office Pincode", "Resident Pincode", "C4C-Card Rejection", "HRMS Not Listed","DPD","KYC Rejection","Low Income","Low Salary","Low CIBIL"],
  colors: ["#E697FF", "#F18F96","#999B9C", "#8BCD9A","#63ABFD","#F8B481","#F5DE99","#A08BDA"],
  chart: {
      type: 'donut',
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    offsetX: 30,
    // offsetY:50,
    
  },
  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 300,
          },
          legend: {
              position: 'bottom',
          }
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



export default function LMSDashboard() {

  const [dayFilterValue, setDayFilter] = useState<string>('Current Day');

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

  const policies_label = [
    {
      label: 'All Main Policies',
      data: [
        {
          id: 1,
          label: 'M_Payroll_Policy',
        },
      ],
    },
    {
      label: 'All Overwrite Policies',
      data: [
        {
          id: 2,
          label: 'OW_Pongal_21_Payroll',
        },
      ],
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
      image: dsaIcon,
      viewAll: false,
    },
    {
      index: 2,
      title: 'Re-Target Initiated',
      value: 3500,
      more: false,
      image: unionIcon,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
    },
    {
      index: 3,
      title: 'Re-Target - Failed',
      value: 3500,
      more: false,
      image: FintechIcon,
      viewAll: false,
      lastPeriodValue:2500,
      lastYearValue:2500,
    },
    {
      index: 4,
      title: 'Re-Target - Approval Rate (%)',
      value: '95.09%',
      more: false,
      image: unionIcon,
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
            <MoreFilterModal
              product_label={product_label}
              day_filter_label={day_filter_label}
              dayFilterValue={dayFilterValue}
              submit={'Select'}
              close={'Reset'}
              policies_label={channels_label}
              surrogates_label={surrogates_label}
              state_label={state_label}
              zonal_label={zonal_label}
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
            <div>
                  <text className="overview-text">Rejected data </text>
                </div>
                <div className="line-div"/>
                <div className="line-div" id="chart">
                  <ReactApexChart
                    options={donutGraphOptions}
                    series={donutGraphSeries}
                    type="donut"
                    height={500}
                  />
                </div>
                </div>
              {/* <BarGarph
                currencies={currencies}
                handleChange={handleChange}
                currency={currency}
                options={options}
                series={series}
                graphView={graphView}
                handleGraphView={(value: number) => setGraphView(value)}
              /> */}
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
                navPath=""
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
        </>
  );
}
