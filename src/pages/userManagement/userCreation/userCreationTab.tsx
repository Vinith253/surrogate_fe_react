import React from 'react';
import { Typography, Menu, MenuItem, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import TypographyInfo from '../../../components/commonComponent/CustomText/Info';
import './style.scss';
import AddIcon from '@mui/icons-material/Add';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { useNavigate } from 'react-router-dom';

function UserCreationTab() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openCardMenu = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Box className="user-header-container">
        <ScreenHeader
          title="Create User"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />
        <Box>
          <Button
            sx={{ textTransform: 'capitalize' }}
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            aria-controls={openCardMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openCardMenu ? 'true' : undefined}
            id="basic-button"
            onClick={handleCardMenuClick}
          >
            Add New User
          </Button>
          <Menu
            className="add-user-menu-container"
            id="basic-menu"
            anchorEl={anchorEl}
            open={openCardMenu}
            onClose={handleCardMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              style={{ fontSize: '13px' }}
              onClick={() =>
                navigate('/userManagement/userCreation/createUser')
              }
            >
              Single User Upload
            </MenuItem>
            <MenuItem style={{ fontSize: '13px' }}>Bulk User Upload</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Stack>
  );
}

export default UserCreationTab;
