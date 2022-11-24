import React, { useState } from 'react';
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
  Select,
  TextField,
  OutlinedInput,
  ListItemText,
} from '@mui/material';
import TypographySubTitle from '../../../../components/commonComponent/CustomText/Typography';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import ListItemText from '@mui/material/ListItemText';
import Surrogate_icon from '../../../../assets/icons/surrogates_selection_icon.svg';
import Pause_icon from '../../../../assets/icons/pause_card_icon.svg';
import Edit_icon from '../../../../assets/icons/edit_scheduled_pause_icon.svg';
import Resume_icon from '../../../../assets/icons/resume_card_icon.svg';
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

const rows = [
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
    'InActive',
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

const tableHeaderData = [
  {
    id: 'ID',
    cardName: 'Card Name',
    productID: 'Product ID',
    businessID: 'Business ID',
    cardMode: 'Card Mode',
    cardCategory: 'Card Category',
    cardStatus: 'Card Status',
    more: 'More',
  },
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, 2),
  },
}));

export const CardCatalogue = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
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
  const [selected, setSelected] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilterteredData] = useState(rows);
  const openCardMenu = Boolean(anchorEl);
  const [surrogateMethod, setSurrogateMethod] = useState('Assign Surrogate');
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);

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

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
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

  const closeModal = () => {
    setSurrogateSelection(false);
    setSurrogateSuccessSelection(false);
    setResumeModal(false);
    setResumeSuccessModal(false);
    setResumeRemoveModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowPauseModal(false);
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

  const product_label = [
    {
      id: 1,
      label: 'Payroll',
      defaultChecked: true,
    },
    {
      id: 2,
      label: 'Car For Card',
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
              sx={{ textTransform: 'capitalize' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              endIcon={<ExpandMoreIcon />}
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
              <MenuItem onClick={singleCardOpen}>Single card upload</MenuItem>
              <MenuItem onClick={bulkCardOpen}>Bulk card Upload</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box className="body1">
          <Box className="container1">
            <TypoText title="Card List" />
            <img className="img1" src={Info_Icon} />
            <TypographyInfo
              title="From here, you filter the card by its mode, status, category and
                surrogate"
            />
          </Box>
          <Divider />

          <Box
            className="bodyBox"
            // sx={{
            //   minWidth: 500,
            //   marginTop: 2,
            //   display: 'flex',
            //   gap: '3%',
            //   justifyContent: 'space-between',
            //   backgroundColor: 'white',
            // }}
          >
            <FormControl className="formctrl">
              <TypographySubTitle title="Card Mode" />
              {/* <InputLabel id="demo-simple-select-label">All</InputLabel> */}
              <Select
                // labelId="demo-multiple-checkbox-label"
                id="demo-simple-select-label"
                multiple
                value={cardMode}
                onChange={handleChange}
                // input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                className="select"
              >
                {modes.map((mode) => (
                  <MenuItem key={mode} value={mode}>
                    <Checkbox checked={cardMode.indexOf(mode) > -1} />
                    <ListItemText primary={mode} />
                  </MenuItem>
                ))}
              </Select>

            </FormControl>
            <FormControl className="formctrl">
              <TypographySubTitle title="Card Category" />
              <Select className="select" defaultValue={0}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="formctrl">
              <TypographySubTitle title="Card Status" />

              <Select placeholder="All" className="select"  defaultValue={0}>
              <MenuItem value={0}>All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="formctrl">
              <TypographySubTitle title="Choose Surrogate" />

              <Select className="select" defaultValue={0}>
              <MenuItem value={0}>All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            className="boxBtn"
            // sx={{
            //   display: 'flex',
            //   justifyContent: 'flex-end',
            //   gap: 2,
            //   paddingTop: 3,
            //   paddingBottom:3,
            //   backgroundColor: 'white',
            // }}
          >
            <Button color="secondary" variant="outlined">
              Reset
            </Button>
            <Button color="secondary" variant="contained">
              Search
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Box
            sx={{
              paddingX: 3,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingY: 2,
            }}
          >
            <Box>
              <Typography>Card Details</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <Button sx={{ color: '#0662B7', padding: 0, borderRadius: 50 }}>
                <DownloadIcon />
              </Button>
              <Button sx={{ color: '#0662B7', padding: 0, borderRadius: 50 }}>
                <MailOutlineIcon />
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box
            className="body2"
            // sx={{
            //   paddingX: '30px',
            //   backgroundColor: 'white',
            //   display: 'flex',
            //   justifyContent: 'space-between',
            //   alignItems: 'center',
            // }}
          >
            <Stack direction="row" spacing={2} sx={{ margin: '30px 0px' }}>
              <Button
                className="btn"
                variant="contained"
                color="secondary"
                // sx={{
                //   padding: '3px 8px',
                //   fontSize: '12px',
                //   display: 'flex',
                //   alignItems: 'center',
                // }}
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
              <Button variant="contained" color="secondary" className="btn">
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
              {/* <Box
              className='searchBox'
                // sx={{
                //   display: 'flex',
                //   justifyContent: 'center',
                //   alignItems: 'center',
                //   border: '1px solid grey',
                //   borderRadius: 1,
                //   paddingY: '5px',
                // }}
              >
                <StyledInputBase placeholder="Search"/>
                <SearchIcon className='searchIcon' />
              </Box> */}
              <Box
                // sx={{
                //   width: '241px',
                //   fontSize: '12px',
                //   fontFamily: 'Ilisarniq',
                //   fontWeight: 400,
                //   lineHeight: '14px',
                // }}
              >
                <ToggleButtonGroup
                  //  size='small'
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleButtonChange}
                  aria-label="Platform"
                  sx={{
                    height: '40px'
                  }}
                  // sx={ToggleBoxStyle}
                >
                  <ColorButton value="all" sx={{ paddingRight: '10px'}}> All </ColorButton>
                  {/* <Divider orientation="vertical" /> */}
                  <ColorButton value="activate" sx={{ paddingRight: '10px'}}>Activate</ColorButton>
                  {/* <Divider orientation="vertical" /> */}
                  <ColorButton value="deactivated" sx={{ paddingRight: '10px'}}>Deactivated</ColorButton>
                  {/* <Divider orientation="vertical" /> */}
                  <ColorButton value="saved" sx={{ paddingRight: '10px'}}>Saved</ColorButton>
                </ToggleButtonGroup>
              </Box>
            </Stack>
          </Box>
          <Box
            className="tableBox"
            // sx={{
            //   height: 400,
            //   // width: "100%",
            //   backgroundColor: 'white',
            //   paddingX: 4,
            // }}
          >
            <TableContainer component={Paper}>
              <Table size="small" aria-label="Table">
                <TableHead
                  className="tableHead"
                  // style={{ background: '#EEF7FF' }}
                  // sx={{ padding: '5px' }}
                >
                  {tableHeaderData.map(
                    (items: dataHeaderList, index: number) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell
                          width={'20px'}
                          align="center"
                          className="tableCell"
                        >
                          #
                        </TableCell>
                        <TableCell
                          width={'160px'}
                          align="center"
                          className="tableCell"
                        >
                          {items.cardName}
                        </TableCell>
                        <TableCell align="center" className="tableCell">
                          {items.productID}
                        </TableCell>
                        <TableCell align="center" className="tableCell">
                          {items.businessID}
                        </TableCell>
                        <TableCell
                          width={'150px'}
                          className="tableCell"
                          align="center"
                        >
                          {items.cardMode}
                        </TableCell>
                        <TableCell
                          width={'150px'}
                          className="tableCell"
                          align="left"
                        >
                          {items.cardCategory}
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          {items.cardStatus}
                        </TableCell>
                        <TableCell className="tableCell">
                          {items.more}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      // sx={{ padding:0,border:0 }}
                    >
                      <TableCell align="center" padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.cardName}</TableCell>
                      <TableCell align="center">{row.productID}</TableCell>
                      <TableCell align="center">{row.businessID}</TableCell>
                      <TableCell align="center">{row.cardMode}</TableCell>
                      <TableCell align="left">{row.cardCategory}</TableCell>
                      <TableCell
                        sx={{
                          color: checkTagStatus(row.cardStatus).color,
                          padding: '5px',
                        }}
                        align="center"
                      >
                        {row.cardStatus}
                      </TableCell>
                      {/* <TableCell align="left">{<MoreVertIcon  />}</TableCell> */}
                      <TableCell>
                        <Box
                          id="more-button"
                          onClick={handleClick}
                          aria-controls={menuOpen ? 'more-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={menuOpen ? 'true' : undefined}
                        >
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <Menu
                  id="more-menu"
                  anchorEl={anchorElement}
                  open={menuOpen}
                  MenuListProps={{
                    'aria-labelledby': 'more-button',
                  }}
                  onClose={handleClose}
                  // anchorOrigin={{
                  //   vertical: 'top',
                  //   horizontal: 'right',
                  // }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={() => {
                    handleClose();
                    navigate('/productManagement/cardCatalogue/singleupload/reviewCard');
                  }} className="menu">
                    View
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="menu">
                    Edit
                  </MenuItem>
                </Menu>
              </Table>

              <PaginationComp
                rows={filteredData}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                onPageChange={onPageChange}
                onLastClick={() => {
                  setPage(Math.ceil(filteredData.length / rowsPerPage));
                  setCurrentPage(Math.ceil(filteredData.length / rowsPerPage));
                }}
                onFirstClick={() => {
                  setPage(1);
                  setCurrentPage(1);
                }}
                lastButtonDisabled={
                  page == Math.ceil(filteredData.length / rowsPerPage)
                }
              />
            </TableContainer>

            {/* <DataGrid
              rows={rows1}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            /> */}
          </Box>
        </Box>
      </Stack>

      <Stack>
        {/* <TableComp
          rows={rows}
          statusRowsHeading={statusRowHeading}
          listRowHeading={listRowHeading}
          flag="dashboard"
          viewPath="/sales/salesDashboard"
        /> */}
      </Stack>

      {surrogateSelection && (
        <CustomModal
          openSuccess={surrogateSelection}
          handleCloseSuccess={closeModal}
          title={'Surrogate Selection'}
          handleSuccess={handleSurrogateSubmit}
          pause_content={'You can assign or remove surrogate.'}
          normalPause={'Assign Surrogate'}
          SchedulePause={'Remove Surrogate'}
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
          title={'AQB - Resume Now'}
          pause_content={
            'You will be able to resume your paused surrogate here.'
          }
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
          title={'Card For Card - Pause'}
          pause_content={'You can pause it or perform a scheduled pause.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled pause.'
          }
          textarea_title={'Add Remarks'}
          normalPause={NORMAL_PAUSE}
          SchedulePause={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={pauseMethodChange}
          close={'Close'}
          submit={'Submit'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
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
    </Stack>
  );
};
