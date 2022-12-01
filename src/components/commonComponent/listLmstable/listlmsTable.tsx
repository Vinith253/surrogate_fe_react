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
  Stack,
} from '@mui/material';

import { useMemo, useState } from 'react';
import { colors } from '../../../style/Color';
import PaginationComp from '../Pagination/Pagination';
import './style.scss';

type columnType = {
  title: string;
  dataIndex: string;
  key: string;
  onClick: any;
  headerRender?: any;
  render?: any;
  width?: any;
};
// type columnArr = columnType[];
type dataProps = {
  listColumn: any;
  isItemSelected?: any;
  selectedKey?: string;
  statusColumn: any;
};

const indexKey = 'index';
const ListLMSTable = (props: any) => {
  const {
    listColumn,
    statusColumn,
    isItemSelected = null,
    selectedKey = indexKey,
  }: dataProps = props;
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
    <Box sx={{ backgroundColor: 'white' }}>
      <Stack sx={{ padding: '25px' }}>
        <Grid container spacing={0}>
          <Grid item sm={9}>
            <TableContainer component={Paper} sx={{ maxWidth: '950px' }} className="table1">
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
                    {listColumn.map((item: any, index: number) => {
                      return (
                        <TableCell
                          sx={{
                            padding: '10px',
                            fontWeight: 800,
                            borderBottom: 'none',
                            height: '68px',
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
                  {currentTableData?.map((dataItem: any, index: number) => {
                    return (
                      <TableRow
                        sx={{ padding: '10px', height: '45px' }}
                        style={selectedRow(dataItem, index)}
                      >
                        {listColumn.map((columnItem: any) => {
                          return (
                            <TableCell
                              sx={{
                                padding: '10px',
                                borderBottom: 'none',
                                height: '68px',
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
          </Grid>
          <Grid item sm={3}>
            <TableContainer component={Paper}>
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
                    {statusColumn.map((item: columnType, index: number) => {
                      return (
                        <TableCell
                          sx={{
                            padding: '10px',
                            fontWeight: 800,
                            borderBottom: 'none',
                            height: '68px',
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
                  {currentTableData?.map((dataItem: any, index: number) => {
                    return (
                      <TableRow
                        sx={{ padding: '10px', height: '45px' }}
                        style={selectedRow(dataItem, index)}
                      >
                        {statusColumn.map((columnItem: columnType) => {
                          return (
                            <TableCell
                              sx={{
                                padding: '10px',
                                borderBottom: 'none',
                                height: '68px',
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
          </Grid>
        </Grid>
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
      </Stack>
    </Box>
  );
};
export default ListLMSTable;
