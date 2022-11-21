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
    autoResumeForm: 'Auto Resume Form',
    more: 'More',
  },
];
export const ListView = ({ data }: any) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState<number[]>([]);
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
  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table aria-label="Table">
          <TableHead
            style={{ background: colors.tableHeaderLightBlue }}
            sx={{ padding: '5px' }}
          >
            {tableHeaderData.map((items: dataHeaderList, index: number) => (
              <TableRow key={index} sx={{ padding: '5px' }}>
                <TableCell padding="checkbox" sx={{ padding: '5px' }}>
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
                <TableCell sx={{ fontWeight: 800, padding: '5px' }}>
                  {items.surrogateProgramme}
                  <IconButton onClick={() => handleSortByName()}>
                    <img src={UnfoldMoreIcon} alt="Sort Icon" />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: '5px' }}>
                  {items.activeSince}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: '5px' }}>
                  {items.lastModify}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: '5px' }}>
                  {items.status}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: '5px' }}
                  align="center"
                >
                  {items.autoResumeForm}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: '5px' }}>
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
                    style={
                      index % 2
                        ? { background: colors.white }
                        : { background: colors.tableGrey }
                    }
                    sx={{ padding: '5px' }}
                  >
                    <TableCell padding={'checkbox'} sx={{ padding: '5px' }}>
                      <Checkbox
                        color={'secondary'}
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onChange={() => handleClickCheckbox(dataItem.id)}
                      />
                    </TableCell>
                    <TableCell sx={{ padding: '5px' }}>
                      {dataItem.surrogateProgramme}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: checkTagStatus(dataItem.activeSince).color,
                        padding: '5px',
                      }}
                    >
                      {dataItem.activeSince}
                    </TableCell>
                    <TableCell sx={{ padding: '5px' }}>
                      {dataItem.lastModify}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: checkTagStatus(dataItem.status).color,
                        padding: '5px',
                      }}
                    >
                      {dataItem.status}
                    </TableCell>
                    <TableCell align="center" sx={{ padding: '5px' }}>
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
                      sx={{ padding: '5px' }}
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
          onClick={handleClose}
          style={{ padding: '10px 20px', textAlign: 'left' }}
        >
          {programMmgt.RESUME_SURROGATE}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
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
    </Stack>
  );
};
