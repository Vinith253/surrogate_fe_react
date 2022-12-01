import React, { useState } from 'react';
import './style.scss';
import { Typography, Stack, Box, Grid, Button } from '@mui/material';
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
import { colors } from '../../../../../style/Color';
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
            <Button
              sx={{
                position: 'absolute',
                bottom: '20px',
                textTransform: 'capitalize',
              }}
            >
              <Typography className="retargetingmoreFilters">
                More Filters
                <img src={filter_icon} alt="" style={{ padding: '0 15px' }} />
              </Typography>
            </Button>
          </Stack>
        </Grid>
        <Box className="retargeting-button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>

      {isFiltered ? (
        <Stack sx={{ marginBottom: '30px' }}>
          <Stack
            className="retargetingOrgDetails"
            sx={{
              padding: '0 30px',
            }}
          >
            <Stack className="retargetingOrgDetailsHeaderTable">
              <Stack>
                <Typography>Organisation Details</Typography>
              </Stack>
              <Stack>
                <Box>
                  <Button>
                    <img
                      src={download_icon}
                      alt="download_icon"
                      width="70%"
                      height="70%"
                    />
                  </Button>
                  <Button>
                    <img
                      src={mail_icon}
                      alt="mail_icon"
                      width="70%"
                      height="70%"
                    />
                  </Button>
                </Box>
              </Stack>
            </Stack>
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
