import { useState, useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PageLayout from '../../../../../components/layout/pageLayout/pageLayout';
import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import TablePagination from '@mui/material/TablePagination';
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonProps,
  CircularProgress,
  Divider,
  Grid,
  TableFooter,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { bulkUpload } from '../../../../../utils/constants/Constants';
import { useNavigate } from 'react-router-dom';
import PaginationComp from '../../../../../components/commonComponent/Pagination/Pagination';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';
import CommonTable from '../../../../../components/commonComponent/commonTable/CommonTable';
import UserUploadCard from '../userUploadCard/UserUploadCard';
import ChooseCategoryToViewData from '../../../../../components/commonComponent/ChooseCategoryToViewData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white ,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id?: number,
  cardName?: string,
  surrogateName?: string,
  cardMode?: string,
  cardType?: string,
  interestRate?: string,
  extraCard?: string,
  CIBIL?: number,
  salary?: string,
  error?: boolean
) {
  return {
    id,
    cardName,
    surrogateName,
    cardMode,
    cardType,
    interestRate,
    extraCard,
    CIBIL,
    salary,
    error,
  };
}

const rows1 = [
  createData(
    1,
    'Premier',
    'Card-For-Card',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
  createData(
    2,
    'Premier',
    'Payroll',
    'Business',
    'Travel',
    '12%',
    'Non-Applicable',
    700,
    '40,000',
    true
  ),
  createData(
    3,
    'Premier',
    'Card-For-Card',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
  createData(
    4,
    'Premier',
    'CIBIL',
    'Business',
    'Travel',
    '12%',
    'Non-Applicable',
    700,
    '20,000',
    true
  ),
  createData(
    5,
    'Premier',
    'Payroll',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
];
const rows2 = [
  createData(
    1,
    'Premier',
    'Card-For-Card',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
  createData(
    2,
    'Premier',
    'Payroll',
    'Business',
    'Travel',
    '12%',
    'Non-Applicable',
    700,
    '40,000',
    false
  ),
  createData(
    3,
    'Premier',
    'Card-For-Card',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
  createData(
    4,
    'Premier',
    'CIBIL',
    'Business',
    'Travel',
    '12%',
    'Non-Applicable',
    700,
    '20,000',
    false
  ),
  createData(
    5,
    'Premier',
    'Payroll',
    'Business',
    'Travel',
    '12%',
    'Applicable',
    700,
    '30,000',
    false
  ),
];

export default function UserBulkList(props: any) {
  const navigate = useNavigate();
  const [correctionState, setCorrectionState] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alignment, setAlignment] = useState('error');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageUpload, setImageUpload] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openDiscard, setOpenDiscard] = useState(false);
  const [openContinueDiscard, setOpenContinueDiscard] = useState(false);
  const [userBulkSuccessPopup, setUserBulkSuccessPopup] = useState(false);

  const column = [
    { title: '#', dataIndex: 'id', key: 'id' },
    { title: 'Company Name', dataIndex: 'companyName', key: 'companyName' },
    {
      title: 'Company Registration No.',
      dataIndex: 'companyRegNo',
      key: 'companyRegNo',
    },
    {
      title: 'Surrogate Name',
      dataIndex: 'surrogateName',
      key: 'surrogateName',
    },
    {
      title: 'Cities Of Operation',
      dataIndex: 'cityOperation',
      key: 'cityOperation',
    },
    { title: 'Telephone No.', dataIndex: 'teleNo', key: 'teleNo' },
    { title: 'Email ID', dataIndex: 'email', key: 'email' },
  ];
  const data1 = [
    {
      id: 1,
      companyName: 'Premier',
      companyRegNo: '9336252729',
      surrogateName: 'ABC Company',
      cityOperation: 'Pan India',
      teleNo: '432-1678-900',
      email: 'contact@gmail.com',
      error: false,
    },
    {
      id: 2,
      companyName: 'ABC Company',
      companyRegNo: '9636832729',
      surrogateName: 'Payroll',
      cityOperation: 'Pan India',
      teleNo: '432-1678-900',
      email: 'contact@gmail.com',
      error: true,
    },
    {
      id: 3,
      companyName: 'ABC Company',
      companyRegNo: '9336252729',
      surrogateName: 'Card-For-Card',
      cityOperation: 'Pan India',
      teleNo: '432-1678-900',
      email: 'contact@gmail.com',
      error: false,
    },
    {
      id: 4,
      companyName: 'ABC Company',
      companyRegNo: '9336892729',
      surrogateName: 'CIBIL',
      cityOperation: 'Pan India',
      teleNo: '432-1678-900',
      email: 'contact@gmail.com',
      error: true,
    },
    {
      id: 5,
      companyName: 'ABC Company',
      companyRegNo: '9336252729',
      surrogateName: 'Payroll',
      cityOperation: 'Pan India',
      teleNo: '432-1678-900',
      email: 'contact@gmail.com',
      error: false,
    },
  ];
  const data2: any = [];
  // const data2 = [
  //   {
  //     id: 1,
  //     companyName: 'Premier',
  //     companyRegNo: '9336252729',
  //     surrogateName: 'ABC Company',
  //     cityOperation: 'Pan India',
  //     teleNo: '432-1678-900',
  //     email: 'contact@gmail.com',
  //     error: false,
  //   },
  //   {
  //     id: 2,
  //     companyName: 'ABC Company',
  //     companyRegNo: '9636832729',
  //     surrogateName: 'Payroll',
  //     cityOperation: 'Pan India',
  //     teleNo: '432-1678-900',
  //     email: 'contact@gmail.com',
  //     error: false,
  //   },
  //   {
  //     id: 3,
  //     companyName: 'ABC Company',
  //     companyRegNo: '9336252729',
  //     surrogateName: 'Card-For-Card',
  //     cityOperation: 'Pan India',
  //     teleNo: '432-1678-900',
  //     email: 'contact@gmail.com',
  //     error: false,
  //   },
  //   {
  //     id: 4,
  //     companyName: 'ABC Company',
  //     companyRegNo: '9336892729',
  //     surrogateName: 'CIBIL',
  //     cityOperation: 'Pan India',
  //     teleNo: '432-1678-900',
  //     email: 'contact@gmail.com',
  //     error: false,
  //   },
  //   {
  //     id: 5,
  //     companyName: 'ABC Company',
  //     companyRegNo: '9336252729',
  //     surrogateName: 'Payroll',
  //     cityOperation: 'Pan India',
  //     teleNo: '432-1678-900',
  //     email: 'contact@gmail.com',
  //     error: false,
  //   },
  // ];
  const footerStyle = {
    backgroundColor: 'white',
    marginTop: '24px',
    padding: '25px 32px 20px',
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: ' 100%',
    // borderTop: ' 1px solid black',
    boxShadow:
      '0px 2px 10px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  };
  const handleUploadProgress = (value: number) => {
    setUploadProgress(value);
    console.log(value, 'handle upload progress');
  };

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            {...props}
            color={
              progress !== 100
                ? 'secondary'
                : correctionState
                ? 'success'
                : 'error'
            }
            sx={{
              backgroundColor: ' #e6e7e7',
              height: '8px',
              borderRadius: '5px',
            }}
            // sx={{ color: progress === 100 ? 'red' : '#0662B7;' }}
          />
        </Box>
        <Box
          sx={{
            minWidth: 35,
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2,
          }}
        >
          <Typography variant="body2">{`${Math.round(
            props.value
          )}% Completed`}</Typography>
        </Box>
      </Box>
    );
  }
  const [columnList, setcolumnList] = useState(column);
  const [dataList, setDataList] = useState<any>(data1);
  const [validCount, setValidCount] = useState('20');
  const [errorCount, setErrorCount] = useState('02');

  useEffect(() => {
    if (correctionState) {
      setDataList(data2);
      setValidCount('25');
      setErrorCount('00');
    }
  }, [correctionState]);
  useEffect(() => {
    if (alignment === 'error') {
      const errorData = data1.filter((item) => item.error === true);
      setDataList(errorData);
    } else if (alignment === 'valid') {
      const validData = data1.filter((item) => item.error === false);
      setDataList(validData);
    } else {
      setDataList(data1);
    }
  }, [alignment]);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setCurrentPage(1);
  };
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setCurrentPage(page);
  };
  const handleCorrection = () => {
    setCorrectionState(true);
  };
  const handleProceed = () => {
    if (correctionState) {
      setUserBulkSuccessPopup(!userBulkSuccessPopup);
    }

    // props.toggle(false, 'image');
  };
  let count = 2;
  let rows = correctionState ? rows2 : rows1;
  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          // console.log(props.fileCheck, 'image check');
          // if (fileName === 'image') {
          //   setImageUpload(true);
          //   console.log('check');
          // }
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [correctionState]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };
  const closeModal = () => {
    setUserBulkSuccessPopup(false);
    // setImageUpload(false);
    navigate('/userManagement/userCreation');
  };
  const handleDiscard = () => {
    setOpenDiscard(true);
  };
  const handleContinue = () => {
    setOpenDiscard(!openDiscard);
    setUserBulkSuccessPopup(!userBulkSuccessPopup);
    // setOpenContinueDiscard(!openContinueDiscard);
  };
  const handleCancel = () => {
    setOpenContinueDiscard(false);
    navigate('/userManagement/userCreation');
  };
  const handleCancelClick = () => {
    setOpenContinueDiscard(!openContinueDiscard);
  };
  const progressBar = {
    borderRadius: '10px',
    height: '8px',
  };
  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: ' rgb(240, 240, 240)',
    border: ' rgb(240, 240, 240) 1px ',
    color: 'black',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976d2',
    },
  }));
  const uploadData = {
    title: bulkUpload.CORRECTION_FILE,
    para: bulkUpload.DOWNLOAD_ERROR_CSV_XLS,
    downloadSample: bulkUpload.DOWNLOAD_CORRECTION_FILE,
    supportedFormats: bulkUpload.SUPPORTED_FORMATS,
    upload: bulkUpload.UPLOAD_CORRECTION_FILE,
  };
  const imageCardData = {
    title: bulkUpload.UPLOAD_MISSING_DOCUMENT,
    para: bulkUpload.ORG_UPLOAD_MISSING_PARA,
    supportedFormats: bulkUpload.SUPPORTED_FORMATS_JPG,
    // downloadSample: bulkUpload.DOWNLOAD_ERROR_FILE,
    upload: bulkUpload.UPLOAD_MISSING_DOCUMENT,
  };
  const boxCenter = {
    display: 'flex',
    alignItems: 'center',
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return rows.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, rows]);

  return (
    <PageLayout>
      <Box sx={{ padding: '2% 0' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '2%',
          }}
        >
          <Typography sx={{ fontSize: '1.2rem' }}>
            {progress === 100 ? 'Validated' : 'Validating Uploaded Document...'}
          </Typography>
          <CloseIcon color="secondary" />
        </Box>

        <LinearProgressWithLabel
          variant="determinate"
          value={progress}
          sx={progressBar}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          padding: '2% 0',
          boxSizing: 'unset',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '5%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '5%',
            width: '65%',
          }}
        >
          <Box sx={boxCenter}>
            {' '}
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>
              File Name:{progress === 100 && 'arantic'}
            </Typography>
          </Box>
          <Box sx={boxCenter}>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>
              Record Found: {progress === 100 && '25'}
            </Typography>
          </Box>
          <Box sx={boxCenter}>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>
              Valid Records: {progress === 100 && validCount}
            </Typography>
          </Box>
          <Box sx={boxCenter}>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>
              Errors Found: {progress === 100 && errorCount}
            </Typography>
          </Box>
        </Box>
        {progress !== 100 && (
          <Alert
            severity="warning"
            icon={
              <CircularProgress
                color="inherit"
                sx={{ width: '20px !important', height: '20px !important' }}
              />
            }
          >
            validating the uploaded documents
          </Alert>
        )}
        {progress === 100 && !correctionState && (
          <Alert severity="error">{count} Errors found in Uploaded File</Alert>
        )}
        {correctionState && progress === 100 && (
          <Alert severity="success">No Error found</Alert>
        )}
      </Box>
      <Divider />
      <Box
        sx={{
          margin: '1% 0',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        {progress === 100 && (
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            // sx={ToggleBoxStyle}
          >
            <ColorButton value="all">All</ColorButton>
            <ColorButton value="valid">Valid</ColorButton>
            <ColorButton value="error">Error</ColorButton>
          </ToggleButtonGroup>
        )}
        {/* <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <ColorButton>All</ColorButton>
          <ColorButton>Valid</ColorButton>
          <ColorButton>Error</ColorButton>
        </ButtonGroup> */}
      </Box>
      {progress > 0 && (
        // <TableContainer
        //   component={Paper}
        //   sx={{
        //     margin: '2% 0',
        //     display: progress === 100 && correctionState ? 'none' : 'block',
        //   }}
        // >
        //   <Table style={{ width: '100%' }} aria-label="customized table">
        //     <TableHead sx={{ backgroundColor: '#8fc2f4' }}>
        //       <TableRow>
        //         <StyledTableCell>#</StyledTableCell>
        //         <StyledTableCell>Card Name</StyledTableCell>
        //         <StyledTableCell>Surrogate Name</StyledTableCell>
        //         <StyledTableCell>Card Mode</StyledTableCell>
        //         <StyledTableCell>Card Type</StyledTableCell>
        //         <StyledTableCell>Interest Rate</StyledTableCell>
        //         <StyledTableCell>Extra Card</StyledTableCell>
        //         <StyledTableCell>CIBIL Score</StyledTableCell>
        //         <StyledTableCell>Salary Limit</StyledTableCell>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {currentTableData.map((row) => (
        //         <StyledTableRow
        //           key={row.id}
        //           sx={{ backgroundColor: row.error ? '#ffe5e3' : 'white' }}
        //         >
        //           <StyledTableCell component="th" scope="row">
        //             {row.id}
        //           </StyledTableCell>
        //           <StyledTableCell>{row.cardName}</StyledTableCell>
        //           <StyledTableCell>{row.surrogateName}</StyledTableCell>
        //           <StyledTableCell>{row.cardMode}</StyledTableCell>
        //           <StyledTableCell>{row.cardType}</StyledTableCell>
        //           <StyledTableCell>{row.interestRate}</StyledTableCell>
        //           <StyledTableCell>{row.extraCard}</StyledTableCell>
        //           <StyledTableCell>{row.CIBIL}</StyledTableCell>
        //           <StyledTableCell>{row.salary}</StyledTableCell>
        //         </StyledTableRow>
        //       ))}
        //     </TableBody>
        //   </Table>

        //   {/* <TablePagination
        //     rowsPerPageOptions={[5, 25, 100]}
        //     component="div"
        //     count={rows.length}
        //     rowsPerPage={rowsPerPage}
        //     page={page}
        //     onPageChange={handleChangePage}
        //     onRowsPerPageChange={handleChangeRowsPerPage}
        //   /> */}
        // </TableContainer>
        <Box
          sx={{
            margin: '2% 0',
            display: progress === 100 && correctionState ? 'none' : 'block',
          }}
        >
          {progress === 100 && (
            <CommonTable column={columnList} data={dataList} />
          )}
          {progress !== 100 && <CommonTable column={columnList} data={data2} />}
        </Box>
      )}
      {progress === 100 && correctionState && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: '18px' }}>
            *No error found in the uploaded file*
          </Typography>
        </Box>
      )}
      {/* {progress === 100 && (
        <Grid>
          <PaginationComp
            rows={rows}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            onLastClick={() => {
              setPage(Math.ceil(rows.length / rowsPerPage));
              setCurrentPage(Math.ceil(rows.length / rowsPerPage));
            }}
            onFirstClick={() => {
              setPage(1);
              setCurrentPage(1);
            }}
            lastButtonDisabled={page == Math.ceil(rows.length / rowsPerPage)}
          />
        </Grid>
      )} */}
      {count > 0 && progress === 100 && !correctionState && (
        <UserUploadCard
          toggle={(arg1: boolean, arg2: string) => props.toggle(arg1, arg2)}
          data={props.fileCheck === 'xls' ? uploadData : imageCardData}
          fileName={props.fileCheck}
          correction={handleCorrection}
          uploadProgressValue={(arg: number) => handleUploadProgress(arg)}
        />
      )}
      {/* {imageUpload && <BulkUpload />} */}
      {progress === 100 && (
        <>
          <Box sx={footerStyle}>
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1%' }}
            >
              <Button
                variant="outlined"
                sx={{ textTransform: 'capitalize' }}
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                // color="secondary"
                onClick={handleProceed}
                sx={{
                  backgroundColor: correctionState ? ' #0662B7' : '#82B1DB',
                  textTransform: 'capitalize',
                }}
                // disabled={true}
              >
                {progress === 100 && correctionState
                  ? 'Submit to reviewer'
                  : 'Proceed'}
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1%',
                marginTop: '1%',
              }}
            >
              <Button
                variant="text"
                color="secondary"
                onClick={handleDiscard}
                sx={{ fontSize: '12px', textTransform: 'capitalize' }}
              >
                {!correctionState && `Discard Error entries and Continue >`}
              </Button>
            </Box>
          </Box>
        </>
      )}
      {
        <CustomModal
          openSuccess={userBulkSuccessPopup}
          handleCloseSuccess={closeModal}
          successModalTitle={'User Details Uploaded Successfully'}
          successModalMsg={
            '  Organisation has been successully sent to the reviewer'
          }
          btn={' Close'}
        />
      }
      {
        <CustomModal
          openSuccess={openDiscard}
          handleCloseSuccess={() => setOpenDiscard(!openDiscard)}
          handleSuccess={handleContinue}
          successModalTitle={'Do You want to discard?'}
          discardModalMsg={
            'Want to discard corrections for error entires in the excel sheet and continue upload cards'
          }
          yesContinueBtn={'Yes, Continue'}
          closeBtn={'Close'}
        />
      }
      {
        <CustomModal
          openSuccess={openContinueDiscard}
          handleCloseSuccess={() =>
            setOpenContinueDiscard(!openContinueDiscard)
          }
          handleSuccess={handleCancel}
          successModalTitle={'Do You want to Cancel Bulk upload?'}
          discardModalMsg={
            'Want to discard corrections for error entires in the excel sheet and continue upload cards'
          }
          yesContinueBtn={'Yes, Continue'}
          closeBtn={'Close'}
        />
      }
    </PageLayout>
  );
}
