import {
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import TypographyInfo from '../../../../components/commonComponent/CustomText/Info';
import '../style.scss';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import PaginationComp from '../../../../components/commonComponent/Pagination/Pagination';
import { roleCreationHeaderList, rows } from './rolecreation.const';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';

function RoleCreationTab() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilterteredData] = useState(rows);

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  const tableHeaderData = [
    {
      id: 'ID',
      roleName: 'Role Name',
      initiatedBy: 'Initiated By',
      approvedBy: 'Approved By',
      initiatedDate: 'Initiated Date',
      more: 'More',
    },
  ];

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

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

  return (
    <Stack>
      <Stack>
        <Box className="role-header-container">
        <ScreenHeader
          title='Role Creation'
          info='From here you can create access presets to assign with users in Users Creation.'
          showBackButton={false}/>
          <Box>
            <Button
              sx={{ textTransform: 'capitalize' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              onClick={handleCardMenuClick}
              id="basic-button"
            >
              Create Role{' '}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openCardMenu}
              onClose={handleCardMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  // handleClose();
                  navigate('/userManagement/roleCreation/createRole');
                }}
              >
                Create New Role
              </MenuItem>
              <MenuItem onClick={() => {}}>Duplicate Role</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Box
            sx={{
              paddingX: 4,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingY: 2,
            }}
          >
            <Typography>
              Various organisations along with basic details.
            </Typography>
          </Box>
          <Divider />
          <Box className="tableBox">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="Table">
                <TableHead className="tableHead">
                  {tableHeaderData.map(
                    (items: roleCreationHeaderList, index: number) => (
                      <TableRow key={index}>
                        <TableCell
                          width={'50px'}
                          align="center"
                          className="tableCell"
                        >
                          #
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.roleName}
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.initiatedBy}
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.approvedBy}
                        </TableCell>
                        <TableCell width={'235px'} className="tableCell">
                          {items.initiatedDate}
                        </TableCell>
                        <TableCell
                          width={'235px'}
                          align="right"
                          className="tableCell"
                        >
                          {items.more}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center" width={'50px'}>
                        {row.id}
                      </TableCell>
                      <TableCell align="left" width={'235px'}>
                        {row.roleName}
                      </TableCell>
                      <TableCell align="left" width={'235px'}>
                        {row.initiatedBy}
                      </TableCell>
                      <TableCell align="left" width={'235px'}>
                        {row.approvedBy}
                      </TableCell>
                      <TableCell align="left" width={'235px'}>
                        {row.initiatedDate}
                      </TableCell>
                      <TableCell align="right">
                        <Box
                          id="more-button"
                          onClick={handleClick}
                          aria-controls={menuOpen ? 'more-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={menuOpen ? 'true' : undefined}
                        >
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <Menu
                  id="more-menu"
                  anchorEl={anchorElement}
                  open={menuOpen}
                  MenuListProps={{
                    'aria-labelledby': 'more-button',
                  }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  // transformOrigin={{
                  //   vertical: 'top',
                  //   horizontal: 'right',
                  // }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      // navigate('/productManagement/cardCatalogue/singleupload/reviewCard');
                    }}
                    className="menu"
                  >
                    View
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="menu">
                    Edit
                  </MenuItem>
                </Menu>
              </Table>
            </TableContainer>

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
                page == Math.ceil(filteredData.length / rowsPerPage)
              }
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default RoleCreationTab;
