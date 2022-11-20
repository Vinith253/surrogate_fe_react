import React from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import { salesReportFilterDropdown } from './salesReport.const';

function SalesReportList() {
  return (
    <div className="sales-report-list">
      <div className="filters-container">
        <SelectDropdown data={salesReportFilterDropdown} />
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
