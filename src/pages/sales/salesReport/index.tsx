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
import { Typography, Stack } from '@mui/material';

function SalesReportList() {
  return (
    <div className="sales-report-list">
      <div className="filters-container">
        <Typography>Sales Report</Typography>
        <Stack className="info-label">
          Lorem ipusm dolor sit amet, consectetur adipiscing elit.integer
          senectus mattis
        </Stack>
        <div className="underline"></div>
        <SelectDropdown data={salesReportFilterDropdown} gridColumn={3} />
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
