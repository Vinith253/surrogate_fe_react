import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  Checkbox,
  Typography,
  Box,
  Tab,
  Stack,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Icon,
  IconButton,
  Divider,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Menu,
  Select,
  TextField,
  OutlinedInput,
  ListItemText,
  Link,
  InputBase,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  historyLogAuthenticationInterface,
  historyLogDummyData,
  historyLogRoleCreationInterface,
  ruleCreationLogData,
} from './historyLog.const';
import './style.scss';
import GroupButton from '../../../../../components/commonComponent/GroupButton/GroupButton';
import { GridSearchIcon } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import { checkTagStatus } from '../../../../../utils/tagBasedIndicator/tagStatus';
import ListTable from '../../../../../components/commonComponent/commonListTable/commonListTable';
import HistoryLogCustomModal from '../../../../../components/commonComponent/customModal/HistoryLogCustomModal';

const tableHeaderData: historyLogAuthenticationInterface[] = [
  {
    id: 'ID',
    version: 'Version',
    initiator: 'Initiated By',
    approver: 'Approver',
    reviewer: 'Reviewer',
    currentStatus: 'Current Status',
    requestStatus: 'Request Status',
    more: 'More',
  },
];

export const GroupButtonData = [
  {
    title: 'Role Creation',
  },
  {
    title: 'Authorisation Level',
  },
];

export const HistoryLog = (props: any) => {
  const navigate = useNavigate();
  const [historyLogData, setHistoryLogData] =
    useState<historyLogRoleCreationInterface[]>(ruleCreationLogData);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortingData, setSortingData] =
    useState<historyLogRoleCreationInterface[]>(ruleCreationLogData);
  const [selectedStatus, setSelectedStatus] = useState<String>('Role Creation');
  const [versionSorting, setVersionSorting] = useState<boolean>(true);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);

  const menuOpen = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
    console.log('coming here');
  };

  console.log('historyprops', props);

  const tableData = [
    {
      versionNumber: 'V1.1.5',
      surrogateName: 'Card For Card',
      requestStatus: 'Approved',
      currentStatus: 'Active',
      initiater: 'Rajesh Kumar',
      dateAndTime: '10 Aug,2022 10:00',
      reviewer: 'Ganesh',
      dateAndTimeReview: '12 Aug,2022 10:00',
      approver: 'Ganesh',
      dateAndTimeapprover: '12 Aug,2022 10:00',
      reasonRejection: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
        'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
        'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
      ],
    },
    {
      versionNumber: 'V1.2.5',
      surrogateName: 'Card For Card',
      requestStatus: 'Rejected',
      currentStatus: 'Active',
      initiater: 'Ganesh',
      dateAndTime: '10 Aug,2022 10:00',
      reviewer: 'Ganesh',
      dateAndTimeReview: '12 Aug,2022 10:00',
      approver: 'Ganesh',
      dateAndTimeapprover: '12 Aug,2022 10:00',
      reasonRejection: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
        'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
        'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
      ],
    },
    {
      versionNumber: 'V1.3.5',
      surrogateName: 'Card For Card',
      requestStatus: 'Rejected',
      currentStatus: 'Active',
      initiater: 'Ganesh',
      dateAndTime: '10 Aug,2022 10:00',
      reviewer: 'Ganesh',
      dateAndTimeReview: '12 Aug,2022 10:00',
      approver: 'Ganesh',
      dateAndTimeapprover: '12 Aug,2022 10:00',
      reasonRejection: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
        'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
        'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
      ],
    },
    {
      versionNumber: 'V1.4.5',
      surrogateName: 'Card For Card',
      requestStatus: 'Rejected',
      currentStatus: 'Active',
      initiater: 'Ganesh',
      dateAndTime: '10 Aug,2022 10:00',
      reviewer: 'Ganesh',
      dateAndTimeReview: '12 Aug,2022 10:00',
      approver: 'Ganesh',
      dateAndTimeapprover: '12 Aug,2022 10:00',
      reasonRejection: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
        'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
        'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
      ],
    },
    {
      versionNumber: 'V1.5.5',
      surrogateName: 'Card For Card',
      requestStatus: 'Rejected',
      currentStatus: 'Active',
      initiater: 'Ganesh',
      dateAndTime: '10 Aug,2022 10:00',
      reviewer: 'Ganesh',
      dateAndTimeReview: '12 Aug,2022 10:00',
      approver: 'Ganesh',
      dateAndTimeapprover: '12 Aug,2022 10:00',
      reasonRejection: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque Vitae quis praesent tempus ut',
        'Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui  ultricies in curabitur quis et. Justo velit    massa sed morbi nunc, sit magna.',
        'Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.',
      ],
    },
  ];

  const historyViewMoreFun = () => {
    let navigatee = '';

    if (props.comingfrom == 'roleCreation') {
      navigate('/userManagement/roleCreation/historyLogDetail');
    } else {
      navigate('/userManagement/userCreation/historyLogDetail');
    }
  };
  const column = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack sx={{ textAlign: 'center' }}>{text}</Stack>;
      },
      headerRender: (text: string) => {
        return <Stack sx={{ textAlign: 'center' }}>{text}</Stack>;
      },
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
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
            <IconButton onClick={() => setVersionSorting(!versionSorting)}>
              <img src={UnfoldMoreIcon} alt="Sort Icon" />
            </IconButton>
          </Stack>
        );
      },
    },
    { title: 'Role Name', dataIndex: 'roleName', key: 'roleName' },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    { title: 'Request', dataIndex: 'request', key: 'request' },
    {
      title: 'Request Initiated',
      dataIndex: 'requestInitiated',
      key: 'requestInitiated',
    },
    { title: 'Reviewer', dataIndex: 'reviewer', key: 'reviewer' },
    { title: 'Approver', dataIndex: 'approver', key: 'approver' },
    {
      title: 'Request Status',
      dataIndex: 'requestStatus',
      key: 'requestStatus',
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
          <>
            <Stack onClick={handleClick}>
              <MoreVertIcon />
            </Stack>
            <Menu
              id="more-menu"
              anchorEl={anchorElement}
              open={menuOpen}
              MenuListProps={{
                'aria-labelledby': 'more-button',
              }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'right',
              // }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setShowHistoryModal(true);
                }}
                className="menu"
              >
                History Log
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  // navigate('/productManagement/cardCatalogue/singleupload/reviewCard');
                  navigate('/userManagement/roleCreation/historyLogDetail');
                }}
                // className="menu"
              >
                View Role
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  const idFilterData = () => {
    const sort = historyLogData.sort((a: any, b: any) => {
      if (versionSorting) {
        return a.version < b.version ? -1 : 1;
      }
      return a.version > b.version ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  useEffect(() => {
    idFilterData();
  }, [versionSorting]);

  const handleClose = () => {
    console.log('coming into handleClose');
    setAnchorElement(null);
  };
  const closeModal = () => {
    setShowHistoryModal(false);
  };

  return (
    <Stack>
      <Stack>
        {/* tableNavBar */}
        {historyLogData?.length > 0 ? (
          <Stack className="history-log-container">
            <Stack className="table-search-filters">
              <Box className="search-container-history">
                <Box className="search-box">
                  <SearchIcon className="search-icon" />
                  <InputBase
                    placeholder="Search by name,and emp ID"
                    fullWidth={true}
                  />
                </Box>
              </Box>
              <Box className="groupButtonContainer">
                <GroupButton data={GroupButtonData} />
              </Box>
            </Stack>

            <Stack>
              <ListTable column={column} data={sortingData} />
            </Stack>
          </Stack>
        ) : (
          <Stack> </Stack>
        )}
      </Stack>
      {showHistoryModal && (
        <HistoryLogCustomModal
          title={'Card for Card Surrogate - History Log'}
          closeBtn={'Close'}
          tableData={tableData}
          handleCloseSuccess={closeModal}
          openSuccess={showHistoryModal}
          viewMoreDetails={'view more details'}
          historyViewMoreFun={historyViewMoreFun}
        />
      )}
    </Stack>
  );
};
