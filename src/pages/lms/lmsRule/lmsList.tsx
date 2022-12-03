import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Box, Stack, InputBase, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import SearchIcon from '@mui/icons-material/Search';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import { product_label } from './lmsRule.const';
import CustomIconButton from '../../../components/commonComponent/CustomIconButton';
import GroupButton from '../../../components/commonComponent/GroupButton/GroupButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import deActiveIcon from '../../../assets/icons/DeActive.svg';
import ListLMSTable from '../../../components/commonComponent/listLmstable/listlmsTable';
import Popover from '../../../components/commonComponent/Popover';
import './style.scss';

export const retargetingData = [
  {
    id: '1',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Approved',
    more: <MoreVertIcon />,
  },
  {
    id: '2',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Rejected',
    more: <MoreVertIcon />,
  },
  {
    id: '3',
    application: '#12345',
    customerName: 'Ashwin',
    mobileNumber: '1234567891',
    cibil: '123',
    income: '1500000',
    status: 'Dropped',
    more: <MoreVertIcon />,
  },
];

const column1: any = [
  {
    title: '',
    dataIndex: 'id',
    key: 'checkBox',
    width: '70px',
    headerRender: () => {
      return <Checkbox />;
    },
    render: (_: string, row: any, index: number) => {
      return <Checkbox />;
    },
  },
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
    title: 'Application#',
    dataIndex: 'application',
    key: 'application',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  { title: 'Mobile Number', dataIndex: 'mobileNumber', key: 'mobileNumber' },
  { title: 'CIBIL', dataIndex: 'cibil', key: 'cibil' },
  { title: 'Income', dataIndex: 'income', key: 'income' },
];

const column2: any = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'more',
    key: 'more',
  },
];

function LMSRuleTab() {
  const [isAddRulePopoverOpen, setIsAddRulePopoverOpen] =
    React.useState<HTMLButtonElement | null>(null);

  const openAddUserPopover = Boolean(isAddRulePopoverOpen);
  const addNewUserid = openAddUserPopover ? 'simple-popover' : undefined;

  const GroupButtonData = [
    {
      title: 'All',
    },
    {
      title: 'Active',
    },
    {
      title: 'Saved',
    },
    {
      title: 'Closed',
    },
  ];

  const customIconBtns = [
    { label: 'Resume Rule', icon: deActiveIcon, isDisabled: true },
    {
      label: 'Pause Rule',
      icon: deActiveIcon,
      isDisabled: true,
    },
    {
      label: 'Edit Scheduled Pause',
      icon: deActiveIcon,
      isDisabled: true,
    },
  ];

  const createUserMenu = [
    {
      label: 'Create New LMS Rule',
      routePath: '/lms/lmsRule/addNewRule',
    },
    {
      label: 'Duplicate LMS Rule',
      routePath: '',
    },
  ];

  const handleOpenAddRulePopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsAddRulePopoverOpen(event.currentTarget);
  };

  const closeAddUserPopover = () => {
    setIsAddRulePopoverOpen(null);
  };

  const onClickButton = (eachBtn: any) => {
    // console.log(eachBtn);
  };

  const toggleOptions = [
    { title: 'All' },
    { title: 'Approved' },
    { title: 'In-Progress' },
    { title: 'Rejected' },
    { title: 'Dropped' },
  ];

  return (
    <Stack>
      <Box className="lms-header-container">
        <ScreenHeader
          title="LMS Rule"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />

        <Button
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          id="basic-button"
          onClick={handleOpenAddRulePopover}
        >
          Create New
        </Button>
        {openAddUserPopover && (
          <Popover
            id={addNewUserid}
            open={openAddUserPopover}
            anchorEl={isAddRulePopoverOpen}
            handleClose={closeAddUserPopover}
            options={createUserMenu}
          />
        )}
      </Box>
      <Stack className="lms-container">
        <HeaderWithInfo
          header="Branch Details"
          isInfoEnabled={false}
          info=""
          isDownloadEnabled={true}
        />
        <Box style={{ marginTop: '20px', display: 'flex' }}>
          {customIconBtns?.map((eachBtn: any) => {
            return (
              <CustomIconButton
                data={eachBtn}
                onClick={() => onClickButton(eachBtn)}
              />
            );
          })}
          <Stack className="lms-list-table-search-filters">
            <Box className="search-container">
              <Box className="search-box">
                <SearchIcon className="search-icon" />
                <InputBase placeholder="Search" />
              </Box>
              <Box>
                <GroupButton data={GroupButtonData} />
              </Box>
            </Box>
          </Stack>
        </Box>
        <ListLMSTable
          data={retargetingData}
          listColumn={column1}
          statusColumn={column2}
          flag="retargeting"
          label={product_label}
          toggleOptions={toggleOptions}
        />
      </Stack>
      {/* <DuplicateRoleModal
        openSuccess={duplicateRole}
        handleClose={() => {
          openDulicateRole(false);
          handleCardMenuClose();
        }}
        btn={'Next'}
        handleCloseSuccess={handleDuplicateNext}
        data={duplicate_role}
      /> */}
    </Stack>
  );
}

export default LMSRuleTab;
