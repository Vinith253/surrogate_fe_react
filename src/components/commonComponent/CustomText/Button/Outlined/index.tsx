import * as React from 'react';
import { Button, Typography } from '@mui/material';

const BtnOutlined = (props: any) => {
  return (
    <Button
      onClick={props.onClick}
      sx={{ height: 34, minWidth: 90, border: '1px solid #0662B7' }}
      variant="outlined"
    >
      <Typography
        sx={{
          color: '#0662B7',
          textTransform: 'capitalize',
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        {props.title}
      </Typography>
    </Button>
  );
};
export default BtnOutlined;
