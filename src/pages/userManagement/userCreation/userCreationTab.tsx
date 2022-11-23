import { Typography, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import TypographyInfo from '../../../components/commonComponent/CustomText/Info';
import './style.scss';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

function UserCreationTab() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openCardMenu = Boolean(anchorEl);

  const handleCardMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCardMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Stack>
        <Box className="user-header-container">
          <Box>
            <Typography
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
              // variant="body1"
              color="textPrimary"
            >
              Create User
            </Typography>
            <TypographyInfo title="From here you can create access presets to assign with users in Users Creation." />
          </Box>
          <Box>
            <Button
              sx={{ textTransform: 'capitalize' }}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              aria-controls={openCardMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openCardMenu ? 'true' : undefined}
              // onClick={handleCardMenuClick}
              id="basic-button"
            >
              Add New User
            </Button>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default UserCreationTab;
