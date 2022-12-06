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
} from './performanceReport.const';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { CategoryList } from './performanceReport.const';
import './style.scss';

function BankPerformanceReport() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('State Wise');

  const column1: any = [
    {
      title: 'Branch Count',
      dataIndex: 'branchCount',
      key: 'branchCount',
    },
    {
      title: 'Total Applicationts',
      dataIndex: 'totalApplications',
      key: 'totalApplications',
    },
    {
      title: 'Approval Rate (%)',
      dataIndex: 'approvalRate',
      key: 'approvalRate',
    },
    {
      title: 'Acquired Customers',
      dataIndex: 'acquiredCustomers',
      key: 'acquiredCustomers',
    },
    {
      title: 'Rejected Applications',
      dataIndex: 'rejectedApplications',
      key: 'rejectedApplications',
    },
  ];

  const column2: any = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'State Head',
      dataIndex: 'stateHead',
      key: 'stateHead',
    },
  ];

  const LMSListData = [
    {
      id: '1',
      state: 'Tamilnadu',
      stateHead: 'Ashwin',
      branchCount: '32',
      totalApplications: '5000',
      approvalRate: '40%',
      acquiredCustomers: '2000',
      rejectedApplications: '2000',
    },
    {
      id: '2',
      state: 'Karnataka',
      stateHead: 'Ashwin',
      branchCount: '20',
      totalApplications: '5000',
      approvalRate: '40%',
      acquiredCustomers: '1000',
      rejectedApplications: '800',
    },
    {
      id: '3',
      state: 'U.Pradesh',
      stateHead: 'Ashwin',
      branchCount: '12',
      totalApplications: '3000',
      approvalRate: '40%',
      acquiredCustomers: '2000',
      rejectedApplications: '500',
    },
  ];

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
            header={`DSA Data - ${selectedCategory} Performance Report`}
            isInfoEnabled={false}
            info=""
            isDownloadEnabled={true}
          />
          <PerformanceReportTable
            data={LMSListData}
            listColumn={column1}
            statusColumn={column2}
            flag="performance-report"
            // label={product_label}
            // toggleOptions={toggleOptions}
          />
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}
    </Stack>
  );
}

export default BankPerformanceReport;
