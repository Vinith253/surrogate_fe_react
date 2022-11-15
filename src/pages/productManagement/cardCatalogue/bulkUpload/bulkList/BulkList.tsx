import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PageLayout from "../../../../../components/layout/pageLayout/pageLayout";
import Box from "@mui/material/Box";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import TablePagination from "@mui/material/TablePagination";
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonProps,
  CircularProgress,
  Divider,
  TableFooter,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadCard from "../uploadCard/UploadCard";
import { bulkUpload } from "../../../../../utils/Constants";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white ,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: number,
  cardName: string,
  surrogateName: string,
  cardMode: string,
  cardType: string,
  interestRate: string,
  extraCard: string,
  CIBIL: number,
  salary: string,
  error: boolean
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
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    2,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "40,000",
    true
  ),
  createData(
    3,
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    4,
    "Premier",
    "CIBIL",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "20,000",
    true
  ),
  createData(
    5,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
];
const rows2 = [
  createData(
    1,
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    2,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "40,000",
    false
  ),
  createData(
    3,
    "Premier",
    "Card-For-Card",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
  createData(
    4,
    "Premier",
    "CIBIL",
    "Business",
    "Travel",
    "12%",
    "Non-Applicable",
    700,
    "20,000",
    false
  ),
  createData(
    5,
    "Premier",
    "Payroll",
    "Business",
    "Travel",
    "12%",
    "Applicable",
    700,
    "30,000",
    false
  ),
];

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} color="secondary" />
      </Box>
      <Box
        sx={{
          minWidth: 35,
          display: "flex",
          justifyContent: "flex-end",
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

export default function BulkList({ toggle }: any) {
  const [correctionState, setCorrectionState] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alignment, setAlignment] = useState("web");
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleCorrection = () => {
    setCorrectionState(!correctionState);
  };
  const handleProceed = () => {
    navigate("/productManagement/cardCatalogue");
  };
  let count = 2;
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // if (oldProgress === 100) {
        //   return 0;
        // }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setAlignment(value);
  };
  const progressBar = {
    borderRadius: "10px",
    height: "8px",
  };
  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: " rgb(240, 240, 240)",
    border: " rgb(240, 240, 240) 1px ",
    color: "black",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#1976d2",
    },
  }));
  const uploadData = {
    title: bulkUpload.CORRECTION_FILE,
    para: bulkUpload.DOWNLOAD_SAMPLE_CSV_XLS,
    downloadSample: bulkUpload.DOWNLOAD_ERROR_FILE,
    upload: bulkUpload.UPLOAD_CORRECTION_FILE,
  };
  const column = [
    { title: "#", dataIndex: "id", key: "id" },
    { title: "Card Name", dataIndex: "cardName", key: "cardName" },
    {
      title: "Surrogate Name",
      dataIndex: "surrogateName",
      key: "surrogateName",
    },
    { title: "Card Mode", dataIndex: "cardMode", key: "cardMode" },
    { title: "Card Type", dataIndex: "cardType", key: "cardType" },
    { title: "Interest Rate", dataIndex: "interestRate", key: "interestRate" },
    { title: "Extra Card", dataIndex: "extraCard", key: "extraCard" },
    { title: "CIBIL Score", dataIndex: "cibilScore", key: "cibilScore" },
    { title: "Salary Limit", dataIndex: "salaryLimit", key: "salaryLimit" },
  ];
  const data = [
    {
      id: 1,
      cardName: "Premier",
      surrogateName: "Card-For-Card",
      cardMode: "Business",
      cardType: "Travel",
      interestRate: "12%",
      extraCard: "Applicable",
      cibilScore: 700,
      salaryLimit: "30,000",
      error: false,
    },
    {
      id: 2,
      cardName: "Premier",
      surrogateName: "Payroll",
      cardMode: "Business",
      cardType: "Travel",
      interestRate: "12%",
      extraCard: "Non-Applicable",
      cibilScore: 700,
      salaryLimit: "40,000",
      error: true,
    },
    {
      id: 3,
      cardName: "Premier",
      surrogateName: "Card-For-Card",
      cardMode: "Business",
      cardType: "Travel",
      interestRate: "12%",
      extraCard: "Applicable",
      cibilScore: 700,
      salaryLimit: "30,000",
      error: false,
    },
    {
      id: 4,
      cardName: "Premier",
      surrogateName: "CIBIL",
      cardMode: "Business",
      cardType: "Travel",
      interestRate: "12%",
      extraCard: "Non-Applicable",
      cibilScore: 700,
      salaryLimit: "20,000",
      error: true,
    },
    {
      id: 5,
      cardName: "Premier",
      surrogateName: "Payroll",
      cardMode: "Business",
      cardType: "Travel",
      interestRate: "12%",
      extraCard: "Applicable",
      cibilScore: 700,
      salaryLimit: "30,000",
      error: false,
    },
  ];
  const rows = correctionState ? rows2 : rows1;
  return (
    <PageLayout>
      <Box sx={{ padding: "2% 0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2%",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            {progress === 100 ? "Validated" : "Validating Uploaded Document..."}
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
          padding: "2% 0",
          boxSizing: "unset",
          display: "flex",
          justifyContent: "space-between",
          gap: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5%",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            File Name:{progress === 100 && "arantic"}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            Record Found: {progress === 100 && "25"}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            Valid Records: {progress === 100 && "20"}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            Error Found: {progress === 100 && "02"}
          </Typography>
        </Box>
        {progress !== 100 && (
          <Alert
            severity="warning"
            icon={
              <CircularProgress
                color="inherit"
                sx={{ width: "20px !important", height: "20px !important" }}
              />
            }
          >
            validating the uploaded documents
          </Alert>
        )}
        {progress === 100 && !correctionState && (
          <Alert severity="error">{count} Error found in Uploaded File</Alert>
        )}
        {correctionState && <Alert severity="success">No Error found</Alert>}
      </Box>
      <Divider />
      <Box
        sx={{
          margin: "1% 0",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          // sx={ToggleBoxStyle}
        >
          <ColorButton value="web">All</ColorButton>
          <ColorButton value="android">Valid</ColorButton>
          <ColorButton value="ios">Error</ColorButton>
        </ToggleButtonGroup>
        {/* <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <ColorButton>All</ColorButton>
          <ColorButton>Valid</ColorButton>
          <ColorButton>Error</ColorButton>
        </ButtonGroup> */}
      </Box>
      {progress === 100 && (
        <TableContainer component={Paper} sx={{ margin: "2% 0" }}>
          <Table style={{ width: "100%" }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#8fc2f4" }}>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Card Name</StyledTableCell>
                <StyledTableCell>Surrogate Name</StyledTableCell>
                <StyledTableCell>Card Mode</StyledTableCell>
                <StyledTableCell>Card Type</StyledTableCell>
                <StyledTableCell>Interest Rate</StyledTableCell>
                <StyledTableCell>Extra Card</StyledTableCell>
                <StyledTableCell>CIBIL Score</StyledTableCell>
                <StyledTableCell>Salary Limit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow
                    key={row.id}
                    sx={{ backgroundColor: row.error ? "#ffe5e3" : "white" }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell>{row.cardName}</StyledTableCell>
                    <StyledTableCell>{row.surrogateName}</StyledTableCell>
                    <StyledTableCell>{row.cardMode}</StyledTableCell>
                    <StyledTableCell>{row.cardType}</StyledTableCell>
                    <StyledTableCell>{row.interestRate}</StyledTableCell>
                    <StyledTableCell>{row.extraCard}</StyledTableCell>
                    <StyledTableCell>{row.CIBIL}</StyledTableCell>
                    <StyledTableCell>{row.salary}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
      {count > 0 && progress === 100 && !correctionState && (
        <UploadCard
          toggle={toggle}
          data={uploadData}
          correction={handleCorrection}
        />
      )}
      {progress === 100 && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1%" }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleProceed}>
            Proceed
          </Button>
        </Box>
      )}
    </PageLayout>
  );
}
