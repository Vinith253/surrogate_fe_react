import React, { useState, useEffect } from 'react';

import { Stack, Grid, Box, Typography, FormControl } from '@mui/material';
import Dropdown from '../../../components/commonComponent/Dropdown';
import CheckboxSelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import { PerformanceReportFilterDropdown } from './performanceReport.const';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { CategoryList } from './performanceReport.const';
import './style.scss';

function UserCreationTab() {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <Stack>
      <Stack className="choose-category-container each-container">
        <FormControl fullWidth>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography className="each-field-label">
                Choose category
              </Typography>
              <Dropdown
                data={CategoryList}
                handleChange={() => {
                  console.log('called');
                }}
              />
            </Grid>
          </Grid>
          <Stack className="underline"></Stack>
          <Grid container spacing={2}>
            {PerformanceReportFilterDropdown?.map(
              (eachItem: any, index: number) => {
                return (
                  <Grid item xs={3} key={index}>
                    <Typography className="each-field-label">
                      {eachItem?.label}
                    </Typography>
                    <CheckboxSelectDropdown options={eachItem?.option} />
                  </Grid>
                );
              }
            )}
          </Grid>
          <Box className="button-container">
            <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
            <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
          </Box>
        </FormControl>
      </Stack>
      {isFiltered ? (
        <Stack className="each-container" style={{ margin: '0px' }}>
          <HeaderWithInfo
            header="Branch Details"
            isInfoEnabled={false}
            info=""
            isDownloadEnabled={true}
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </Stack>
  );
}

export default UserCreationTab;
