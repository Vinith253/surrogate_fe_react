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
import { useMemo, useState } from 'react';
import { colors } from '../../../style/Color';
import PaginationComp from '../Pagination/Pagination';

type columnType = {
  title: string;
  dataIndex: string;
  key: string;
  onClick: any;
  headerRender?: any;
  render?: any;
  width?: any;
};

type columnArr = columnType[];

type dataProps = {
  column: columnArr;
  isItemSelected: any;
};

const CommonTable = (props: any) => {
  const { column, isItemSelected }: dataProps = props;
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

  return (
    <Box>
      <TableContainer component={Paper} sx={{ margin: '2% 0' }}>
        <Table
          style={{
            width: '100%',
            borderBottom: 'none',
          }}
          aria-label="customized table"
        >
          <TableHead
            sx={{
              backgroundColor: colors.tableHeaderLightBlue,
              padding: '5px',
            }}
          >
            <TableRow sx={{ padding: '5px' }}>
              {column.map((item: columnType, index: number) => {
                return (
                  <TableCell
                    sx={{
                      padding: '5px',
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
            {currentTableData?.map((dataItem: any, index: number) => {
              console.log('dataItem', dataItem);
              return (
                <TableRow
                  sx={{ padding: '5px' }}
                  style={
                    isItemSelected === true
                      ? { background: colors.tableGrey }
                      : { background: colors.white }
                  }
                >
                  {column.map((columnItem: columnType) => {
                    console.log('columnItem', columnItem);
                    console.log('dataItem[]', dataItem['copyIcon']);
                    return (
                      <TableCell
                        sx={{
                          padding: '5px',
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
