import React, { useState } from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import DownloadIcon from '../../../assets/icons/download.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import { SalesReportFilterDropdown } from './salesReport.const';
import { Typography, Stack, Box, Grid } from '@mui/material';

function SalesReportList() {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <Stack className="sales-report-list">
      <Stack className="container">
        <Stack className="underline">
          <Stack>
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              Sales Report
            </Typography>
            <Typography variant="subtitle2" className="sub-label">
              Copy a specific link of any channel from here.
            </Typography>
          </Stack>
        </Stack>
        <Grid container spacing={2} className="filters-container">
          {SalesReportFilterDropdown?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="dropdown-label">
                  {eachItem?.label}
                </Typography>
                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
        </Grid>
        <Box className="button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>

      {isFiltered ? (
        <Stack className="container">
          <Stack className="underline">
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              Sales Data
              <Typography className="icons-container">
                <img src={DownloadIcon} alt="" className="icons" />
                <img src={MailIcon} alt="" className="icons" />
              </Typography>
            </Typography>
            <Typography variant="subtitle2" className="sub-label"></Typography>
          </Stack>
          <TableComp
            viewPath="/sales/salesReportDetails"
            rows={salesDashboardList}
            statusRowsHeading={statusRowHeading}
            listRowHeading={listRowHeading}
            flag="sales-report"
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </Stack>
  );
}

export default SalesReportList;
