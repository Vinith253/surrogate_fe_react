import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

function Card() {
  return (
    <Paper elevation={3} sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1.5rem 1rem',
        }}
      >
        <Box>
          <Typography fontSize={18} fontWeight={'bold'}>
            Pending Actions
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Divider variant="middle" />
    </Paper>
  );
}

export default Card;
