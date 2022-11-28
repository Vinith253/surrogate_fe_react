import {
  Box,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import PaginationComp from '../../../../components/commonComponent/Pagination/Pagination';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';
import { AnyCnameRecord } from 'dns';

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
  title?: string;
  dataIndex?: string;
  key?: string;
  onClick?: any;
  sortColumn?: boolean;
  filterdata: any;
};

const UserDetailsTable = (props: any) => {
  console.log('props--------', props);
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
    return props.filterdata[0].sub_module.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, props.data]);

  return (
    <Box sx={{ padding: '0 30px' }}>
      <TableContainer
        component={Paper}
        sx={{ margin: '2% 0', boxShadow: 'none' }}
      >
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
            {currentTableData?.map((item: any) => {
              return (
                <>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        backgroundColor: 'white',
                      }}
                    >
                      {item.sub_module_id}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        backgroundColor: 'white',
                      }}
                    >
                      {item.sub_module_data.initiator_data.map((data: any) => {
                        return (
                          <TableRow>
                            <Link className="user-details-link">
                              {data.user_name}
                            </Link>
                          </TableRow>
                        );
                      })}
                    </StyledTableCell>

                    <StyledTableCell
                      sx={{
                        backgroundColor: 'white',
                      }}
                    >
                      {item.sub_module_data.reviewer_data.map((data: any) => {
                        return (
                          <TableRow>
                            <Link className="user-details-link">
                              {data.user_name}
                            </Link>
                          </TableRow>
                        );
                      })}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        backgroundColor: 'white',
                      }}
                    >
                      {item.sub_module_data.approver_data.map((data: any) => {
                        return (
                          <TableRow>
                            <Link className="user-details-link">
                              {data.user_name}
                            </Link>
                          </TableRow>
                        );
                      })}
                    </StyledTableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid>
        <PaginationComp
          rows={props.filterdata[0].sub_module}
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

export default UserDetailsTable;
