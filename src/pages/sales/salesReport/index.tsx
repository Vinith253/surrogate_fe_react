import React from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import SalesReportNodata from '../../../assets/images/sales-report-no-data.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import { salesReportFilterDropdown } from './salesReport.const';

import { Typography, Stack, Box, Grid } from '@mui/material';

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
        <Grid container spacing={2} className="checkbox-select-dropdown">
          {salesReportFilterDropdown?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography>{eachItem?.label}</Typography>
                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>
        <Box className="button-container">
          <BtnOutlined title="Reset" />
          <BtnContained title="Search" />
        </Box>
      </Stack>
      <Stack className="no-data-container">
        <img src={SalesReportNodata} className="no-data-img" />
        <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
          Choose a preferred category to view more data/options
        </Typography>
      </Stack>

      {/* <TableComp
        viewPath="/sales/salesReportDetails"
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      /> */}
    </Stack>
  );
}

export default SalesReportList;
