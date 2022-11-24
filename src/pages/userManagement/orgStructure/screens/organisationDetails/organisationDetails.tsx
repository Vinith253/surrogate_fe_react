import {
  Box,
  Button,
  IconButton,
  Typography,
  ToggleButton,
  Stack,
  InputBase,
  styled,
  Checkbox,
} from '@mui/material';
import React, { useState } from 'react';
import { colors } from '../../../../../style/Color';
import './style.scss';
import plus from '../../../../../assets/icons/plusIcon.svg';
import Info_Icon from '../../../../../assets/images/info_icon.svg';
import CheckboxSelectDropdown from '../../../../../components/commonComponent/CheckboxSelectDropdown';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import download_icon from '../../../../../assets/icons/download_icon.svg';
import mail_icon from '../../../../../assets/icons/mail_icon.svg';
import active_icon from '../../../../../assets/icons/active.svg';
import DeActive_icon from '../../../../../assets/icons/DeActive.svg';
import SearchIcon from '@mui/icons-material/Search';
import StackButton from '../../../../../components/commonComponent/StackButton/stackButton';
import ListTable from '../../../../../components/commonComponent/commonListTable/commonListTable';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import { checkTagStatus } from '../../../../../utils/tagBasedIndicator/tagStatus';

export const organisationFilterDropdown: salesReportFilterInterface[] = [
  {
    label: 'Org Type',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Org Status',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
  {
    label: 'Surrogate',
    option: [
      { value: 'tamilnadu', name: 'Tamilnadu' },
      { value: 'andra', name: 'Andhra' },
      { value: 'telungana', name: 'Telungana' },
      { value: 'karnataka', name: 'Karnataka' },
      { value: 'kerala', name: 'Kerala' },
    ],
  },
];

export interface salesReportFilterInterface {
  label?: string;
  option?: Array<object>;
}

export const stackButtonData = [
  {
    title: 'All',
  },
  {
    title: 'Activate',
  },
  {
    title: 'Deactivated',
  },
  {
    title: 'Saved',
  },
];

export const OrganisationDetails = () => {
  const [selected, setSelected] = React.useState<number[]>([]);
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const isSelected = (id: number) => {
    const res = selected.indexOf(id);
    if ((res && res !== -1) || res === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleClickCheckbox = (id: number) => {
    const result = isSelected(id);
    let selectedData = selected;
    if (result) {
      const index = selected.indexOf(id);
      selectedData.splice(index, 1);
      setSelected([...selectedData]);
    } else {
      setSelected([...selectedData, id]);
    }
  };
  const data = [
    {
      id: 1,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Active',
    },
    {
      id: 2,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Deactivated',
    },
    {
      id: 3,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Saved',
    },
    {
      id: 4,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Active',
    },
    {
      id: 5,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Saved',
    },
    {
      id: 6,
      orgId: '#12345',
      orgName: 'EFG',
      orgType: 'DSA',
      startDate: '22/2/2022',
      state: 'Telungana',
      status: 'Active',
    },
  ];

  const column = [
    {
      title: '',
      dataIndex: 'id',
      key: 'checkBox',
      width: '70px',
      headerRender: () => {
        return (
          <Checkbox
            color={'secondary'}
            indeterminate={selected.length > 0 && selected.length < data.length}
            checked={data.length > 0 && selected.length === data.length}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        );
      },
      render: (_: string, row: any, index: number) => {
        const isItemSelected = isSelected(row.id);
        console.log('isItemSelected', isItemSelected);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <Checkbox
            color={'secondary'}
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
            onChange={() => handleClickCheckbox(row.id)}
          />
        );
      },
    },
    {
      title: 'Org.ID',
      dataIndex: 'orgId',
      key: 'orgId',
      headerRender: (text: string) => {
        return (
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <>{text}</>
            <IconButton>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
      render: (text: string) => {
        return <div>{text}</div>;
      },
    },
    {
      title: 'Org.Name',
      dataIndex: 'orgName',
      key: 'orgName',
    },
    { title: 'Org.Type', dataIndex: 'orgType', key: 'orgType' },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
    { title: 'State', dataIndex: 'state', key: 'state' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      headerRender: (text: string) => {
        return (
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <>{text}</>
            <IconButton>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
      render: (text: string) => {
        return (
          <Stack
            sx={{
              color: text ? checkTagStatus(text).color : '',
            }}
          >
            {text}
          </Stack>
        );
      },
    },
    {
      title: 'More',
      dataIndex: 'id',
      key: 'more',
      render: () => {
        return (
          <Stack>
            <MoreVertIcon />
          </Stack>
        );
      },
    },
  ];
  return (
    <Box className="organisationContainer">
      <Box className="organisationHeader">
        <Box>
          <Typography className="organizationTitle">
            Organisation Details
          </Typography>
          <Typography className="organizationPara">
            Manage all organisations in the system from here.
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" className="organizationBtn">
            <IconButton className="icon">
              <img src={plus} alt="resumeIcon" />
            </IconButton>
            Add Organisation
          </Button>
        </Box>
      </Box>

      <Box className="organisationListHeader">
        <Box className="organisationList">
          <Box
            className="organisationContent"
            sx={{
              borderBottom: `2px solid ${colors.lightGrey}`,
              paddingBottom: '12px',
            }}
          >
            <Typography className="organizationTitle">
              Organisation List
            </Typography>
            <img className="Info-Icon" src={Info_Icon} alt="" />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '400',
              }}
              color="textSecondary"
            >
              Filter by org type/state/status/surrogate from here.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className="organisation-checkbox-select-dropdown">
            {organisationFilterDropdown?.map((eachItem: any, index: number) => {
              return (
                <Box key={index} className="select-dropdown">
                  <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                    {eachItem?.label}
                  </Typography>
                  <CheckboxSelectDropdown options={eachItem?.option} />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="organisationResetBtn">
          <BtnOutlined title="Reset" />
          <BtnContained title="Search" />
        </Box>
      </Box>

      <Box className="organisationTableContainer">
        <Stack
          className="organisationHeaderContainer"
          sx={{
            borderBottom: `2px solid ${colors.lightGrey}`,
            paddingBottom: '12px',
          }}
        >
          <Stack className="organisationHeaderTable">
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

        <Stack className="tableNavbar">
          <Stack
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              width: '30%',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: '0px 10px',
                fontSize: '14px',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
                letterSpacing: '0.0025em',
              }}
            >
              <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                <img src={active_icon} alt="resumeIcon" />
              </IconButton>
              Active Org
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: '0px 10px',
                fontSize: '14px',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
                letterSpacing: '0.0025em',
                marginLeft: '15px',
              }}
            >
              <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                <img src={DeActive_icon} alt="resumeIcon" />
              </IconButton>
              Deactivate Org
            </Button>
          </Stack>
          <Box className="organisation-search-container">
            <Box className="organisation-search-box">
              <SearchIcon className="organisation-search-icon" />
              <InputBase placeholder="Search" />
            </Box>
            <Box>
              <StackButton data={stackButtonData} />
            </Box>
          </Box>
        </Stack>

        <Stack>
          <ListTable column={column} data={data} />
        </Stack>
      </Box>
    </Box>
  );
};
