import React, { useState } from 'react';
import './cardCateloge.scss';
// import useStyles from "./cardStyle";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { tableCellClasses } from '@mui/material/TableCell';
import TypographyHead from '../../../../components/commonComponent/CustomText/Head';
import { useNavigate } from 'react-router-dom';
import PaginationComp from '../../../../components/commonComponent/Pagination/Pagination';
import {
  MenuItem,
  Checkbox,
  Typography,
  Box,
  Tab,
  Stack,
  Button,
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
} from '@mui/material';
import Surrogate_icon from '../../../../assets/icons/surrogates_selection_icon.svg';
import Pause_icon from '../../../../assets/icons/pause_card_icon.svg';
import Edit_icon from '../../../../assets/icons/edit_scheduled_pause_icon.svg';
import Resume_icon from '../../../../assets/icons/resume_card_icon.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {} from '../../../../utils/tagBasedIndicator/tagStatus'
// import InfoIcon from '@mui/icons-material/Info';
import Info_Icon from '../../../../assets/images/info_icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { checkTagStatus } from '../../../../utils/tagBasedIndicator/tagStatus';
import TablePagination from '@mui/material/TablePagination';

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

// const tableData = [
//   {
//     id: 1,
//     cardName: 'ETERNA',
//     productID: 1234567890,
//     businessID: 1234567890,
//     cardMode: 'General',
//     cardCategory: 'Basic',
//     cardStatus: 'Active',
//     more: '',
//   },
//   {
//     id: 2,
//     cardName: 'PREMIER',
//     productID: 1234567890,
//     businessID: 1234567890,
//     cardMode: 'General',
//     cardCategory: 'Basic',
//     cardStatus: 'Active',
//     more: '',
//   },
//   {
//     id: 3,
//     cardName: 'EXCLUSIVE ICAI',
//     productID: 1234567890,
//     businessID: 1234567890,
//     cardMode: 'General',
//     cardCategory: 'Basic',
//     cardStatus: 'Active',
//     more: '',
//   },
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
    more: 'More',
  },
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 1, 0, 2),
  },
}));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.common.white ,
//     color: theme.palette.common.black,
//     fontWeight: 'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

export const CardCatalogue = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilterteredData] = useState(rows);
  const openCardMenu = Boolean(anchorEl);

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
    setRowsPerPage(parseInt(event.target.value, 5));
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
  return (
    <Stack>
      <Stack>
        <Box
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 30px 0 30px',
          }}
        >
          <Box>
            <Typography
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
              variant="body1"
              color="textPrimary"
            >
              Card Catelogue
            </Typography>
            <TypographyInfo title="From here you can manage all your card's information" />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ExpandMoreIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              + Add New Card{' '}
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

        <Box sx={{ backgroundColor: 'white', marginTop: 3, paddingX: '30px' }}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              backgroundColor: 'white',
              paddingTop: 2,
            }}
          >
            <TypographyHead title="Card List" />
            <img style={{ marginBottom: '14px' }} src={Info_Icon} />
            <TypographyInfo
              title="From here, you filter the card by its mode, status, category and
                surrogate"
            />
          </Box>
          <Divider />

          <Box
            sx={{
              minWidth: 500,
              marginTop: 2,
              display: 'flex',
              gap: '3%',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}
          >
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Mode" />

              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleAdd}
                sx={{ height: '30px', textAlign: 'left' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Category" />
              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Card Status" />

              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: '200px' }}>
              <TypographyHead title="Choose Surrogate" />

              <Select sx={{ height: '30px', textAlign: 'left' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
              paddingTop: 3,
              backgroundColor: 'white',
            }}
          >
            <Button
              sx={{ color: 'black' }}
              variant="outlined"
              color="secondary"
            >
              Reset
            </Button>
            <Button color="secondary" variant="contained">
              Search
            </Button>
          </Box>
          <Divider sx={{ padding: 1 }} />
        </Box>
        <Box>
          <Box
            sx={{
              paddingX: '30px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack direction="row" spacing={2} sx={{ margin: '30px 0px' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
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
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
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
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
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
                sx={{
                  padding: '3px 8px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid grey',
                  borderRadius: 1,
                  paddingY: '5px',
                }}
              >
                <StyledInputBase placeholder="Search" />
                <SearchIcon sx={{ marginRight: '15px', color: 'grey' }} />
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              height: 400,
              // width: "100%",
              backgroundColor: 'white',
              paddingX: 4,
            }}
          >
            <TableContainer component={Paper}>
              <Table size="small" aria-label="Table">
                <TableHead
                  style={{ background: '#EEF7FF' }}
                  // sx={{ padding: '5px' }}
                >
                  {tableHeaderData.map(
                    (items: dataHeaderList, index: number) => (
                      <TableRow key={index} >
                        <TableCell>
                          <Checkbox 
                  />
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: 800, padding: '5px' }}
                        >
                          #
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 800 }}>
                          {items.cardName}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 800 }}>
                          {items.productID}
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 800 }}>
                          {items.businessID}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="center">
                          {items.cardMode}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="left">
                          {items.cardCategory}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="center">
                          {items.cardStatus}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>
                          {items.more}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableHead>

                <TableBody >
                  {rows.map((row) => (
                    <TableRow 
                      key={row.id}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      sx={{ padding:0,border:0 }}
                    >
                      <TableCell align="center"
                          padding="checkbox"
                          sx={{ padding: '5px' }} >
                        <Checkbox />
                      </TableCell>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.cardName}</TableCell>
                      <TableCell align="center">{row.productID}</TableCell>
                      <TableCell align="center">{row.businessID}</TableCell>
                      <TableCell align="center">{row.cardMode}</TableCell>
                      <TableCell align="left">{row.cardCategory}</TableCell>
                      <TableCell sx={{
                      color: checkTagStatus(row.cardStatus).color,
                      padding: '5px',
                    }} align="center">{row.cardStatus}</TableCell>
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
                  
                  <MenuItem
                    onClick={handleClose}
                    style={{ padding: '10px 20px', textAlign: 'left' }}
                  >
                    View
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    style={{ padding: '10px 20px', textAlign: 'left' }}
                  >
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
    </Stack>
  );
};
