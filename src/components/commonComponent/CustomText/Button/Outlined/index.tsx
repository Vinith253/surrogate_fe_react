import * as React from 'react';
import { Button, Typography } from '@mui/material';

const BtnOutlined = (props: any) => {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        height: props?.BtnHeight ?? 40,
        minWidth: props?.BtnWidth ?? 100,
        border: '1px solid #0662B7',
      }}
      variant="outlined"
    >
      <Typography
        sx={{
          color: '#0662B7',
          textTransform: 'capitalize',
          fontSize: 13,
        }}
      >
        {props.title}
      </Typography>
    </Button>
  );
};
export default BtnOutlined;
