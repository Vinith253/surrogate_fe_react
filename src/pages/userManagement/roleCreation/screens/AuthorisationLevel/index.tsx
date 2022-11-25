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
} from '@mui/material';
import TypographyInfo from '../../../../../components/commonComponent/CustomText/Info';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
// import SalesReportNodata from '../../../../../assets/images/sales-report-no-data.svg';
import { colors } from '../../../../../style/Color';
import {
  authorisationRows,
  authorisationDataInterface,
} from './authorisation.const';
import '../../style.scss';
import { ScreenHeader } from '../../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import PaginationComp from '../../../../../components/commonComponent/Pagination/Pagination';
import GreenDot from '../../../../../assets/icons/greendot.svg';
import DroppedDot from '../../../../../assets/icons/droppeddot.svg';
import FailureDot from '../../../../../assets/icons/failuredot.svg';
import ProgressDot from '../../../../../assets/icons/progressdot.svg';
import ChooseCategoryToViewData from '../../../../../components/commonComponent/ChooseCategoryToViewData';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';

export const AuthorisationLevel = (props: any) => {
  const navigate = useNavigate();

  const tableHeaderData: authorisationDataInterface[] = [
    {
      id: 'ID',
      version: 'Version',
      initiatedBy: 'Initiated By',
      approvedBy: 'Approved By',
      date: 'Date',
      currentStatus: 'Current Status',
      actions: 'Actions',
    },
  ];

  const [authorisationData, setAuthorisationData] = useState(authorisationRows);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [filteredData, setFilterteredData] =
    useState<authorisationDataInterface[]>(authorisationRows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortingData, setSortingData] = useState(authorisationRows);

  useEffect(() => {
    filterData();
  }, [ascending]);

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('----- button clicked');
    navigate('/userManagement/roleCreation/authorisationDetails');
  };

  const menuOpen = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

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

  function kycStatus(
    status: string,
    imageDot: string | undefined,
    _textColor: string
  ) {
    return (
      <Box
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Box className="dotIcon">
          <img
            src={imageDot}
            alt={'status-icon'}
            style={{ marginTop: '5px' }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: _textColor,
              fontSize: '14px',
              marginLeft: '10px',
            }}
          >
            {status}
          </Typography>
        </Box>
      </Box>
    );
  }

  const viewAction = (viewPath: string, param: any) => {
    navigate(`${viewPath}${param.id}`, {
      state: { ...param },
    });
  };

  const handleSortByName = () => {
    setAscending(!ascending);
  };

  const filterData = () => {
    const sort = sortingData.sort((a, b) => {
      if (ascending) {
        return a.version < b.version ? -1 : 1;
      }
      return a.version > b.version ? -1 : 1;
    });
    setSortingData([...sort]);
  };

  return (
    <Stack>
      <Stack>
        <Box className="role-header-container">
          <ScreenHeader
            title="Authorization Level"
            info="From here, you can assign authorization to users."
            showBackButton={false}
          />

          <Box>
            <Button
              sx={{ textTransform: 'capitalize' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              aria-haspopup="true"
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              {`Add Authorisation `}
            </Button>
          </Box>
        </Box>

        {authorisationData?.length > 0 && (
          <Box>
            <Box sx={{ marginTop: 4 }}>
              <Box
                sx={{
                  paddingX: 4,
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingY: 2,
                }}
              >
                <Typography>
                  Various organisations along with basic details.
                </Typography>
              </Box>
            </Box>
            <Divider />
          </Box>
        )}

        {authorisationData?.length > 0 ? (
          <Box className="tableBox">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="Table">
                <TableHead className="tableHead">
                  {tableHeaderData.map(
                    (items: authorisationDataInterface, index: number) => (
                      <TableRow key={index}>
                        <TableCell
                          width={'50px'}
                          height={'45px'}
                          align="center"
                          className="tableCell"
                        >
                          #
                        </TableCell>
                        {/* <TableCell width={'235px'} className="tableCell">
                        {items.id}
                      </TableCell> */}
                        <TableCell width={'235px'} className="tableCell">
                          {items.version}
                          <IconButton onClick={() => handleSortByName()}>
                            <img src={UnfoldMoreIcon} alt="Sort Icon" />
                          </IconButton>
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.initiatedBy}
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.approvedBy}
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.date}
                        </TableCell>
                        <TableCell width={'250px'} className="tableCell">
                          {items.currentStatus}
                        </TableCell>
                        <TableCell
                          width={'235px'}
                          align="center"
                          className="tableCell"
                        >
                          {items.actions}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableHead>

                <TableBody>
                  {authorisationData?.length > 0 &&
                    authorisationData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          align="center"
                          height={'50px'}
                          width={'50px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.id}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={'235px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.version}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={'235px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.initiatedBy}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={'235px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.approvedBy}
                        </TableCell>
                        <TableCell
                          align="left"
                          width={'235px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.date}
                        </TableCell>
                        {/* <TableCell align="left" width={'235px'}>
                          {row?.currentStatus}
                        </TableCell> */}
                        <TableCell
                          width={'250px'}
                          sx={{ borderBottom: 'none' }}
                        >
                          {row?.currentStatus &&
                            row?.currentStatus?.includes('Active') &&
                            kycStatus(row?.currentStatus, GreenDot, '#6AB06E')}
                          {row?.currentStatus &&
                            row?.currentStatus?.includes(
                              'Waiting for Approval'
                            ) &&
                            kycStatus(
                              row.currentStatus,
                              ProgressDot,
                              '#F37B21'
                            )}
                          {row?.currentStatus &&
                            row?.currentStatus?.includes('Closed') &&
                            kycStatus(
                              row?.currentStatus,
                              FailureDot,
                              '#E63946'
                            )}
                        </TableCell>
                        <TableCell align="center" sx={{ borderBottom: 'none' }}>
                          <Link
                            sx={{ cursor: 'pointer', color: '#0662B7' }}
                            underline="none"
                            onClick={() => viewAction('', row)}
                          >
                            View
                          </Link>
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
                      // navigate('/productManagement/cardCatalogue/singleupload/reviewCard');
                    }}
                    className="menu"
                  >
                    View
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="menu">
                    Edit
                  </MenuItem>
                </Menu>
              </Table>
            </TableContainer>

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
          </Box>
        ) : (
          <Box sx={{ margin: '60px 0' }}>
            <ChooseCategoryToViewData />
          </Box>
        )}

        {/* <Box 
        sx={{
          backgroundColor: colors.white,
          margin: '30px 0',
          padding: '90px 0px'
        }}
        >
          <img
            // style={{
            //   height: '25%',
            //   width: '25%',
            // }}
            src={SalesReportNodata}
            alt={SalesReportNodata}
            className="no-data-img"
          />
          <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
            Authorisation Level
          </Typography>
          <Typography variant="subtitle2" sx={{ letterSpacing: 0.5 }}>
            From here, you can assign authorization to your users.
          </Typography>
        </Box> */}
      </Stack>
    </Stack>
  );
};
