import React from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import { Button } from '@mui/material';

function SalesReportList(props: any) {
  return (
    <div className="sales-report-list">
      <Button
        onClick={() =>
          props?.history?.push(`${props.match?.path}/newOrganisationReport`)
        }
      >
        click
      </Button>
      <TableComp
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      />
    </div>
  );
}

export default SalesReportList;
