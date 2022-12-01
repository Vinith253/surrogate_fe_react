import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import {
  Box,
  Stack,
  Grid,
  TextField,
  Typography,
  InputBase,
  Checkbox,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import SearchIcon from '@mui/icons-material/Search';
import ActionModal from '../../../components/commonComponent/customModal/CustomModal';
import SuccessModal from '../../../components/commonComponent/customModal/CustomModal';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import SelectDropdown from '../../../components/commonComponent/CheckboxSelectDropdown';
import BtnContained from '../../../components/commonComponent/CustomText/Button/Contained';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { UserCreationFilterDropdown } from './userCreation.const';
import CustomIconButton from '../../../components/commonComponent/CustomIconButton';
import ListTable from '../../../components/commonComponent/commonListTable/commonListTable';
import GroupButton from '../../../components/commonComponent/GroupButton/GroupButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import activeIcon from '../../../assets/icons/active.svg';
import UnfoldMoreIcon from '../../../assets/icons/sortArrow.svg';
import deActiveIcon from '../../../assets/icons/DeActive.svg';
import { checkTagStatus } from '../../../utils/tagBasedIndicator/tagStatus';
import Popover from '../../../components/commonComponent/Popover';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import './style.scss';

const data = [
  {
    id: 1,
    empId: '#12345',
    name: 'EFG',
    mobileNumber: '878979879',
    emailId: 'abc',
    state: 'Telungana',
    zonal: 'Telungana',
    status: 'Active',
  },
  {
    id: 2,
    empId: '#65789',
    name: 'EFG',
    mobileNumber: '878979999',
    emailId: 'abc',
    state: 'Telungana',
    zonal: 'Telungana',
    status: 'Deactivated',
  },
];

function UserCreationTab() {
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
  const [isAddUserPopoverOpen, setIsAddUserPopoverOpen] =
    React.useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const openAddUserPopover = Boolean(isAddUserPopoverOpen);
  const addNewUserid = openAddUserPopover ? 'simple-popover' : undefined;

  const userListMoreMenu = [
    { label: 'View', routePath: '/userManagement/userCreation/viewUser' },
    { label: 'Edit', routePath: '/userManagement/userCreation/editUser' },
    { label: 'Activate User', routePath: '' },
    { label: 'Deactivate User', routePath: '' },
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
    { title: 'Mobile Number', dataIndex: 'mobileNumber', key: 'mobileNumber' },
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

  const createUserMenu = [
    {
      label: 'Single User Upload',
      routePath: '/userManagement/userCreation/createUser',
    },
    {
      label: 'Bulk User Upload',
      routePath: '/userManagement/userCreation/bulkUpload',
    },
  ];

  useEffect(() => {
    filterData();
  }, [ascending]);

  useEffect(() => {
    idFilterData();
  }, [idSorting]);

  const handleOpenAddUserPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsAddUserPopoverOpen(event.currentTarget);
  };

  const closeAddUserPopover = () => {
    setIsAddUserPopoverOpen(null);
  };

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

  const handleSubmit = () => {
    setActionModalOpen(false);
    setSuccessModalOpen(true);
  };

  const showSuceesModal = () => {
    setAnchorEl(null);
    setSuccessModalOpen(false);
  };

  const openActionModal = (record: any) => {
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickButton = (eachBtn: any) => {
    // console.log(eachBtn);
  };

  return (
    <Stack>
      <Box className="user-header-container">
        <ScreenHeader
          title="Create User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />

        <Button
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          id="basic-button"
          onClick={handleOpenAddUserPopover}
        >
          Add New User
        </Button>
        {openAddUserPopover && (
          <Popover
            id={addNewUserid}
            open={openAddUserPopover}
            anchorEl={isAddUserPopoverOpen}
            handleClose={closeAddUserPopover}
            options={createUserMenu}
          />
        )}
      </Box>
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
          <Grid item xs={3}>
            <Typography className="dropdown-label">Reporting Head</Typography>
            <TextField placeholder={'Enter Reporting Head'} />
          </Grid>
        </Grid>
        <Box className="button-container">
          <BtnOutlined title="Reset" onClick={() => setIsFiltered(false)} />
          <BtnContained title="Search" onClick={() => setIsFiltered(true)} />
        </Box>
      </Stack>
      {isFiltered ? (
        <Stack className="container" style={{ margin: '0px' }}>
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

            <Stack className="user-list-table-search-filters">
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
        handleCloseSuccess={showSuceesModal}
        successModalTitle={'Request - Activate User'}
        successModalMsg={
          'Your request for activating user is successfully sent to the Reviewer.'
        }
        btn={' Close'}
      />
    </Stack>
  );
}

export default UserCreationTab;
