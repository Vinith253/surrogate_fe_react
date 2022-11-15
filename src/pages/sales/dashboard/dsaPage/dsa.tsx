import { TextField } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import ProgressCard from '../../../../components/commonComponent/Sales/ProgressCard/ProgressCard';
import DashboardCard from '../../../../components/commonComponent/Sales/SalesDashbaordCard/DashboardCard';
import FilterButton from '../../../../components/commonComponent/Sales/SalesFilter/FilterButton';
import ApprovalRate from '../../../../assets/icons/approval_rate_icon.svg';
import TotalApplications from '../../../../assets/icons/total_application_icon.svg';
import Comparisions from '../../../../assets/icons/comparision_icon.svg';
import VirtualCard from '../../../../assets/icons/virtual_card_icon.svg';
import ApprovedIcon from '../../../../assets/icons/approved_icon.svg';
import Dropped from '../../../../assets/icons/dropped_icon.svg';
import InProgress from '../../../../assets/icons/in_progress_icon.svg';
import Rejected from '../../../../assets/icons/rejected_icon.svg';
import '../dashboard.scss';
import { useState } from 'react';

interface IStatus {
  label: string;
  value: number;
}

export default function DsaPage() {
  const currencies: IStatus[] = [
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
      title: 'Total Applications',
      value: 3500,
      more: true,
      image: TotalApplications,
    },
    {
      index: 2,
      title: 'Approval Rate (%)',
      value: 98.6,
      more: false,
      image: ApprovalRate,
    },
    {
      index: 3,
      title: 'Comparision %(With Previous periods)',
      value: 26,
      more: false,
      image: Comparisions,
    },
    {
      index: 4,
      title: 'Virtual Card Issued',
      value: 345,
      more: true,
      image: VirtualCard,
    },
  ];

  const progressValue = [
    {
      index: 1,
      title: 'In Progress #',
      value: 3500,
      lastPeriodValue: 0,
      lastYearValue: 0,
      image: InProgress,
    },
    {
      index: 2,
      title: 'Approval #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: ApprovedIcon,
    },
    {
      index: 3,
      title: 'Dropped #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Dropped,
    },
    {
      index: 4,
      title: 'Rejected #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Rejected,
    },
  ];

  const [graphView, setGraphView] = useState<number>(1);
  const [currency, setCurrency] = useState<number>(1);

  const handleChange = (event: any) => {
    setCurrency(event.target.value);
  };

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

  return (
    <div>
      <FilterButton />
      <div className="divider-line" />
      <div className="horizontal-cards">
        {dashboardVal.map((value) => (
          <DashboardCard
            title={value.title}
            value={value.value}
            more={value.more}
            image={value.image}
          />
        ))}
      </div>

      <div className="report-cards">
        <div className="progress-card">
          {progressValue.map((value) => (
            <ProgressCard
              index={value.index}
              title={value.title}
              value={value.value}
              lastPeriodValue={value.lastPeriodValue}
              lastYearValue={value.lastYearValue}
              image={value.image}
            />
          ))}
        </div>
        <div className="graph-card">
          <div className="graph-div">
            <div>
              <text className="overview-text">Sales Data </text>
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
                      backgroundColor: 'lightgrey',
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
                <div className={'hour-box'}>
                  <li
                    onClick={() => setGraphView(1)}
                    className={
                      graphView == 1
                        ? 'selected-overview-text3'
                        : 'overview-text3'
                    }
                  >
                    Hour
                  </li>
                  <div className="line2-div" />
                  <li
                    onClick={() => setGraphView(2)}
                    className={
                      graphView == 2
                        ? 'selected-overview-text3'
                        : 'overview-text3'
                    }
                  >
                    Day
                  </li>
                  <div className="line2-div" />
                  <li
                    onClick={() => setGraphView(3)}
                    className={
                      graphView == 3
                        ? 'selected-overview-text3'
                        : 'overview-text3'
                    }
                  >
                    Week
                  </li>
                  <div className="line2-div" />
                  <li
                    onClick={() => setGraphView(4)}
                    className={
                      graphView == 4
                        ? 'selected-overview-text3'
                        : 'overview-text3'
                    }
                  >
                    Month
                  </li>
                </div>
              </div>
            </div>
            <div className="line-div" id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={220}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
