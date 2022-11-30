import {
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  MenuItem,
  Menu,
  IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../../../style/Color';
import { programMmgt } from '../../../../../utils/Constants';
import { checkTagStatus } from '../../../../../utils/tagBasedIndicator/tagStatus';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';
export interface dataList {
  surrogateProgramme: string;
  lastModify: string;
  status: string;
  autoResumeForm: string;
  StatusActiveDate: string;
  activeSince: string;
  id: number;
  resumeItNow: string;
  resumeStatus: string;
}
export interface dataHeaderList {
  surrogateProgramme: string;
  activeSince?: string;
  lastModify?: string;
  status?: string;
  autoResumeForm?: string;
  more?: string;
}
const tableHeaderData = [
  {
    surrogateProgramme: 'Surrogate Programme',
    activeSince: 'Active Since',
    lastModify: 'Last Modified',
    status: 'Status',
    autoResumeForm: 'Auto Resume From',
    more: 'More',
  },
];
export const ListView = ({ data }: any) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState<number[]>([]);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  // const [isPauseModal, setIsPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showResumeSuccessModal, setShowResumeSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);
  const [pauseMethod, setPauseMethod] = useState('Pause Now');
  const [sortingData, setSortingData] = useState(data);
  const [ascending, setAscending] = useState<boolean>(true);
  const open = Boolean(anchorElement);
  const filterData = () => {
    const sort = sortingData.sort((a: dataList, b: dataList) => {
      if (ascending) {
        return a.surrogateProgramme < b.surrogateProgramme ? -1 : 1;
      }
      return a.surrogateProgramme > b.surrogateProgramme ? -1 : 1;
    });
    setSortingData([...sort]);
  };
  useEffect(() => {
    filterData();
  }, [ascending]);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const isSelected = (id: number) => {
    const res = selected.indexOf(id);
    if ((res && res !== -1) || res === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleClickCheckbox = (id: number) => {
    const result = isSelected(id);
    let selectedData = selected;
    if (result) {
      const index = selected.indexOf(id);
      selectedData.splice(index, 1);
      setSelected([...selectedData]);
    } else {
      setSelected([...selectedData, id]);
    }
  };
  const handleSortByName = () => {
    setAscending(!ascending);
  };
  const closeModal = () => {
    setShowPauseModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowResumeModal(false);
    setShowResumeSuccessModal(false);
  };
  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';
  const pauseMethodChange = (value: any) => {
    setPauseMethod(value);
  };
  const successModal = () => {
    if (pauseMethod === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
      console.log('success');
    }
    if (pauseMethod === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
      console.log('fail');
    }
  };
  const resumeSuccessModal = () => {
    setShowResumeSuccessModal(true);
    setShowResumeModal(false);
  };
  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table
          aria-label="Table"
          sx={{
            borderBottom: 'none',
          }}
        >
          <TableHead
            style={{ background: colors.tableHeaderLightBlue }}
            sx={{ padding: '5px' }}
          >
            {tableHeaderData.map((items: dataHeaderList, index: number) => (
              <TableRow
                key={index}
                style={{ padding: '5px', borderBottom: 'none' }}
              >
                <TableCell sx={{ padding: '5px', borderBottom: 'none' }}>
                  <Checkbox
                    color={'secondary'}
                    indeterminate={
                      selected.length > 0 && selected.length < data.length
                    }
                    checked={data.length > 0 && selected.length === data.length}
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                >
                  {items.surrogateProgramme}
                  <IconButton onClick={() => handleSortByName()}>
                    <img src={UnfoldMoreIcon} alt="Sort Icon" />
                  </IconButton>
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                >
                  {items.activeSince}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                >
                  {items.lastModify}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                >
                  {items.status}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                  align="center"
                >
                  {items.autoResumeForm}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px', borderBottom: 'none' }}
                >
                  {items.more}
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {sortingData.length > 0 &&
              sortingData.map((dataItem: dataList, index: number) => {
                const isItemSelected = isSelected(dataItem.id);
                console.log('isItemSelected', isItemSelected);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    key={index}
                    sx={{ padding: '5px', borderBottom: 'none' }}
                    style={
                      isItemSelected === true
                        ? { background: colors.tableGrey }
                        : { background: colors.white }
                    }
                  >
                    <TableCell
                      padding={'checkbox'}
                      sx={{ padding: '5px', borderBottom: 'none' }}
                    >
                      <Checkbox
                        color={'secondary'}
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onChange={() => handleClickCheckbox(dataItem.id)}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: '5px', borderBottom: 'none' }}>
                      {dataItem.surrogateProgramme}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: checkTagStatus(dataItem.activeSince).color,
                        padding: '5px',
                        borderBottom: 'none',
                      }}
                    >
                      {dataItem.activeSince}
                    </TableCell>
                    <TableCell sx={{ padding: '5px', borderBottom: 'none' }}>
                      {dataItem.lastModify}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: checkTagStatus(dataItem.status).color,
                        padding: '5px',
                        borderBottom: 'none',
                      }}
                    >
                      {dataItem.status}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ padding: '5px', borderBottom: 'none' }}
                    >
                      {dataItem.autoResumeForm === ''
                        ? '-'
                        : dataItem.autoResumeForm}
                    </TableCell>
                    <TableCell
                      id="more-button"
                      onClick={handleClick}
                      aria-controls={open ? 'more-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      sx={{ padding: '5px', borderBottom: 'none' }}
                    >
                      <MoreVertIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="more-menu"
        anchorEl={anchorElement}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'more-button',
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          // onClick={() => handleClose()}
          onClick={() => {
            handleClose();
            setShowResumeModal(true);
          }}
          style={{ padding: '10px 20px', textAlign: 'left' }}
        >
          {programMmgt.RESUME_SURROGATE}
        </MenuItem>
        <MenuItem
          // onClick={handleClose}
          onClick={() => {
            handleClose();
            setShowPauseModal(true);
          }}
          style={{ padding: '10px 20px', textAlign: 'left' }}
        >
          {programMmgt.PAUSE_SURROGATE}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{ padding: '10px 20px', textAlign: 'left' }}
        >
          {programMmgt.EDIT_SCHEDULE_PAUSE}
        </MenuItem>
      </Menu>
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          handleSuccess={successModal}
          title={'Card For Card - Pause'}
          pause_content={'You can pause it or perform a scheduled pause.'}
          scheduledPause_content={
            'Please choose a date range to perform a scheduled pause.'
          }
          textarea_title={'Add Remarks'}
          radioValuOne={NORMAL_PAUSE}
          radioValuTwo={SCHEDULED_PAUSE}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          pauseMethodChecking={(arg1: string) => pauseMethodChange(arg1)}
          close={'Close'}
          submit={'Submit'}
          datepickerLabelStart={'Start Date and time'}
          datepickerLabelEnd={'End Date and time'}
        />
      )}
      {showPauseSuccessModal && (
        <CustomModal
          openSuccess={showPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Pause'}
          successModalMsg={
            ' Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer'
          }
          btn={' Close'}
        />
      )}
      {showScheduledPauseSuccessModal && (
        <CustomModal
          openSuccess={showScheduledPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Scheduled Pause'}
          successModalMsg={
            'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
          }
          btn={' Close'}
        />
      )}
      {showResumeModal && (
        <CustomModal
          openSuccess={showResumeModal}
          handleCloseSuccess={closeModal}
          title={'AQB - Resume Now'}
          handleSuccess={resumeSuccessModal}
          pause_content={
            'You will be able to resume your paused surrogate here.'
          }
          textarea_title={'Add Remarks'}
          dateRange_title={'Enter Date range'}
          maxLength={'Maximum of 500 words'}
          close={'Close'}
          submit={'Submit'}
        />
      )}
      {showResumeSuccessModal && (
        <CustomModal
          openSuccess={showResumeSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'AQB - Resume Now'}
          successModalMsg={
            'Your action of Resuming - AQB Surrogate has been successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
};
