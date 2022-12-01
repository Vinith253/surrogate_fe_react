import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { type } from 'os';

const BtnContained = (props: any) => {
  return (
    <Button
      sx={{ height: props?.BtnHeight ?? 40, minWidth: props?.BtnWidth ?? 100 }}
      variant="contained"
      color="secondary"
      onClick={props.onClick}
      disabled={props?.disabled ?? false}
    >
      <Typography sx={{ textTransform: 'capitalize', fontSize: 13 }}>
        {props.title}
      </Typography>
    </Button>
  );
};
export default BtnContained;
