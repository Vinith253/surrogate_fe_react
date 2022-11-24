import React, { useState, useEffect } from 'react';
import { dataList } from '../../../interface/Types';
import { TabBar } from '../../../components/commonComponent/customTab/CustomTab';
import UserCreationTab from './userCreationTab';
import {
  Typography,
  Stack,
  Box,
  Button,
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
import active_icon from '../../../assets/icons/active.svg';
import UnfoldMoreIcon from '../../../assets/icons/sortArrow.svg';
import DeActive_icon from '../../../assets/icons/DeActive.svg';
import ChooseCategoryToViewData from '../../../components/commonComponent/ChooseCategoryToViewData';
import ListTable from '../../../components/commonComponent/commonListTable/commonListTable';
import BtnOutlined from '../../../components/commonComponent/CustomText/Button/Outlined';
import { checkTagStatus } from '../../../utils/tagBasedIndicator/tagStatus';
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

const UserCreation = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selected, setSelected] = React.useState<number[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortingData, setSortingData] = useState(data);
  const [idSorting, setIdSorting] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);

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
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
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
            <IconButton onClick={() => handleSortById()}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
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

  const GroupButtonData = [
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
      <Stack className="container">
        <HeaderWithInfo
          header="Branch Details"
          isInfoEnabled={false}
          info=""
          isDownloadEnabled={true}
        />
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
              <GroupButton data={GroupButtonData} />
            </Box>
          </Box>
        </Stack>

        <Stack>
          <ListTable column={column} data={sortingData} />
        </Stack>
      </Stack>
      {/* {isFiltered ? (
        <Stack className="container">
          <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
            Branch Details
            <Typography className="icons-container">
              <img src={DownloadIcon} alt="" className="icons" />
              <img src={MailIcon} alt="" className="icons" />
            </Typography>
          </Typography>
          <Stack className="underline"> </Stack>
        </Stack>
      ) : (
        <ChooseCategoryToViewData />
      )} */}
    </div>
  );
};

export default UserCreation;
