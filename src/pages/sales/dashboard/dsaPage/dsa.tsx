import ProgressCard from '../../../../components/commonComponent/CommonCard/ProgressCard/ProgressCard';
import DashboardCard from '../../../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard';
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
import TableComp from '../../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  product_label,
  salesDashboardList,
  state_label,
  statusRowHeading,
} from '../dashboard.const';
import BarGarph from '../../../../components/commonComponent/BarGraph/BarGraph';
import { Button, Grid, Typography } from '@mui/material';
import { ReactComponent as Reset } from '../../../../assets/icons/reset.svg';
import DateTimePopOver from '../../../../components/commonComponent/DateTimePopOver';
import CheckBoxPopOver from '../../../../components/commonComponent/CheckBoxPopOver/SingleLabel';
import MuliLabelPopOver from '../../../../components/commonComponent/CheckBoxPopOver/MultipleLabel';
import MoreFilterModal from '../../../../components/commonComponent/customModal/MoreFilterModal';

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
      value: '98.6 %',
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
      more: false,
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
      navPath: '/sales/salesReport',
    },
    {
      index: 2,
      title: 'Approval #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: ApprovedIcon,
      navPath: '/sales/salesReport',
    },
    {
      index: 3,
      title: 'Dropped #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Dropped,
      navPath: '/sales/salesReport',
    },
    {
      index: 4,
      title: 'Rejected #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Rejected,
      navPath: '/sales/salesReport',
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

  return (
    <>
      <div className="dsa-data-container">
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
              <MuliLabelPopOver
                surrogates_label={policies_label}
                displayText={'All Policies'}
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
                policies_label={policies_label}
                surrogates_label={surrogates_label}
                state_label={state_label}
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
              <Grid xs={3} item>
              <DashboardCard
                title={value.title}
                value={value.value}
                more={value.more}
                image={value.image}
                navPath="/sales/salesReport"
              />
              </Grid>
            ))}
            </Grid>
          </div>

          <div className="report-cards">
            <div className="progress-card">
              {progressValue?.map((value) => (
                <ProgressCard
                  index={value.index}
                  title={value.title}
                  value={value.value}
                  lastPeriodValue={value.lastPeriodValue}
                  lastYearValue={value.lastYearValue}
                  image={value.image}
                  navPath={value.navPath}
                />
              ))}
            </div>
            <div className="graph-card">
              <BarGarph
                currencies={currencies}
                handleChange={handleChange}
                currency={currency}
                options={options}
                series={series}
                graphView={graphView}
                handleGraphView={(value: number) => setGraphView(value)}
              />
            </div>
          </div>
        </>
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
          viewPath="/sales/salesReportDetails"
        />
      </div>
    </>
  );
}
