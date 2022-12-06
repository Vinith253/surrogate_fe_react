import React, { useState } from 'react';
import './style.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './../dashboard/dashboard.const';
import DownloadIcon from '../../../assets/icons/download_icon.svg';
import MailIcon from '../../../assets/icons/mail_icon.svg';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import { SalesReportFilterDropdown } from './salesReport.const';
import { Typography, Stack, Box, Grid } from '@mui/material';

function SalesReportList() {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <Stack className="sales-report-list">
      <Stack className="container">
        <ScreenHeader
          title="Sales Report"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />
        <Stack className="underline"></Stack>
        <Grid container spacing={2}>
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
          <HeaderWithInfo
            header="Sales Data"
            isInfoEnabled={false}
            info=""
            isDownloadEnabled={true}
          />
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
