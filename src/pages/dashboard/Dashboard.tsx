import DashboardCard from "../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard";
import { listRowHeading, product_label, salesDashboardList, state_label, statusRowHeading, zonal_label } from "../sales/dashboard/dashboard.const";
import './style.scss';
import ApprovedIcon from '../../assets/icons/approved_icon.svg';
import InProgress from '../../assets/icons/in_progress_icon.svg';
import Rejected from '../../assets/icons/rejected_icon.svg';
import ApprovedRate from '../../assets/icons/dashboard_rate.svg';
import FintechIcon from '../../assets/icons/fintech-partner-icon.svg';
import dsaIcon from '../../assets/icons/totaldsa_icon.svg';
import unionIcon from '../../assets/icons/Union.svg';
import UserIcon from '../../assets/icons/users_icon.svg';
import { useState } from "react";
import TableComp from "../../components/commonComponent/ListTable/ListTable";
import BarGarph from "../../components/commonComponent/BarGraph/BarGraph";
import { Button, TextField, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import CheckBoxPopOver from "../../components/commonComponent/CheckBoxPopOver/SingleLabel";
import DateTimePopOver from "../../components/commonComponent/DateTimePopOver";
import { ReactComponent as Reset } from '../../assets/icons/reset.svg';
import MoreFilterModal from "../../components/commonComponent/customModal/MoreFilterModal";

const currencies = [
  {
    value: 1,
    label: 'All Status',
  },
  {
    value: 2,
    label: 'Approved',
  },
  {
    value: 3,
    label: 'In-Progress',
  },
  {
    value: 4,
    label: 'Rejected',
  },
  {
    value: 5,
    label: 'Dropped',
  },
];

const dashboardVal = [
  {
    index: 1,
    title: 'Approved Applications',
    value: 3500,
    more: true,
    image: ApprovedIcon,
    boxstyles : "approval-icon-box"
  },
  {
    index: 2,
    title: 'Approval Rate(%)',
    value: 98.6,
    more: true,
    image: ApprovedRate,
    boxstyles : "progress-icon-box"
  },
  {
    index: 3,
    title: 'In-Progress Applications',
    value: 26,
    more: true,
    image: InProgress,
    boxstyles : "dropped-icon-box"
  },
  {
    index: 4,
    title: 'Rejected Applications',
    value: 345,
    more: true,
    image: Rejected,
    boxstyles : "rejected-icon-box"
  },
];

const options: {} = {
  colors: ['#63a567', '#e3bc52', '#d95f63', '#8d3529'],
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
      borderRadius: 2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent'],
  },
  grid: {
    borderColor: '#2d67b4',
    strokeDashArray: 2,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    range: 12,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: true,
      color: '#2d67b4',
      offsetX: 0,
      offsetY: 0,
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: any) {
        return val + 'L';
      },
    },
    axisBorder: {
      show: true,
      color: '#2d67b4',
      offsetX: 0,
      offsetY: 0,
    },
  },
  fill: {
    opacity: 1,
  },
};

const series = [
  {
    name: 'Approved',
    data: [5, 10, 17, 0, 12, 17, 13, 0, 18, 14, 20, 0],
  },
  {
    name: 'In-Progress',
    data: [5, 0, 2, 5, 0, 10, 3, 5, 0, 7, 10, 13],
  },
  {
    name: 'Rejected Applications',
    data: [0, 10, 10, 15, 3, 0, 6, 8, 2, 0, 12, 16],
  },
  {
    name: 'Rejected Dropped',
    data: [5, 10, 0, 15, 7, 18, 0, 20, 4, 8, 0, 17],
  },
];

const spineGraphSeries= [{
  name: 'Card For Card',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Payroll',
  data: [11, 32, 45, 32, 34, 52, 41]
}];

const spineGraphOptions: {} = {
  colors: ['#5D3BBD', '#F37B21'],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

const channelUserData = [
  {
    index: 1,
    title: 'Total DSAs',
    value: 26,
    more: false,
    image: dsaIcon,
    viewAll: true
  },
  {
    index: 2,
    title: 'Total Banking Divisions',
    value: 26,
    more: false,
    image: unionIcon,
    viewAll: true
  },
  {
    index: 3,
    title: 'Total Fintech Partner',
    value: 26,
    more: false,
    image: FintechIcon,
    viewAll: true
  },
  {
    index: 4,
    title: 'Total Users',
    value: 345,
    more: false,
    image: UserIcon,
    viewAll: true
  },
];

export default function Dashboard() {


  const [graphView, setGraphView] = useState<number>(1);
const [currency, setCurrency] = useState<number>(1);
const [dayFilterValue, setDayFilter] = useState<string>("Current Day");

const handleChange = (event: any) => {
  setCurrency(event.target.value);
};


const day_filter_label = [
  {
    id: 1,
    label:  "Current Day",
    onclick: (() => {setDayFilter("Current Day");})
  },
  {
    id: 2,
    label: "Current Week",
    onclick: (() => {setDayFilter("Current Week");})
  },
  {
    id: 3,
    label: "Current Month",
    onclick: (() => {setDayFilter("Current Month");})
  },
  {
    id: 4,
    label: "Current Quarter",
    onclick: (() => {setDayFilter("Current Quarter");})
  },
  {
    id: 5,
    label: "Current Year",
    onclick: (() => {setDayFilter("Current Year");})
  },
  {
    id: 6,
    label: "Custom Period",
    onclick: (() => {setDayFilter("Custom Period");})
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

  return (
    <div className="App">
    <div className="main-dashboard">
    <div className="dashboard-container">
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
              submit={'Apply'}
              close={'Reset'}
              policies_label={channels_label}
              surrogates_label={surrogates_label}
              state_label={state_label}
              zonal_label={zonal_label}
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
            {dashboardVal.map((value) => (
              <DashboardCard
                title={value.title}
                value={value.value}
                more={value.more}
                image={value.image}
                boxStyles={value.boxstyles}
                navPath=''
              />
            ))}
          </div>
          <div className="report-cards">
          <div className="graph-card">
             <BarGarph
             currencies={currencies}
             handleChange={handleChange}
             currency={currency}
             options={options}
             series={series}
             graphView={graphView}
             handleGraphView={(value:number)=>setGraphView(value)}
             />
            </div>

            <div className="graph-card">
              <div className="graph-div">
                <div>
                  <text className="overview-text">Surrogate Wise Data </text>
                  <text className="overview-text2">- Current Day</text>
                </div>
                <div className="line-div" />
                <div className="filter-graph-box">
                  <div>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      inputProps={{
                        style: {
                          fontSize: '12px',
                          backgroundColor: '#F3F3F3',
                          paddingTop: '10px',
                          paddingBottom: '10px',
                        },
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="third-header">
                    <div className={'graph-filter-box'}>
                      <div
                        className={graphView === 1 ? 'selectedBox' : 'hour-box'}
                      >
                        <li
                          onClick={() => setGraphView(1)}
                          className={
                            graphView === 1
                              ? 'selected-overview-text3'
                              : 'overview-text3'
                          }
                        >
                          Hour
                        </li>
                      </div>
                      <div className="line2-div" />
                      <div
                        className={graphView === 2 ? 'selectedBox' : 'hour-box'}
                      >
                        <li
                          onClick={() => setGraphView(2)}
                          className={
                            graphView === 2
                              ? 'selected-overview-text3'
                              : 'overview-text3'
                          }
                        >
                          Day
                        </li>
                      </div>
                      <div className="line2-div" />
                      <div
                        className={graphView === 3 ? 'selectedBox' : 'hour-box'}
                      >
                        <li
                          onClick={() => setGraphView(3)}
                          className={
                            graphView === 3
                              ? 'selected-overview-text3'
                              : 'overview-text3'
                          }
                        >
                          Week
                        </li>
                      </div>
                      <div className="line2-div" />
                      <div
                        className={graphView === 4 ? 'selectedBox' : 'hour-box'}
                      >
                        <li
                          onClick={() => setGraphView(4)}
                          className={
                            graphView === 4
                              ? 'selected-overview-text3'
                              : 'overview-text3'
                          }
                        >
                          Month
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-div" id="chart">
                <ReactApexChart options={spineGraphOptions} series={spineGraphSeries} type="area" height={220} />
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className="dashboard-container">
      <div className="heading-text">
      <Typography sx={{color:'black', fontSize:'16px'}}>
        Channel - User
      </Typography>
      </div>
    <div className="divider-line" />
          <div className="horizontal-cards">
            {channelUserData.map((value) => (
              <DashboardCard
                title={value.title}
                value={value.value}
                more={value.more}
                image={value.image}
                viewAll={value.viewAll}
                navPath=''
              />
            ))}
          </div>
    </div>
    <div className="diff-area" />
    <div className="list-data-box">
        <div className="recent-data">
          <text className="recent-data-text">
            Recent {salesDashboardList.length} Data{' '}
          </text>
        </div>
        <div className="line3-div" />
        <TableComp
          rows={salesDashboardList}
          statusRowsHeading={statusRowHeading}
          listRowHeading={listRowHeading}
          flag="dashboard"
          viewPath={''}
        />
      </div>
    </div>
  </div>
  );
}
