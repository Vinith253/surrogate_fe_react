import React, { useState, useEffect } from 'react';

import { Stack, Grid, Box, Typography, FormControl } from '@mui/material';
import Dropdown from '../../../components/commonComponent/Dropdown';
import CheckboxSelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import PerformanceReportTable from '../../../components/commonComponent/LeftColumnFixedTable';
import {
  DSAOrBranchWiseFilterDropdown,
  StateOrZoneWiseFilterDropdown,
  DistrictWiseFilterDropdown,
  ExecutiveWiseFilterDropdown,
  LeadWiseFilterDropdown,
  DSAWiseReportListFirstColumn,
  DSAWiseReportListSecondColumn,
  PerformanceReportListData,
  StateWiseReportListSecondColumn,
  ZonalWiseReportListSecondColumn,
  DistrictWiseReportListSecondColumn,
  BranchWiseReportListSecondColumn,
  LeadWiseReportListSecondColumn,
  ExecutiveWiseReportListSecondColumn,
} from './performanceReport.const';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { CategoryList } from './performanceReport.const';
import './style.scss';

function BankPerformanceReport() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('State Wise');

  const firstColumn = DSAWiseReportListFirstColumn;
  const secondColumn =
    selectedCategory === 'State Wise'
      ? StateWiseReportListSecondColumn
      : selectedCategory === 'Zonal Wise'
      ? ZonalWiseReportListSecondColumn
      : selectedCategory === 'District Wise'
      ? DistrictWiseReportListSecondColumn
      : selectedCategory === 'Branch Wise'
      ? BranchWiseReportListSecondColumn
      : selectedCategory === 'Lead Wise'
      ? LeadWiseReportListSecondColumn
      : selectedCategory === 'Executive Wise'
      ? ExecutiveWiseReportListSecondColumn
      : DSAWiseReportListSecondColumn;

  const DropdownOptions =
    selectedCategory === 'State Wise' || selectedCategory === 'Zonal Wise'
      ? StateOrZoneWiseFilterDropdown
      : selectedCategory === 'District Wise'
      ? DistrictWiseFilterDropdown
      : selectedCategory === 'Lead Wise'
      ? LeadWiseFilterDropdown
      : selectedCategory === 'Executive Wise'
      ? ExecutiveWiseFilterDropdown
      : DSAOrBranchWiseFilterDropdown;

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
                selectedValue={selectedCategory}
                data={CategoryList}
                onSelect={(event: any) => {
                  setSelectedCategory(event.target.value);
                  setIsFiltered(false);
                }}
              />
            </Grid>
          </Grid>
          <Stack className="underline"></Stack>
          <Grid container spacing={2}>
            {DropdownOptions?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={3} key={index}>
                  <Typography className="each-field-label">
                    {eachItem?.label}
                  </Typography>
                  <CheckboxSelectDropdown options={eachItem?.option} />
                </Grid>
              );
            })}
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
            header={`Bank Data - ${selectedCategory} Performance Report`}
            isInfoEnabled={false}
            info=""
            isDownloadEnabled={true}
          />
          <PerformanceReportTable
            data={PerformanceReportListData}
            listColumn={firstColumn}
            statusColumn={secondColumn}
            flag="performance-report"
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </Stack>
  );
}

export default BankPerformanceReport;
