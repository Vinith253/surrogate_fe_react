import {
  Box,
  Grid,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useMemo, useState } from 'react';
import PaginationComp from '../Pagination/Pagination';
import UnfoldMoreIcon from '../../../assets/icons/sortArrow.svg';

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
type columnType = {
  title: string;
  dataIndex: string;
  key: string;
  onClick: any;
  sortColumn: boolean;
};

const CommonTable = (props: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

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
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return props.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, props.data]);
  return (
    <Box>
      <TableContainer component={Paper} sx={{ margin: '2% 0' }}>
        <Table style={{ width: '100%' }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: '#EEF7FF' }}>
            <TableRow>
              {props.column.map((item: columnType) => {
                return (
                  <StyledTableCell>
                    {item.title}
                    {item.sortColumn && (
                      <IconButton>
                        <img src={UnfoldMoreIcon} alt="Sort Icon" />
                      </IconButton>
                    )}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTableData?.map((dataItem: any) => {
              return (
                <TableRow
                  sx={{
                    backgroundColor: dataItem?.error ? '#ffe5e3' : 'white',
                  }}
                >
                  {props.column.map((columnItem: columnType) => {
                    return (
                      <StyledTableCell
                        onClick={() =>
                          columnItem.onClick
                            ? columnItem.onClick(dataItem.copyLink)
                            : null
                        }
                      >
                        {dataItem[columnItem.dataIndex]
                          ? dataItem[columnItem.dataIndex]
                          : '--'}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid>
        <PaginationComp
          rows={props.data}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          onPageChange={onPageChange}
          onLastClick={() => {
            setPage(Math.ceil(props.data.length / rowsPerPage));
            setCurrentPage(Math.ceil(props.data.length / rowsPerPage));
          }}
          onFirstClick={() => {
            setPage(1);
            setCurrentPage(1);
          }}
          lastButtonDisabled={
            page === Math.ceil(props.data.length / rowsPerPage)
          }
        />
      </Grid>
    </Box>
  );
};

export default CommonTable;
