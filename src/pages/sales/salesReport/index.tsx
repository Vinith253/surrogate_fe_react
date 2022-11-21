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
    <Stack className="sales-report-list">
      <Stack className="filters-container">
        <Stack className="underline">
          <Stack>
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              Sales Report
            </Typography>
            <Typography variant="subtitle2" className="sub-label">
              Lorem ipusm dolor sit amet, consectetur adipiscing elit.integer
              senectus mattis
            </Typography>
          </Stack>
        </Stack>
        <SelectDropdown data={salesReportFilterDropdown} gridColumn={3} />
      </Stack>
      <TableComp
        viewPath="/sales/salesReportDetails"
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      />
    </Stack>
  );
}

export default SalesReportList;
