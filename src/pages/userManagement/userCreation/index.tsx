import React, { useState, useEffect } from 'react';
import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import UserCreationTab from './userCreationTab';
import {
  Typography,
  Stack,
  Box,
  Checkbox,
  IconButton,
  InputBase,
  Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import GroupButton from '../../../components/commonComponent/GroupButton/GroupButton';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import { UserCreationFilterDropdown } from './userCreation.const';
import activeIcon from '../../../assets/icons/active.svg';
import UnfoldMoreIcon from '../../../assets/icons/sortArrow.svg';
import deActiveIcon from '../../../assets/icons/DeActive.svg';
import CustomIconButton from '../../../components/commonComponent/CustomIconButton';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import ListTable from '../../../components/commonComponent/commonListTable/commonListTable';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { checkTagStatus } from '../../../utils/tagBasedIndicator/tagStatus';
import Popover from '../../../components/commonComponent/Popover';
import ActionModal from '../../../components/commonComponent/customModal/CustomModal';
import SuccessModal from '../../../components/commonComponent/customModal/CustomModal';
import './style.scss';

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
    orgId: '#65789',
    orgName: 'EFG',
    orgType: 'DSA',
    startDate: '22/2/2022',
    state: 'Telungana',
    status: 'Deactivated',
  },
  {
    id: 3,
    orgId: '#90987',
    orgName: 'EFG',
    orgType: 'DSA',
    startDate: '22/2/2022',
    state: 'Telungana',
    status: 'Saved',
  },
  {
    id: 4,
    orgId: '#87654',
    orgName: 'EFG',
    orgType: 'DSA',
    startDate: '22/2/2022',
    state: 'Telungana',
    status: 'Active',
  },
  {
    id: 5,
    orgId: '#76523',
    orgName: 'EFG',
    orgType: 'DSA',
    startDate: '22/2/2022',
    state: 'Telungana',
    status: 'Saved',
  },
  {
    id: 6,
    orgId: '#89654',
    orgName: 'EFG',
    orgType: 'DSA',
    startDate: '22/2/2022',
    state: 'Telungana',
    status: 'Active',
  },
];

function UserCreation() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [selected, setSelected] = React.useState<number[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortingData, setSortingData] = useState(data);
  const [idSorting, setIdSorting] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userListMoreMenu = [
    { label: 'View', routePath: '' },
    { label: 'Edit', routePath: '' },
    { label: 'Activate User', routePath: '' },
    { label: 'Deactivate User', routePath: '' },
  ];

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const openActionModal = (record: any) => {
    console.log('record', record);
    setSelectedRecord(record);
    setActionModalOpen(true);
  };

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

  const handleSortByName = () => {
    setAscending(!ascending);
  };

  const handleSortById = () => {
    setIdSorting(!idSorting);
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

  const TabListData: dataList = [
    {
      id: '1',
      data: 'User Creation',
      component: <UserCreationTab />,
      isDisabled: false,
    },
    {
      id: '2',
      data: 'History Log',
      component: <UserCreationTab />,
      isDisabled: true,
    },
  ];

  const filterData = () => {
    const sort = sortingData.sort((a: any, b: any) => {
      if (ascending) {
        return a.status < b.status ? -1 : 1;
      }
      return a.status > b.status ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  const idFilterData = () => {
    const sort = sortingData.sort((a: any, b: any) => {
      if (idSorting) {
        return a.orgId < b.orgId ? -1 : 1;
      }
      return a.orgId > b.orgId ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  useEffect(() => {
    filterData();
  }, [ascending]);

  useEffect(() => {
    idFilterData();
  }, [idSorting]);

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
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'Employee ID',
      dataIndex: 'empId',
      key: 'empId',
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
            <IconButton onClick={() => handleSortById()}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    { title: 'Mobile Number', dataIndex: 'mobilenumber', key: 'mobilenumber' },
    { title: 'Email ID', dataIndex: 'emailId', key: 'emailId' },
    { title: 'State', dataIndex: 'state', key: 'state' },
    { title: 'Zonal', dataIndex: 'zonal', key: 'zonal' },
    {
      title: 'Reporting Head',
      dataIndex: 'reportingHead',
      key: 'reportingHead',
    },
    { title: 'User Role', dataIndex: 'userRole', key: 'userRole' },
    { title: 'Branch', dataIndex: 'branch', key: 'branch' },
    { title: 'Designation', dataIndex: 'designation', key: 'designation' },
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
            <IconButton onClick={() => handleSortByName()}>
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
      dataIndex: 'status',
      key: 'more',
      render: (_: string, row: any, index: number) => {
        return (
          <Stack className="more-btn">
            <MoreVertIcon
              onClick={(event: any) => {
                handleClick(event);
              }}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
              options={userListMoreMenu}
              openActionModal={() => openActionModal(row)}
            />
          </Stack>
        );
      },
    },
  ];

  const GroupButtonData = [
    {
      title: 'All',
    },
    {
      title: 'Active',
    },
    {
      title: 'Deactivated',
    },
  ];

  const customIconBtns = [
    { label: 'Activate User', icon: activeIcon, isDisabled: false },
    {
      label: 'Deactivate User',
      icon: deActiveIcon,
      isDisabled: true,
    },
  ];

  const onClickButton = (eachBtn: any) => {
    // console.log(eachBtn);
  };

  const handleSubmit = () => {
    setSuccessModalOpen(true);
  };

  return (
    <div className="user-creation-main-container">
      <TabBar data={TabListData} />
      <Stack className="container">
        <HeaderWithInfo
          isInfoEnabled={true}
          isDownloadEnabled={false}
          header="User List"
          info="From here, you filter the card by its mode, status, category, and surrogate."
        />
        <Grid container spacing={2} className="filters-container">
          {UserCreationFilterDropdown?.map((eachItem: any, index: number) => {
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

            <Stack className="table-search-filters">
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

          <Stack>
            <ListTable column={column} data={sortingData} />
          </Stack>
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )}

      <ActionModal
        openSuccess={isActionModalOpen}
        handleCloseSuccess={() => setActionModalOpen(false)}
        handleSuccess={handleSubmit}
        title={'Request for Activation'}
        pause_content={'Do you want to submit request for activating user?'}
        close={'Close'}
        submit={'Submit'}
      />

      <SuccessModal
        openSuccess={isSuccessModalOpen}
        handleCloseSuccess={() => setSuccessModalOpen(false)}
        successModalTitle={'Request - Activate User'}
        successModalMsg={
          'Your request for activating user is successfully sent to the Reviewer.'
        }
        btn={' Close'}
      />
    </div>
  );
}

export default UserCreation;
