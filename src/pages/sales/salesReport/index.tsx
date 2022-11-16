import React from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import CurrentDayFilter from '../../../components/commonComponent/Filters/currentDay';

function SalesReportList() {
  return (
    <div className="sales-report-list">
      <div className="filters-container">
        <div>Sales Report</div>
        {/* <CurrentDayFilter /> */}
      </div>
      <TableComp
        viewPath="/sales/salesReportDetails"
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      />
    </div>
  );
}

export default SalesReportList;
