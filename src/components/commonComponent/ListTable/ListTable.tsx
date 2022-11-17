import React, { useMemo, useState } from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Typography } from '@mui/material';
import GreenDot from '../../../assets/icons/greendot.svg';
import DroppedDot from '../../../assets/icons/droppeddot.svg';
import FailureDot from '../../../assets/icons/failuredot.svg';
import ProgressDot from '../../../assets/icons/progressdot.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/editColumn.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg';
import {
  rowsDataInterface,
  statusRowHeadingInterface,
} from '../../../pages/sales/dashboard/dashboard.const';
import PaginationComp from '../Pagination/Pagination';

function TableComp(props: {
  rows: rowsDataInterface[];
  statusRowsHeading: statusRowHeadingInterface[];
  flag: string;
  listRowHeading: statusRowHeadingInterface[];
  viewPath: string;
}) {
  const [graphView, setGraphView] = useState<number>(1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilterteredData] = useState(props.rows);

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

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, graphView]);

  return (
    <div className="table-div">
      <div className="third-header">
        <div className={'outer-filter-box'}>
          <div className={graphView === 1 ? 'selectedBox' : 'filter-box'}>
            <li
              onClick={() => {
                setFilterteredData(props.rows);
                setCurrentPage(1);
                setPage(1);
                setGraphView(1);
              }}
              className={
                graphView === 1 ? 'selected-overview-text3' : 'overview-text3'
              }
            >
              All
            </li>
          </div>
          <div className="seperater-div" />
          <div className={graphView === 2 ? 'selectedBox' : 'filter-box'}>
            <li
              onClick={() => {
                const currentData = props.rows.filter(function (item) {
                  return item.status === 'Approved';
                });
                setFilterteredData(currentData);
                setCurrentPage(1);
                setPage(1);
                setGraphView(2);
              }}
              className={
                graphView === 2 ? 'selected-overview-text3' : 'overview-text3'
              }
            >
              Approved
            </li>
          </div>
          <div className="seperater-div" />
          <div className={graphView === 3 ? 'selectedBox' : 'filter-box'}>
            <li
              onClick={() => {
                const currentData = props.rows.filter(function (item) {
                  return item.status === 'In-Progress';
                });
                setFilterteredData(currentData);
                setCurrentPage(1);
                setPage(1);
                setGraphView(3);
              }}
              className={
                graphView === 3 ? 'selected-overview-text3' : 'overview-text3'
              }
            >
              In-Progress
            </li>
          </div>
          <div className="seperater-div" />
          <div className={graphView === 4 ? 'selectedBox' : 'filter-box'}>
            <li
              onClick={() => {
                const currentData = props.rows.filter(function (item) {
                  return item.status === 'Rejected';
                });
                setFilterteredData(currentData);
                setCurrentPage(1);
                setPage(1);
                setGraphView(4);
              }}
              className={
                graphView === 4 ? 'selected-overview-text3' : 'overview-text3'
              }
            >
              Rejected
            </li>
          </div>
          <div className="seperater-div" />
          <div className={graphView === 5 ? 'selectedBox' : 'filter-box'}>
            <li
              onClick={() => {
                const currentData = props.rows.filter(function (item) {
                  return item.status === 'Dropped';
                });
                setFilterteredData(currentData);
                setCurrentPage(1);
                setPage(1);
                setGraphView(5);
              }}
              className={
                graphView === 5 ? 'selected-overview-text3' : 'overview-text3'
              }
            >
              Dropped
            </li>
          </div>
        </div>
        {props.flag === 'dashboard' && (
          <div className="reset-data">
            <Button
              startIcon={<EditIcon />}
              sx={{
                fontSize: '1vw',
                marginLeft: '56px',
                color: '#0662B7',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Edit Columns
            </Button>
          </div>
        )}
        {props.flag === 'dashboard' && (
          <div className="reset-data">
            <Button
              endIcon={<RightArrow />}
              sx={{
                fontSize: '1vw',
                marginLeft: '35px',
                color: '#0662B7',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Detailed Reports
            </Button>
          </div>
        )}
      </div>

      <Grid container spacing={0}>
        <Grid item sm={7}>
          <TableContainer sx={{maxWidth:'950px'}}>
            <Table aria-label="simple table">
              <TableHead>
                {props?.listRowHeading.map((row) => (
                  <TableRow sx={{ backgroundColor: '#EFF7FE' }}>
                    <TableCell
                      scope="row"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                      }}
                    >
                      {row?.header1}
                    </TableCell>
                    <TableCell
                      align="left"
                      scope="row"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '100px',
                      }}
                    >
                      {row?.header2}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '150px',
                      }}
                    >
                      {row?.header3}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '150px',
                      }}
                    >
                      {row?.header4}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '100px',
                      }}
                    >
                      {row?.header5}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '150px',
                      }}
                    >
                      {row?.header6}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '150px',
                      }}
                    >
                      {row?.header7}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '100px',
                      }}
                    >
                      {row?.header8}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '100px',
                      }}
                    >
                      {row?.header9}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 'bold',
                        borderBottom: 'none',
                        backgroundColor: '#EFF7FE',
                        minWidth: '100px',
                      }}
                    >
                      {row?.header10}
                    </TableCell>
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {currentTableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: 'none', height: '68px' }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {'#'}
                      {row.applicationNum}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.customerName}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.mobileNum}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.lead}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.surrogateName}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.dateTime}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.Policy}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.channelName}
                    </TableCell>
                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                      {row.processedBy}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item sm={5}>
          <div style={{ boxShadow: '-10px 0 8px 0 #EDEDED' }}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  {props?.statusRowsHeading.map((row) => (
                    <TableRow sx={{ backgroundColor: '#EFF7FE' }}>
                      <TableCell
                        component="th"
                        align="left"
                        scope="row"
                        sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                      >
                        {row?.header1}
                      </TableCell>
                      <TableCell
                        component="th"
                        align="left"
                        scope="row"
                        sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                      >
                        {row?.header2}
                      </TableCell>
                      <TableCell
                        component="th"
                        align="left"
                        scope="row"
                        sx={{ fontWeight: 'bold', borderBottom: 'none' }}
                      >
                        {row?.header3}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableHead>
                <TableBody>
                  {currentTableData.map((row: any) => (
                    <TableRow key={row.id} sx={{ borderBottom: 'none' }}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: 'none' }}
                      >
                        {row?.kycStatus?.includes('Success') &&
                          kycStatus(row?.kycStatus, GreenDot, '#6AB06E')}
                        {row?.kycStatus?.includes('Progress') &&
                          kycStatus(row.kycStatus, ProgressDot, '#F37B21')}
                        {row?.kycStatus?.includes('Failure') &&
                          kycStatus(row?.kycStatus, FailureDot, '#E63946')}
                        {row?.kycStatus.includes('Dropped') &&
                          kycStatus(row?.kycStatus, DroppedDot, '#992D26')}
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: 'none' }}>
                        {row?.status?.includes('Approved') &&
                          kycStatus(row?.status, GreenDot, '#6AB06E')}
                        {row?.status?.includes('In-Progress') &&
                          kycStatus(row?.status, ProgressDot, '#F37B21')}
                        {row?.status?.includes('Rejected') &&
                          kycStatus(row?.status, FailureDot, '#E63946')}
                        {row?.status?.includes('Dropped') &&
                          kycStatus(row?.status, DroppedDot, '#992D26')}
                      </TableCell>
                      <TableCell align="left" sx={{ borderBottom: 'none' }}>
                        {/* <div className="reset-data"> */}
                        <a href={props.viewPath}>View</a>
                        {/* </div> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
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
            page === Math.ceil(filteredData.length / rowsPerPage)
          }
        />
      </Grid>
    </div>
  );
}

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

export default TableComp;
