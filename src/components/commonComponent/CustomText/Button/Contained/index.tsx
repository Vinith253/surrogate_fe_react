import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { type } from 'os';

const BtnContained = ( props:any ) => {
  return (
    <Button
      sx={{ height: 30, width: 70 }}
      variant="contained"
      color="secondary"
      onClick={props.onClick}
    >
      <Typography
        sx={{ textTransform: 'capitalize', fontSize: 12, fontWeight: 'bold' }}
      >
        {props.title}
      </Typography>
    </Button>
  );
};
export default BtnContained;
