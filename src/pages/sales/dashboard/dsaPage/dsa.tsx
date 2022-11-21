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
  filterHeaderData,
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from '../dashboard.const';
import FilterButton from '../../../../components/commonComponent/FilterHeader/FilterButton';
import BarGarph from '../../../../components/commonComponent/BarGraph/BarGraph';

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
      navPath:'/sales/salesReport'
    },
    {
      index: 2,
      title: 'Approval #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: ApprovedIcon,
      navPath:'/sales/salesReport'
    },
    {
      index: 3,
      title: 'Dropped #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Dropped,
      navPath:'/sales/salesReport'
    },
    {
      index: 4,
      title: 'Rejected #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Rejected,
      navPath:'/sales/salesReport'
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
    <>
      <div className="dsa-data-container">
        <div>
          <FilterButton filterHeaderData={filterHeaderData} />
          <div className="divider-line" />
          <div className="horizontal-cards">
            {dashboardVal?.map((value) => (
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
              handleGraphView={(value:number)=>setGraphView(value)}
              />
            </div>
          </div>
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
          viewPath="/sales/salesDashboard"
        />
      </div>
    </>
  );
}
