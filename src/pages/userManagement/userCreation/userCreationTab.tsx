import React from 'react';
import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import Popover from '../../../components/commonComponent/Popover';
import './style.scss';

function UserCreationTab() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const createUserMenu = [
    {
      label: 'Single User Upload',
      routePath: '/userManagement/userCreation/createUser',
    },
    { label: 'Bulk User Upload', routePath: '' },
  ];

  return (
    <Stack>
      <Box className="user-header-container">
        <ScreenHeader
          title="Create User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />
        <Button
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          id="basic-button"
          onClick={handleClick}
        >
          Add New User
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          options={createUserMenu}
        />
      </Box>
    </Stack>
  );
}

export default UserCreationTab;
