import { useMemo, useState } from 'react';

// MUI components
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// Styles
import { colors } from '../../../style/Color';

// Common components
import PaginationComp from '../Pagination/Pagination';

// Types
type columnType = {
  title: string;
  dataIndex: string;
  key: string;
  onClick?: any;
  headerRender?: any;
  render?: any;
  width?: any;
};
const indexKey = 'index';

// Component begins here
const CommonTable = (props: {
  column: Array<columnType>;
  data: any;
  isItemSelected?: any;
  selectedKey?: string;
  pagination?: {
    totaLNoOfRecords: number;
    totalNoOfPages: number;
    pageSize: number;
    pageNumber: number;
    onPageChange: Function;
    onPageSizeChange: Function;
  };
}) => {
  const {
    column,
    isItemSelected = null,
    selectedKey = indexKey,
    pagination,
  } = props;
  const [rowsPerPage, setRowsPerPage] = useState(pagination?.pageSize || 10);
  const [currentPage, setCurrentPage] = useState(pagination?.pageNumber || 0);
  console.log('propssssss', props);
  // Pagination methods
  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
    pagination?.onPageChange && pagination?.onPageChange(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
    pagination?.onPageSizeChange &&
      pagination?.onPageSizeChange(parseInt(event.target.value, 10));
  };

  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    pagination?.onPageChange && pagination?.onPageChange(page);
  };

  // Table data
  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * rowsPerPage;
  //   const lastPageIndex = firstPageIndex + rowsPerPage;
  //   return props.data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, rowsPerPage, props.data]);

  // Each table cell of table body
  const renderColoumn = (
    dataItem: any,
    columnItem: columnType,
    index: number
  ) => {
    if (dataItem[columnItem.dataIndex]) {
      if (columnItem?.render) {
        return columnItem?.render(
          dataItem[columnItem.dataIndex],
          dataItem,
          index
        );
      }
      return dataItem[columnItem.dataIndex];
    }
    return '--';
  };

  const selectedRow = (data: any, index: number) => {
    const defaultStyle = { background: colors.white };
    const selected = { background: colors.tableGrey };
    if (isItemSelected) {
      if (selectedKey === indexKey) {
        if (isItemSelected.includes(index)) {
          return selected;
        }
        return defaultStyle;
      }
      if (isItemSelected.includes(data[selectedKey])) {
        return selected;
      }
      return defaultStyle;
    }
    return defaultStyle;
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ margin: '0' }}>
        <Table
          style={{
            width: '100%',
            borderBottom: 'none',
            overflowX: 'auto',
          }}
          aria-label="customized table"
        >
          <TableHead
            sx={{
              backgroundColor: colors.tableHeaderLightBlue,
              padding: '10px',
            }}
          >
            <TableRow sx={{ padding: '10px' }}>
              {column.map((item: columnType, index: number) => {
                return (
                  <TableCell
                    sx={{
                      padding: '10px',
                      fontWeight: 800,
                    }}
                    style={{ borderBottom: 'none' }}
                    width={item.width}
                  >
                    {item?.headerRender
                      ? item?.headerRender(item.title, item, index)
                      : item.title}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data?.map((dataItem: any, index: number) => {
              return (
                <TableRow
                  sx={{ padding: '10px', height: '45px' }}
                  style={selectedRow(dataItem, index)}
                >
                  {column.map((columnItem: columnType) => {
                    return (
                      <TableCell
                        sx={{
                          padding: '10px',
                        }}
                        style={{ borderBottom: 'none' }}
                        onClick={() =>
                          columnItem.onClick ? columnItem.onClick() : null
                        }
                      >
                        {renderColoumn(dataItem, columnItem, index)}
                      </TableCell>
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
          rows={props.data} //Unnecessary prop, remove while integrating other non-common table paginations
          totalRecordCount={pagination?.totaLNoOfRecords || 0}
          totalPages={pagination?.totalNoOfPages || 0}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          handleChangePage={handlePageChange}
          handleChangeRowsPerPage={handleRowsPerPageChange}
          onPageChange={onPageChange} //This is same as handlePageChange. Remove while integrating other non-common table paginations
          onLastClick={(event) => {
            // setCurrentPage(Math.ceil(props.data.length / rowsPerPage));
            handlePageChange(
              event,
              pagination?.totalNoOfPages ? pagination?.totalNoOfPages - 1 : 0
            );
          }}
          onFirstClick={(event) => {
            handlePageChange(event, 0);
          }}
          lastButtonDisabled={
            currentPage === Math.ceil(props.data.length / rowsPerPage)
          }
        />
      </Grid>
    </Box>
  );
};
export default CommonTable;
