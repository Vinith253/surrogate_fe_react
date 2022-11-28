import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

function UserManagement() {
  return (
    <Box>
      <Box>
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
      </Box>
      <Divider />
    </Box>
  );
}

export default UserManagement;
