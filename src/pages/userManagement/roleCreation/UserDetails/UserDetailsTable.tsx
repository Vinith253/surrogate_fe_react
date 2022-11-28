import {
  Box,
  Grid,
  IconButton,
  Link,
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
import PaginationComp from '../../../../components/commonComponent/Pagination/Pagination';
import UnfoldMoreIcon from '../../../../assets/icons/sortArrow.svg';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);

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
  }, [currentPage, rowsPerPage, props.filterdata[0]]);

  const closeModal = () => {
    setShowPauseModal(false);
  };

  const employeeDetailsRowOne = [
    {
      Key: 'Employee Name',
      value: 'Parithi',
    },
    {
      Key: 'Employee ID',
      value: 'YES211',
    },
    {
      Key: 'Date of Joining',
      value: '10/07/2022',
    },
    {
      Key: 'Mobile Number',
      value: '9876543210',
    },
    {
      Key: 'Email ID',
      value: 'Parithi@yes.com',
    },
  ];

  const employeeDetailsRowTwo = [
    {
      Key: 'Designation',
      value: 'Sales Manager',
    },
    {
      Key: 'Reporting Head',
      value: 'Ganesh',
    },
    {
      Key: 'Role Access Type',
      value: 'Reviewer',
    },
    {
      Key: 'Employee Status',
      value: 'Active',
    },
  ];

  const employeeDetailsRowThree = [
    {
      Key: 'State',
      value: 'Tamil Nadu',
    },
    {
      Key: 'Zone',
      value: 'South Zone',
    },
    {
      Key: 'District',
      value: 'Dindigul',
    },
    {
      Key: 'Branch',
      value: 'palani',
    },
  ];

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
                            <Link
                              onClick={() => setShowPauseModal(true)}
                              className="user-details-link"
                            >
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
                            <Link
                              onClick={() => setShowPauseModal(true)}
                              className="user-details-link"
                            >
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
                            <Link
                              onClick={() => setShowPauseModal(true)}
                              className="user-details-link"
                            >
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
            setPage(
              Math.ceil(props.filterdata[0].sub_module.length / rowsPerPage)
            );
            setCurrentPage(
              Math.ceil(props.filterdata[0].sub_module.length / rowsPerPage)
            );
          }}
          onFirstClick={() => {
            setPage(1);
            setCurrentPage(1);
          }}
          lastButtonDisabled={
            page ===
            Math.ceil(props.filterdata[0].sub_module.length / rowsPerPage)
          }
        />
      </Grid>
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          employeeDetailsRowOne={employeeDetailsRowOne}
          employeeDetailsRowTwo={employeeDetailsRowTwo}
          employeeDetailsRowThree={employeeDetailsRowThree}
          title={'Employee Details'}
          duplicateRoleCloseBtn={' Close'}
        />
      )}

      <Box
        sx={{
          marginTop: '10px',
          backgroundColor: 'white',
          // position: 'fixed',
          // bottom: 0,
          // right: 0,
          width: '100%',
          borderTop: '2px solid #f3f3f3 ',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            padding: '15px',
          }}
        >
          <BtnContained title="Close" />
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetailsTable;
