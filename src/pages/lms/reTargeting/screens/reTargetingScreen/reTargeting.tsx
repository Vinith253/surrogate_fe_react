import React, { useState } from 'react';
import './style.scss';
import { Typography, Stack, Box, Grid } from '@mui/material';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import SelectDropdown from '../../../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import ChooseCategoryToViewData from '../../../../../components/commonComponent/ChooseCategoryToViewData';
import download_icon from '../../../../../assets/icons/download_icon.svg';
import mail_icon from '../../../../../assets/icons/mail_icon.svg';
import filter_icon from '../../../../../assets/icons/filter.svg';

import TableComp from '../../../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from '../../../../sales/dashboard/dashboard.const';
import { reTargetingText } from './reTargeting.const';
function ReTargeting() {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <Stack className="retargetingMainContainer">
      <Stack className="retargetingcontainer">
        <Grid container spacing={2} className="retargeting-filters-container">
          {reTargetingText?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={3} key={index}>
                <Typography className="retargeting-dropdown-label">
                  {eachItem?.label}
                </Typography>
                <SelectDropdown options={eachItem?.option} />
              </Grid>
            );
          })}
          <Stack
            sx={{
              width: '180px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <Stack sx={{ position: 'absolute', bottom: '20px' }}>
              <Typography className="retargetingmoreFilters">
                {' '}
                More Filters
                <img src={filter_icon} alt="" style={{ padding: '0 15px' }} />
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Box className="retargeting-button-container">
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
                <img src={download_icon} alt="" className="icons" />
                <img src={mail_icon} alt="" className="icons" />
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

export default ReTargeting;
