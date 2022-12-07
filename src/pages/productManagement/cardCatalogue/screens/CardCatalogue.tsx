import React, { ChangeEvent, useState, useEffect } from 'react';
import './cardCateloge.scss';
// import useStyles from "./cardStyle";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import DashboardCard from '../../../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard';
import ProgressCard from '../../../../components/commonComponent/CommonCard/ProgressCard/ProgressCard';
import DashboardCard from '../../../../components/commonComponent/CommonCard/SalesDashbaordCard/DashboardCard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { tableCellClasses } from '@mui/material/TableCell';
import TypographyHead from '../../../../components/commonComponent/CustomText/Head';
import { useNavigate } from 'react-router-dom';
import SelectDropdown from '../../../../components/commonComponent/CheckboxSelectDropdown';
import SearchSelectDropdown from '../../../../components/commonComponent/SearchDropdown';
import TableComp from '../../../../components/commonComponent/ListTable/ListTable';
import PaginationComp from '../../../../components/commonComponent/Pagination/Pagination';
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
  Grid,
  Select,
  TextField,
  OutlinedInput,
  ListItemText,
} from '@mui/material';
import TypographySubTitle from '../../../../components/commonComponent/CustomText/Typography';
import Surrogate_icon from '../../../../assets/images/surrogateIcon.svg';
import Pause_icon from '../../../../assets/images/pauseIcon.svg';
import Edit_icon from '../../../../assets/images/editIcon.svg';
import Resume_icon from '../../../../assets/images/resumeIcon.svg';
import Email_Icon from '../../../../assets/images/emailIcon.svg';
import Download_Icon from '../../../../assets/images/downloadIcon.svg';
import TotalApplications from '../../../../assets/icons/total_application_icon.svg';
import Comparisions from '../../../../assets/icons/comparision_icon.svg';
import AddIcon from '@mui/icons-material/Add';
import VirtualCard from '../../../../assets/icons/virtual_card_icon.svg';
import ApprovalRate from '../../../../assets/icons/approval_rate_icon.svg';
import ApprovedIcon from '../../../../assets/icons/approved_icon.svg';
import Dropped from '../../../../assets/icons/dropped_icon.svg';
import InProgress from '../../../../assets/icons/in_progress_icon.svg';
import Rejected from '../../../../assets/icons/rejected_icon.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {} from '../../../../utils/tagBasedIndicator/tagStatus';
// import InfoIcon from '@mui/icons-material/Info';
import Info_Icon from '../../../../assets/images/info_icon.svg';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from '../../../../pages/sales/dashboard/dashboard.const';
import TablePagination from '@mui/material/TablePagination';
import { Height } from '@mui/icons-material';
import TypoText from '../../../../components/commonComponent/CustomText/Textfield';
import GroupButton from '../../../../components/commonComponent/GroupButton/GroupButton';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';
import ListTable from '../../../../components/commonComponent/commonListTable/commonListTable';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'cardName', headerName: 'Card Name', width: 130 },
//   { field: 'productID', headerName: 'Product ID', width: 130 },
//   { field: 'businessID', headerName: 'Business ID', width: 130 },
//   { field: 'cardMode', headerName: 'Card Mode', width: 130 },
//   { field: 'cardCategory', headerName: 'Card Category', width: 130 },
//   { field: 'cardStatus', headerName: 'Card Status', width: 120 },
//   { field: 'more', headerName: 'More', type: 'number', width: 20 },

// ];

export interface cardCatalogueFilterInterface {
  label?: string;
  option?: Array<object>;
}

export const CardCatalogueFilterDropdown: cardCatalogueFilterInterface[] = [
  {
    label: 'Card Mode',
    option: [
      { value: 'All', name: 'All Mode' },
      { value: 'Salaried', name: 'Salaried' },
      { value: 'Business', name: 'Business' },
      { value: 'Doctor', name: 'Doctor' },
      { value: 'Teacher', name: 'Teacher' },
      { value: 'Defence', name: 'Defence' },
      { value: 'Chartered Accountant', name: 'Chartered Accountant' },
      { value: 'FD Based', name: 'FD Based' },
    ],
  },
  {
    label: 'Card Category',
    option: [
      { value: 'All', name: 'All Category' },
      { value: 'General', name: 'General' },
      { value: 'Travel', name: 'Travel' },
      { value: 'Fuel', name: 'Fuel' },
      { value: 'Online Shopping', name: 'Online Shopping' },
      { value: 'Entertainment', name: 'Entertainment' },
      { value: 'Utility Bills', name: 'Utility Bills' },
      { value: 'Offline Shopping', name: 'Offline Shopping' },
      { value: 'Restaurant', name: 'Restaurant' },
      { value: 'Grocery', name: 'Grocery' },
    ],
  },
  {
    label: 'Card Status',
    option: [
      { value: 'All', name: 'All' },
      { value: 'Active', name: 'Active' },
      { value: 'In-Active', name: 'In-Active' },
    ],
  },
  {
    label: 'Choose Surrogate',
    option: [
      { value: 'All', name: 'All Surrogates' },
      { value: 'Payroll', name: 'Payroll' },
      { value: 'Card on Card', name: 'Card on Card' },
      { value: 'CIBIL', name: 'CIBIL' },
      { value: 'AQB', name: 'AQB' },
      { value: 'RC', name: 'RC' },
    ],
  },
];

export interface dataHeaderList {
  id: string;
  cardName: string;
  productID: string;
  businessID: string;
  cardMode: string;
  cardCategory: string;
  cardStatus: string;
  more?: string;
}

export interface dataList {
  id: number;
  cardName: string;
  productID: number;
  businessID: number;
  cardMode: string;
  cardCategory: string;
  cardStatus: string;
  more?: string;
}

function createData(
  id: number,
  cardName: string,
  productID: number,
  businessID: number,
  cardMode: string,
  cardCategory: string,
  cardStatus: string,
  more: string
) {
  return {
    id,
    cardName,
    productID,
    businessID,
    cardMode,
    cardCategory,
    cardStatus,
    more,
  };
}

// const rows = [
//   createData(
//     1,
//     'ETERNA',
//     1234567890,
//     1234567890,
//     'General',
//     'Basic',
//     'Active',
//     ''
//   ),
//   createData(
//     2,
//     'PREMIER',
//     1234567890,
//     1234567890,
//     'General',
//     'Premium',
//     'In-Active',
//     ''
//   ),
//   createData(
//     3,
//     'EXCLUSIVE ICAI',
//     1234567890,
//     1234567890,
//     'General',
//     'Ultra Premium',
//     'Active',
//     ''
//   ),
//   createData(
//     4,
//     'EXCLUSIVE ICAI',
//     1234567890,
//     1234567890,
//     'General',
//     'Ultra Premium',
//     'Active',
//     ''
//   ),
//   createData(
//     5,
//     'EXCLUSIVE ICAI',
//     1234567890,
//     1234567890,
//     'General',
//     'Ultra Premium',
//     'Active',
//     ''
//   ),
//   createData(
//     6,
//     'EXCLUSIVE ICAI',
//     1234567890,
//     1234567890,
//     'General',
//     'Basic',
//     'Active',
//     ''
//   ),
// ];

const tableHeaderData = [
  {
    id: 'ID',
    cardName: 'Card Name',
    productID: 'Product ID',
    businessID: 'Business ID',
    cardMode: 'Card Mode',
    cardCategory: 'Card Category',
    cardStatus: 'Card Status',
    // more: 'More',
  },
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, 2),
  },
}));

export const data = [
  createData(
    1,
    'ETERNA',
    1234567890,
    1234567890,
    'General',
    'Basic',
    'Active',
    ''
  ),
  createData(
    2,
    'PREMIER',
    1234567890,
    1234567890,
    'General',
    'Premium',
    'In-Active',
    ''
  ),
  createData(
    3,
    'EXCLUSIVE ICAI',
    1234567890,
    1234567890,
    'General',
    'Ultra Premium',
    'Active',
    ''
  ),
  createData(
    4,
    'EXCLUSIVE ICAI',
    1234567890,
    1234567890,
    'General',
    'Ultra Premium',
    'Active',
    ''
  ),
  createData(
    5,
    'EXCLUSIVE ICAI',
    1234567890,
    1234567890,
    'General',
    'Ultra Premium',
    'Active',
    ''
  ),
  createData(
    6,
    'EXCLUSIVE ICAI',
    1234567890,
    1234567890,
    'General',
    'Basic',
    'Active',
    ''
  ),
];

export const CardCatalogue = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  // const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<number>(1);
  const [surrogateSelection, setSurrogateSelection] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const [resumeSuccessModal, setResumeSuccessModal] = useState(false);
  const [resumeRemoveModal, setResumeRemoveModal] = useState(false);
  const [surrogateSuccessSelection, setSurrogateSuccessSelection] =
    useState(false);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [pauseMethods, setPauseMethods] = useState('Pause Now');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //  const [selected, setSelected] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [filteredData, setFilterteredData] = useState(rows);
  const openCardMenu = Boolean(anchorEl);
  const [surrogateMethod, setSurrogateMethod] = useState('Assign Surrogate');
  // const [sortingData, setSortingData] = useState(data);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);

  const [editModal, setEditModal] = useState(false);

  //Table
  const [sortingData, setSortingData] = useState(data);
  const [ascending, setAscending] = useState<boolean>(true);
  const [idSorting, setIdSorting] = useState<boolean>(true);
  const [selected, setSelected] = useState<number[]>([]);
  const [isItem, setIsItem] = useState<boolean>(false);
  const [activateModal, setActivateModal] = useState<boolean>(false);
  const [deactivateModal, setDeactivateModal] = useState<boolean>(false);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  useEffect(() => {
    filterData();
  }, [ascending]);
  // useEffect(() => {
  //   idFilterData();
  // }, [idSorting]);

  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';
  const [alignment, setAlignment] = useState('all');
  // const [columnItems, setColumnItems] = useState(column);
  // const [dataItems, setDataItems] = useState(data);
  const handleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };

  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    // backgroundColor: ' rgb(240, 240, 240)',
    // border: ' rgb(240, 240, 240) 1px ',
    // paddingX:'2px',
    backgroundColor: '#F3F3F3',
    color: 'black',

    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      background: '#0662B7',
    },
  }));

  // const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  // const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
  //   setAnchorElement(event.currentTarget);
  // };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelected = data.map((n: any) => n.id);
  //     setSelected(newSelected);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setCurrentPage(page);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setCurrentPage(1);
  };
  // const isSelected = (id: number) => selected.indexOf(id) !== 1;

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const singleCardOpen = () => {
    navigate('/productManagement/cardCatalogue/singleupload');
  };

  const bulkCardOpen = () => {
    navigate('/productManagement/cardCatalogue/bulkupload');
  };

  const handleAdd = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const modes = [
    'All',
    'Salaried',
    'Doctor',
    'Teacher',
    'Business',
    'Defence',
    'Chartered Accountant',
    'FD Based',
  ];

  const [cardMode, setCardMode] = React.useState<string[]>(['All']);

  const handleChange = (event: SelectChangeEvent<typeof cardMode>) => {
    const {
      target: { value },
    } = event;
    setCardMode(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const currencyChange = (event: any) => {
    setCurrency(event.target.value);
  };

  const dashboardVal = [
    {
      index: 1,
      title: 'Total Applications',
      value: 3500,
      more: true,
      image: TotalApplications,
    },
    {
      index: 2,
      title: 'Approval Rate (%)',
      value: 98.6,
      more: false,
      image: ApprovalRate,
    },
    {
      index: 3,
      title: 'Comparision %(With Previous periods)',
      value: 26,
      more: false,
      image: Comparisions,
    },
    {
      index: 4,
      title: 'Virtual Card Issued',
      value: 345,
      more: true,
      image: VirtualCard,
    },
  ];
  const progressValue = [
    {
      index: 1,
      title: 'In Progress #',
      value: 3500,
      lastPeriodValue: 0,
      lastYearValue: 0,
      image: InProgress,
      navPath: '/sales/salesReport',
    },
    {
      index: 2,
      title: 'Approval #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: ApprovedIcon,
      navPath: '/sales/salesReport',
    },
    {
      index: 3,
      title: 'Dropped #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Dropped,
      navPath: '/sales/salesReport',
    },
    {
      index: 4,
      title: 'Rejected #',
      value: 3500,
      lastPeriodValue: 2500,
      lastYearValue: 2500,
      image: Rejected,
      navPath: '/sales/salesReport',
    },
  ];

  const pauseMethodChange = (value: any) => {
    setPauseMethods(value);
  };
  const surrogateMethodChange = (value: any) => {
    setSurrogateMethod(value);
  };

  const [editSuccessModal, setEditSuccessModal] = useState(false);

  const closeModal = () => {
    setSurrogateSelection(false);
    setSurrogateSuccessSelection(false);
    setResumeModal(false);
    setResumeSuccessModal(false);
    setResumeRemoveModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowPauseModal(false);
    setEditModal(false);
    setEditSuccessModal(false);
  };

  const successModal = () => {
    if (pauseMethods === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
      console.log('success');
    }
    if (pauseMethods === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
      console.log('fail');
    }
  };

  const handleSurrogateSubmit = () => {
    if (surrogateMethod === 'Assign Surrogate') {
      setSurrogateSuccessSelection(true);
      setSurrogateSelection(false);
    }
    if (surrogateMethod === 'Remove Surrogate') {
      setResumeRemoveModal(true);
      setSurrogateSelection(false);
    }
  };

  const handleResumeSuccess = () => {
    setResumeSuccessModal(true);
    setResumeModal(false);
  };

  const handleEditSuccess = () => {
    setEditModal(false);
    setEditSuccessModal(true);
  };

  const editModalFun = () => {
    setEditModal(true);
  };

  {
    console.log('editModal', editModal);
  }

  const product_label = [
    {
      id: 1,
      label: 'Payroll',
      defaultChecked: true,
    },
    {
      id: 2,
      label: 'Card For Card',
      defaultChecked: true,
    },
    {
      id: 3,
      label: 'CIBIL',
      defaultChecked: true,
    },
    {
      id: 4,
      label: 'AQB',
      defaultChecked: false,
    },
    {
      id: 5,
      label: 'Secured',
      defaultChecked: false,
    },
    {
      id: 6,
      label: 'RC Surrogate',
      defaultChecked: false,
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

  //Table
  const handleSortByName = () => {
    setAscending(!ascending);
  };

  // const handleSortById = () => {
  //   setIdSorting(!idSorting);
  // };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
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
        setIsItem(isItemSelected);
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
      title: 'Card Name',
      dataIndex: 'cardName',
      key: 'cardName',
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
    },
    {
      title: 'Product ID',
      dataIndex: 'productID',
      key: 'productID',
    },
    { title: 'Business ID', dataIndex: 'businessID', key: 'businessID' },

    { title: 'Card Category', dataIndex: 'cardCategory', key: 'cardCategory' },
    
    {
      title: 'Card Status',
      dataIndex: 'cardStatus',
      key: 'cardStatus',

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
            <Stack
              id="more-button"
              onClick={handleClick}
              aria-controls={open ? 'more-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              sx={{ padding: '5px', borderBottom: 'none', cursor: 'pointer' }}
            >
              <MoreVertIcon />
            </Stack>
            <Menu
              id="more-menu"
              anchorEl={anchorElement}
              open={open}
              MenuListProps={{
                'aria-labelledby': 'more-button',
              }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                // onClick={() => handleClose()}
                onClick={() => {
                  handleClose();
                  navigate(
                    '/productManagement/cardCatalogue/singleupload',
                    {
                      state: {
                        isEditable: false,
                      },
                    }
                  );
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                View
              </MenuItem>
              <MenuItem
                // onClick={handleClose}
                onClick={() => {
                  handleClose();
                  navigate(
                    '/productManagement/cardCatalogue/singleupload',
                    {
                      state: {
                        isEditable: true,
                      },
                    }
                  );
                }}
                style={{ padding: '10px 20px', textAlign: 'left' }}
              >
                Edit
              </MenuItem>
             
            </Menu>
          </>
        );
      },
    },
  ];

  const filterData = () => {
    const sort = sortingData.sort((a: any, b: any) => {
      if (ascending) {
        return a.cardName < b.cardName ? -1 : 1;
      }
      return a.cardName > b.cardName ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  // const idFilterData = () => {
  //   const sort = sortingData.sort((a: any, b: any) => {
  //     if (idSorting) {
  //       return a.orgId < b.orgId ? -1 : 1;
  //     }
  //     return a.orgId > b.orgId ? -1 : 1;
  //   });
  //   setSortingData([...sort]);
  // };

  return (
    <Stack>
      <Stack>
        <Box className="cardHeader">
          <Box>
            <Typography
            // sx={{ display: 'flex', justifyContent: 'flex-start' }}
            // variant="body1"
            // color="textPrimary"
            >
              Card Catalogue
            </Typography>
            <TypographyInfo title="Manage card information from here" />
          </Box>
          <Box>
            <Button
              sx={{ textTransform: 'capitalize', backgroundColor: '#0662B7' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              // endIcon={<ExpandMoreIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              Add New Card{' '}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openCardMenu}
              onClose={handleCardMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={singleCardOpen}>Single Card Upload</MenuItem>
              <MenuItem onClick={bulkCardOpen}>Bulk Card Upload</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className="body1">
          <Box className="container1">
            <TypoText title="Card List" />
            <img className="img1" src={Info_Icon} alt="" />
            <TypographyInfo title="Filter cards by mode/status/category/surrogate here." />
          </Box>
          <Divider />

          <Box className="bodyBox">
            <Grid container spacing={2}>
              {CardCatalogueFilterDropdown?.map(
                (eachItem: any, index: number) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Typography className="dropdown-label">
                        {eachItem?.label}
                      </Typography>
                      <SelectDropdown options={eachItem?.option} />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>

          <Box className="boxBtn">
            <Button
              sx={{
                textTransform: 'capitalize',
                fontSize: '14px',
                fontWeight: 500,
              }}
              color="secondary"
              variant="outlined"
            >
              Reset
            </Button>
            <Button
              sx={{ textTransform: 'capitalize' }}
              color="secondary"
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          
          <Box sx={{display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: 4,
              backgroundColor: 'white',
              paddingY: 2,
              }} >

            <Box>
              <Typography>Card Details</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                gap: 2,
              }}
            >
              <Button>
                <img src={Download_Icon} alt="d" />
              </Button>
              <Button>
                <img src={Email_Icon} alt="email" />
              </Button>
            </Box>
            </Box>
          <Divider sx={{marginX:3}}  />
          

          <Box className="body2">
            <Stack direction="row" spacing={2} sx={{ margin: '30px 0px' }}>
              <Button
                className="btn"
                variant="contained"
                color="secondary"
                disabled
                onClick={() => setResumeModal(true)}
              >
                <IconButton className="icon">
                  <img
                    src={Resume_icon}
                    alt="resumeIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                Resume card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                onClick={() => setShowPauseModal(true)}
                disabled
              >
                <IconButton className="icon">
                  <img
                    src={Pause_icon}
                    alt="pauseIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                pause card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                disabled
                onClick={() => setEditModal(true)}
              >
                <IconButton className="icon">
                  <img
                    src={Edit_icon}
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                edit card
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="btn"
                disabled
                onClick={() => setSurrogateSelection(true)}
              >
                <IconButton className="icon">
                  <img
                    src={Surrogate_icon}
                    alt="surrogateIcon"
                    style={{
                      filter: '',
                    }}
                  />
                </IconButton>
                surrogate card selection
              </Button>
            </Stack>
            <Stack>
              <Box>
                <GroupButton data={GroupButtonData} />
              </Box>
            </Stack>
            
          </Box>
         

          <Box className="tableBox">
            <ListTable
              column={column}
              data={sortingData}
              isItemSelected={selected}
              selectedKey="id"
            />
          </Box>
        </Box>
      </Stack>

      

      {surrogateSelection && (
        <CustomModal
          openSuccess={surrogateSelection}
          handleCloseSuccess={closeModal}
          title={'Surrogate Selection'}
          handleSuccess={handleSurrogateSubmit}
          pause_content={'You can assign or remove surrogate.'}
          radioValuOne={'Assign Surrogate'}
          radioValuTwo={'Remove Surrogate'}
          close={'Close'}
          submit={'Assign'}
          pauseMethodChecking={surrogateMethodChange}
          product_label={product_label}
        />
      )}
      {surrogateSuccessSelection && (
        <CustomModal
          openSuccess={surrogateSuccessSelection}
          handleCloseSuccess={closeModal}
          successModalTitle={'Assign - Surrogate'}
          successModalMsg={
            'Your action of Assign Surrogate request of Payroll , Card For Card, and CIBIL were successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {resumeModal && (
        <CustomModal
          openSuccess={resumeModal}
          handleCloseSuccess={closeModal}
          handleSuccess={handleResumeSuccess}
          title={'Card - Resume Now'}
          pause_content={'You can resume your card from here.'}
          textarea_title={'Add Remarks'}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          close={'Close'}
          submit={'Submit'}
        />
      )}
      {resumeSuccessModal && (
        <CustomModal
          openSuccess={resumeSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card - Resume'}
          successModalMsg={
            'Your action for resuming the card request Surrogate was successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {resumeRemoveModal && (
        <CustomModal
          openSuccess={resumeRemoveModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Remove - Surrogate'}
          successModalMsg={
            'Your action of Assign Surrogate request of Payroll , Card For Card, and CIBIL were successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          handleSuccess={successModal}
          title={' Card - Pause'}
          pause_content={'You can pause it or perform a scheduled pause.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled pause.'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={pauseMethodChange}
          close={'Close'}
          submit={'Pause'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
          pauseStatusKey={'Pause Now'}
        />
      )}
      {showPauseSuccessModal && (
        <CustomModal
          openSuccess={showPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Pause'}
          successModalMsg={
            ' Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer'
          }
          btn={' Close'}
        />
      )}
      {showScheduledPauseSuccessModal && (
        <CustomModal
          openSuccess={showScheduledPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Scheduled Pause'}
          successModalMsg={
            'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
          }
          btn={' Close'}
        />
      )}

      {editModal && (
        <CustomModal
          openSuccess={editModal}
          handleCloseSuccess={closeModal}
          handleSuccess={handleEditSuccess}
          title={'Card - Edit Pause'}
          pause_content={'You can Pause or Schedule Pause card here.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled Pause'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={pauseMethodChange}
          close={'Close'}
          submit={'Pause'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
          pauseStatusKey={'Pause Now'}
        />
      )}

      {editSuccessModal && (
        <CustomModal
          openSuccess={editSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card - Edit Pause'}
          successModalMsg={
            'Your Edit pause request from DD/MM/YYYY to DD/MM/YYYY action has been successfully sent to Reviewer.'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
};
