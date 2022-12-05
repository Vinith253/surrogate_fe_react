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
  Typography,
  TextField,
  IconButton,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from '@mui/material';

import { useMemo, useState, useEffect } from 'react';
import { colors } from '../../../style/Color';
import PaginationComp from '../Pagination/Pagination';
import './style.scss';
import GreenDot from '../../../assets/icons/greendot.svg';
import DroppedDot from '../../../assets/icons/droppeddot.svg';
import FailureDot from '../../../assets/icons/failuredot.svg';
import ProgressDot from '../../../assets/icons/progressdot.svg';
import retargetingIcon from '../../../assets/icons/retargeting_icon.svg';
import { SearchOutlined } from '@mui/icons-material';
import { ReactComponent as EditIcon } from '../../../assets/icons/editColumn.svg';
import { lmsDataInterface } from '../../../interface/Types';
import CheckBoxModal from '../customModal/PopoverModal';
import GroupButton from '../GroupButton/GroupButton';
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg';

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
  toggleOptions?: any;
};

const indexKey = 'index';
function kycStatus(
  status: string,
  imageDot: string | undefined,
  _textColor: string
) {
  return (
    <div className="status-box">
      <div className="dotIcon">
        <img src={imageDot} alt={'status-icon'} />
      </div>
      <div>
        <Typography
          sx={{ fontWeight: 'bold', color: _textColor, fontSize: '14px' }}
        >
          {status}
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', color: 'grey', fontSize: '10px' }}
        >
          22/02/022 - 7.30 PM
        </Typography>
      </div>
    </div>
  );
}

const ListLMSTable = (props: any) => {
  const {
    listColumn,
    statusColumn,
    toggleOptions,
    isItemSelected = null,
    selectedKey = indexKey,
  }: dataProps = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilterteredData] = useState<any>(props.data);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [filteredHeader, setFilterteredHeader] = useState(listColumn);
  const [visibleHeader, setVisibleHeader] = useState([]);
  const [alignment, setAlignment] = useState('All');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // {
  //   id: 1,
  //   label: lmsTableHeader.HEADING1,
  //   defaultChecked: true,
  // },

  const filterColumn = () => {
    const res = listColumn.map((item: columnType, index: number) => {
      if (item.title !== '') {
        return {
          id: index + 1,
          label: item.title,
          defaultChecked: true,
        };
      }
      return null;
    });
    const result = res.filter((item: any) => {
      if (item?.label) {
        return item;
      }
    });
    setVisibleHeader(result);
  };

  useEffect(() => {
    const res = filterColumn();
    return res;
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
  const handleClose = (categories: any) => {
    // console.log(categories, 'categories');
    handleCloseSuccess(categories);
  };
  useEffect(() => {
    if (alignment === 'Approved') {
      let res = props.data.filter((item: any) => item.status === 'Approved');
      setFilterteredData(res);
    } else if (alignment === 'In-Progress') {
      let res1 = props.data.filter(
        (item: any) => item.status === 'In-Progress'
      );
      setFilterteredData(res1);
    } else if (alignment === 'Rejected') {
      let res2 = props.data.filter((item: any) => item.status === 'Rejected');
      setFilterteredData(res2);
    } else if (alignment === 'Dropped') {
      let res3 = props.data.filter((item: any) => item.status === 'Dropped');
      setFilterteredData(res3);
    }else if (alignment === 'Refer') {
      let res3 = props.data.filter((item: any) => item.status === 'Refer');
      setFilterteredData(res3);
    } else {
      setFilterteredData(props.data);
    }
  }, [alignment]);
  console.log('filteredData', filteredData);
  const handleChange = (value: any) => {
    console.log('handleChange', value);
    setAlignment(value.title);
  };

  const updatedListData = (categories: any, newArr: any) => {
    console.log(newArr, 'newArr');
    console.log('categories', categories);

    // let updatedList = categories?.map(
    //   (item: { label: string; defaultChecked: boolean }) => {
    //     if (item.defaultChecked === false) {
    //       const result = listColumn?.map((item2: columnType) => {
    //         if (item.label === item2.title) {
    //           return item2;
    //           // newArr = newArr.map(({item2.dataIndex , ...rest }: any) => {
    //           //   return rest;
    //           // });
    //         }
    //       });
    //       return result;
    //       //gets everything that was already in item, and updates "done"
    //     }
    //     // else return unmodified item
    //   }
    // );
  };
  const ColorButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: ' rgb(240, 240, 240)',
    border: ' rgb(240, 240, 240) 1px ',
    color: 'black',
    textTransform: 'capitalize',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: '#1976d2',
    },
  }));

  const handleCloseSuccess = (categories: any) => {
    setAnchorEl(null);
    const collections = {};
    setVisibleHeader(categories);
    let newArr = props.data;
    console.log(categories, 'categories');

    const fullHeader = listColumn;

    const checkedArray = categories.filter(
      (value: any) => value.defaultChecked === true
    );

    let arr: any = [];

    const newList = checkedArray.map((item: any) => {
      listColumn.map((item2: any) => {
        if (item.label === item2.title) {
          arr.push(item2);
        }
      });
    });

    setFilterteredHeader(arr);

    updatedListData(categories, newArr);
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return filteredData?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, filteredData]);
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
  const [btnActive, setBtnActive] = useState(true);

  return (
    <Box sx={{ backgroundColor: 'white' }} className="lms-table">
      <Stack sx={{ padding: '25px 30px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '25px',
          }}
        >
          <div>
            {props.flag === 'retargeting' && (
              <Button
                variant="contained"
                color="secondary"
                disabled={btnActive}
                sx={{
                  padding: '3px 10px',
                  fontSize: '1vw',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'capitalize',
                  letterSpacing: '0.0025em',
                  marginRight: '30px',
                }}
              >
                <IconButton sx={{ padding: '0', marginRight: '8px' }}>
                  <img
                    src={retargetingIcon}
                    alt="retargetingIcon"
                    style={{
                      filter:
                        btnActive === true
                          ? 'invert(100%) sepia(13%) saturate(7%) hue-rotate(300deg) brightness(89%) contrast(99%)'
                          : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(102%) contrast(102%)',
                      opacity: btnActive === true ? '0.3' : '1',
                    }}
                  />
                </IconButton>
                Retarget
              </Button>
            )}
          </div>

          {(props.flag === 'sales-report' ||
            props.flag === 'retargeting' ||
            props.flag === 'lms-rule' ||
            props.flag === 'lmsdashboard') && (
            <TextField
              className="text-field"
              placeholder="Search by..."
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          )}
          <div className="third-header">
            <GroupButton
              data={toggleOptions}
              onChange={(arg1: any) => handleChange(arg1)}
            />

            {(props.flag === 'dashboard' ||
              props.flag === 'sales-report' ||
              props.flag === 'retargeting' ||
              props.flag === 'lmsdashboard') && (
              <div className="reset-data">
                <Button
                  startIcon={<EditIcon />}
                  aria-describedby={id}
                  sx={{
                    fontSize: '1vw',
                    marginLeft: '56px',
                    color: '#0662B7',
                    fontWeight: '600',
                    textTransform: 'none',
                  }}
                  onClick={handleClick}
                >
                  Edit Columns
                </Button>
              </div>
            )}
          </div>
        </div>

        <Grid container spacing={0}>
          <Grid item sm={9}>
            <TableContainer
              component={Paper}
              sx={{ maxWidth: '950px' }}
              className="table1"
            >
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
                    {filteredHeader.map((item: any, index: number) => {
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
                        {filteredHeader.map((columnItem: any) => {
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
            <div style={{ boxShadow: '-10px 0 8px 0 #EDEDED' }}>
              <TableContainer>
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
                                  columnItem.onClick
                                    ? columnItem.onClick()
                                    : null
                                }
                              >
                                {columnItem.dataIndex === 'status' ? (
                                  <Box>
                                    {dataItem?.status?.includes('Approved') &&
                                      kycStatus(
                                        dataItem?.status,
                                        GreenDot,
                                        '#6AB06E'
                                      )}
                                    {dataItem?.status?.includes(
                                      'In-Progress'
                                    ) &&
                                      kycStatus(
                                        dataItem?.status,
                                        ProgressDot,
                                        '#F37B21'
                                      )}
                                    {dataItem?.status?.includes('Rejected') &&
                                      kycStatus(
                                        dataItem?.status,
                                        FailureDot,
                                        '#E63946'
                                      )}
                                    {dataItem?.status?.includes('Dropped') &&
                                      kycStatus(
                                        dataItem?.status,
                                        DroppedDot,
                                        '#992D26'
                                      )}
                                    {dataItem?.status?.includes('Pending') &&
                                      kycStatus(
                                        dataItem?.status,
                                        ProgressDot,
                                        '#E4AC04'
                                      )}
                                      {dataItem?.status?.includes('Refer') &&
                                      kycStatus(
                                        dataItem?.status,
                                        ProgressDot,
                                        '#F37B21'
                                      )}

                                    {dataItem?.status?.includes(
                                      'Sent To Approver'
                                    ) &&
                                      kycStatus(
                                        dataItem?.status,
                                        GreenDot,
                                        '#6AB06E'
                                      )}
                                  </Box>
                                ) : (
                                  renderColoumn(dataItem, columnItem, index)
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
        <Grid>
          <PaginationComp
            rows={filteredData}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            onPageChange={onPageChange}
            onLastClick={() => {
              setPage(Math.ceil(filteredData?.length / rowsPerPage));
              setCurrentPage(Math.ceil(filteredData?.length / rowsPerPage));
            }}
            onFirstClick={() => {
              setPage(1);
              setCurrentPage(1);
            }}
            lastButtonDisabled={
              page === Math.ceil(filteredData?.length / rowsPerPage)
            }
          />
        </Grid>
      </Stack>
      {visibleHeader.length !== 0 && (
        <CheckBoxModal
          openSuccess={open}
          handleCloseSuccess={handleClose}
          title={'Surrogate Selection'}
          close={'Reset'}
          submit={'Select'}
          anchorEl={anchorEl}
          product_label={visibleHeader}
          id={id}
          showSearch={true}
        />
      )}
    </Box>
  );
};
export default ListLMSTable;
