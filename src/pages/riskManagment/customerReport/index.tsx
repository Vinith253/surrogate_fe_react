
import React, { useState } from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from '../../sales/dashboard/dashboard.const';
import DownloadIcon from '../../../assets/icons/download_icon.svg';
import MailIcon from '../../../assets/icons/mail_icon.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import { Typography, Stack, Box, Grid } from '@mui/material';
import { CustomerReportFilterDropdown } from '../riskManagement.const';

function CustomerReport() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [dayFilterValue, setDayFilter] = useState('Current Day')


  
  return (
    <Stack className="risk-customer-report-list">
      <Stack className="container">
        <Stack className="underline">
          <Stack>
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
                Customer Report
            </Typography>
            <Typography variant="subtitle2" className="sub-label">
                Lorem ipsum dolor sit amet consectetur. Sit.
            </Typography>
          </Stack>
        </Stack>
        <Grid container spacing={2} className="filters-container">
          {CustomerReportFilterDropdown?.map((eachItem: any, index: number) => {
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
            viewPath="/riskManagement/customerDetails"
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

export default CustomerReport;
